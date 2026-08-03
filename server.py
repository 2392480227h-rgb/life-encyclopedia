"""生活常识百科 - 联网搜索服务器"""
import json
import os
import urllib.parse
from http.server import HTTPServer, SimpleHTTPRequestHandler

# 加载搜索缓存
CACHE_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'search_cache.json')
with open(CACHE_FILE, 'r', encoding='utf-8') as f:
    SEARCH_CACHE = json.load(f)

class SearchHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        
        if parsed.path == '/api/search':
            params = urllib.parse.parse_qs(parsed.query)
            query = params.get('q', [''])[0].strip()
            
            if not query:
                self.send_json({'results': [], 'query': ''})
                return
            
            results = self.search_cache(query)
            self.send_json({'results': results, 'query': query})
        else:
            super().do_GET()
    
    def search_cache(self, query):
        """智能匹配缓存中的搜索结果"""
        results = []
        seen = set()
        
        # 1. 精确匹配关键词
        for key, items in SEARCH_CACHE.items():
            if key in query:
                for item in items:
                    if item['href'] not in seen:
                        results.append(item)
                        seen.add(item['href'])
        
        # 2. 模糊匹配 - 检查查询词是否在 key 中
        if len(results) < 4:
            for key, items in SEARCH_CACHE.items():
                if key not in query:  # 避免重复
                    # 检查是否有交集
                    key_chars = set(key)
                    query_chars = set(query)
                    if key_chars & query_chars:
                        for item in items:
                            if item['href'] not in seen:
                                results.append(item)
                                seen.add(item['href'])
        
        # 3. 如果还是没有结果，返回通用结果
        if not results:
            for key in ['厨房', '健康', '省电']:
                for item in SEARCH_CACHE.get(key, [])[:2]:
                    if item['href'] not in seen:
                        results.append(item)
                        seen.add(item['href'])
        
        return results[:8]
    
    def send_json(self, data):
        self.send_response(200)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(json.dumps(data, ensure_ascii=False).encode('utf-8'))
    
    def log_message(self, format, *args):
        if '/api/search' in str(args[0]):
            print(f"[搜索] {args[0]}")

if __name__ == '__main__':
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    server = HTTPServer(('0.0.0.0', 8080), SearchHandler)
    print('🚀 生活常识百科已启动: http://localhost:8080/life-encyclopedia.html')
    print(f'📚 已加载 {len(SEARCH_CACHE)} 个搜索分类')
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        server.shutdown()