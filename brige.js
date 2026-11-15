import { WebSocketServer } from 'ws';
import net from 'net';

const wss = new WebSocketServer({ port: 6080, host: '127.0.0.1', maxPayload: 1024 * 1024 });
console.log('🚀 Mostek WebSocket (6080) -> VNC (5900) uruchomiony!');

wss.on('connection', (ws) => {
    console.log('🔌 Discord się łączy, otwieram tunel do VMware...');
    
    // Łączymy się z Twoim serwerem VNC w VMware
    const vncSocket = net.createConnection(5900, '127.0.0.1');

    ws.on('message', (data) => { if (vncSocket.writable) vncSocket.write(data); });
    vncSocket.on('data', (data) => { if (ws.readyState === 1) ws.send(data); });

    ws.on('close', () => { console.log('❌ Discord zamknął połączenie.'); vncSocket.end(); });
    vncSocket.on('close', () => { console.log('❌ VMware zamknęło połączenie.'); ws.close(); });
    ws.on('error', () => vncSocket.end());
    vncSocket.on('error', () => ws.close());
});