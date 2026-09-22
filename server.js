// 57-DMTT Platformasi uchun Universal Production Server (Render, Vercel, Railway)
const path = require('path');
const PORT = parseInt(process.env.PORT, 10) || 3000;

function runWithExpress() {
    const express = require('express');
    const app = express();

    app.use(express.static(__dirname, {
        maxAge: '1d',
        setHeaders: (res, filePath) => {
            if (filePath.endsWith('.html')) {
                res.setHeader('Cache-Control', 'no-cache');
            }
        }
    }));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'index.html'));
    });

    const server = app.listen(PORT, '0.0.0.0', () => {
        console.log(`====================================================`);
        console.log(`57-DMTT platformasi (Express) ishga tushdi!`);
        console.log(`Server porti: ${PORT}`);
        console.log(`====================================================`);
    });

    server.on('error', (err) => {
        console.error('Server error:', err);
    });
}

function runWithHttp() {
    const http = require('http');
    const fs = require('fs');

    const MIME_TYPES = {
        '.html': 'text/html; charset=UTF-8',
        '.css': 'text/css; charset=UTF-8',
        '.js': 'application/javascript; charset=UTF-8',
        '.json': 'application/json; charset=UTF-8',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.svg': 'image/svg+xml',
        '.ico': 'image/x-icon',
        '.pdf': 'application/pdf',
        '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        '.woff': 'font/woff',
        '.woff2': 'font/woff2',
        '.ttf': 'font/ttf'
    };

    const server = http.createServer((req, res) => {
        let reqUrl = req.url.split('?')[0];
        let safePath = path.normalize(decodeURIComponent(reqUrl)).replace(/^(\.\.[\/\\])+/, '');
        let filePath = path.join(__dirname, safePath === '/' ? 'index.html' : safePath);

        fs.stat(filePath, (err, stats) => {
            if (err || !stats.isFile()) {
                filePath = path.join(__dirname, 'index.html');
            }

            const ext = path.extname(filePath).toLowerCase();
            const contentType = MIME_TYPES[ext] || 'application/octet-stream';

            fs.readFile(filePath, (readErr, content) => {
                if (readErr) {
                    res.writeHead(500, { 'Content-Type': 'text/plain; charset=UTF-8' });
                    res.end("Server xatosi: Faylni o'qib bo'lmadi.");
                    return;
                }
                res.writeHead(200, {
                    'Content-Type': contentType,
                    'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=86400'
                });
                res.end(content);
            });
        });
    });

    server.listen(PORT, '0.0.0.0', () => {
        console.log(`====================================================`);
        console.log(`57-DMTT platformasi (HTTP) ishga tushdi!`);
        console.log(`Server porti: ${PORT}`);
        console.log(`====================================================`);
    });

    server.on('error', (err) => {
        console.error('Server error:', err);
    });
}

process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
});

try {
    runWithExpress();
} catch (e) {
    runWithHttp();
}