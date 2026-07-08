import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'esnext'
  },
  optimizeDeps: {
    exclude: ['@novnc/novnc']
  },
  server: {
    port: 3000,
    
    // Akceptuje każdy adres URL (np. każdy losowy tunel Cloudflare)
    allowedHosts: true, 

    // Całkowicie automatyczna konfiguracja Live-Reload dla tuneli HTTPS
    hmr: {
      protocol: 'wss',
      clientPort: 443
      // Usunięto parametr 'host' – teraz Vite sam sprawdzi w przeglądarce, jaki to host!
    },

    headers: {
      'Content-Security-Policy': "frame-ancestors * https://*.discord.com https://discord.com",
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    },
    proxy: {
      '/api': { 
        target: 'http://localhost:3001', 
        changeOrigin: true 
      },
      '/websockify': { 
        target: 'http://localhost:6080', 
        ws: true,
        changeOrigin: true 
      }
    }
  }
});