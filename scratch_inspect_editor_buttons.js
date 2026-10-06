const http = require('http');

http.get('http://127.0.0.1:9222/json', res => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    const list = JSON.parse(data);
    const p = list.find(x => x.url.includes('s.salla.sa/themes/editor/draft-255070218'));
    if (!p) {
      console.log('No matching editor page');
      return;
    }
    const ws = new WebSocket(p.webSocketDebuggerUrl);
    ws.onopen = () => {
      ws.send(JSON.stringify({
        id: 1,
        method: 'Runtime.evaluate',
        params: {
          expression: `
            (() => {
              const items = Array.from(document.querySelectorAll('button, a, [role="button"]')).map(el => ({
                tag: el.tagName,
                text: el.innerText.trim(),
                title: el.getAttribute('title') || '',
                class: el.className
              }));
              return items.filter(x => x.text || x.title);
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
