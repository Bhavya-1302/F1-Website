"""
APEX Formula 1 World Championship — HTTP Server
A zero-dependency Python 3 web server for serving the Formula 1 Experience website.
"""

import http.server
import socketserver
import os
import sys

# Ensure UTF-8 output on Windows consoles
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class F1HTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # Enable CORS and caching headers for high-performance delivery
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

def run_server():
    os.chdir(DIRECTORY)
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), F1HTTPRequestHandler) as httpd:
        print("=" * 65)
        print("[F1] APEX FORMULA 1 WORLD CHAMPIONSHIP WEB APPLICATION")
        print("=" * 65)
        print(f"[*] Server active at: http://localhost:{PORT}")
        print(f"[*] Serving directory: {DIRECTORY}")
        print("[*] Press Ctrl+C to stop the server.")
        print("=" * 65)
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down F1 server. Pit stop complete!")
            httpd.shutdown()

if __name__ == "__main__":
    run_server()
