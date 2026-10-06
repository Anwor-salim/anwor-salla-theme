const http = require('http');

http.get('http://127.0.0.1:9222/json', res => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    const list = JSON.parse(data);
    const p = list.find(x => x.url.includes('s.salla.sa/themes/editor/draft-255070218'));
    if (!p) return;
    const ws = new WebSocket(p.webSocketDebuggerUrl);
    ws.onopen = () => {
      ws.send(JSON.stringify({
        id: 1,
        method: 'Runtime.evaluate',
        params: {
          expression: `
            (() => {
              // Find all buttons and links in the top 80px of the viewport
              const elements = Array.from(document.querySelectorAll('*')).filter(el => {
                const rect = el.getBoundingClientRect();
                return rect.top >= 0 && rect.bottom <= 80 && (el.tagName === 'BUTTON' || el.tagName === 'A' || el.onclick || el.getAttribute('role') === 'button');
              });
              return elements.map(el => ({
                tag: el.tagName,
                text: el.innerText.trim(),
                outer: el.outerHTML.slice(0, 200)
              }));
            })()
          `,
          returnByValue: true
        }
      }));
    };
    ws.onmessage = msg => {
      const resp = JSON.parse(msg.data);
      if (resp.id === 1) {
        console.log(resp.result.result.value);
        process.exit(0);
      }
    };
  });
});
