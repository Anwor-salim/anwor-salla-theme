const http = require('http');
const fs = require('fs');
const path = require('path');

http.get('http://127.0.0.1:9222/json', res => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    const list = JSON.parse(data);
    const p = list.find(x => x.url.includes('salla.design') && x.url.includes('assets_url'));
    if (!p) {
      console.log('No styled salla page found');
      return;
    }
    const ws = new WebSocket(p.webSocketDebuggerUrl);
    ws.onopen = async () => {
      console.log('Connected to CDP');
      // Set viewport to 1600x1200
      ws.send(JSON.stringify({
        id: 1,
        method: 'Emulation.setDeviceMetricsOverride',
        params: {
          width: 1600,
          height: 1200,
          deviceScaleFactor: 1,
          mobile: false
        }
      }));
    };

    let step = 0;
    const outputDir = 'd:/anwor-salla-theme-master/anwor-salla-theme-master/anwor-theme/screenshots/marketplace_1600x1200';
    if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

    ws.onmessage = msg => {
      const resp = JSON.parse(msg.data);
      if (resp.id === 1) {
        // Step 1: Scroll to top and capture Homepage
        setTimeout(() => {
          ws.send(JSON.stringify({
            id: 10,
            method: 'Runtime.evaluate',
            params: { expression: 'window.scrollTo(0, 0);' }
          }));
          setTimeout(() => {
            ws.send(JSON.stringify({
              id: 11,
              method: 'Page.captureScreenshot',
              params: { clip: { x: 0, y: 0, width: 1600, height: 1200, scale: 1 } }
            }));
          }, 800);
        }, 1000);
      } else if (resp.id === 11) {
        fs.writeFileSync(path.join(outputDir, '01_homepage_hero.png'), Buffer.from(resp.result.data, 'base64'));
        console.log('Saved 01_homepage_hero.png');

        // Step 2: Scroll to perfume discovery & categories
        ws.send(JSON.stringify({
          id: 20,
          method: 'Runtime.evaluate',
          params: { expression: 'window.scrollTo(0, 480);' }
        }));
        setTimeout(() => {
          ws.send(JSON.stringify({
            id: 21,
            method: 'Page.captureScreenshot',
            params: { clip: { x: 0, y: 0, width: 1600, height: 1200, scale: 1 } }
          }));
        }, 800);
      } else if (resp.id === 21) {
        fs.writeFileSync(path.join(outputDir, '02_perfume_catalog.png'), Buffer.from(resp.result.data, 'base64'));
        console.log('Saved 02_perfume_catalog.png');

        // Step 3: Scroll to fragrance story
        ws.send(JSON.stringify({
          id: 30,
          method: 'Runtime.evaluate',
          params: { expression: 'window.scrollTo(0, 1150);' }
        }));
        setTimeout(() => {
          ws.send(JSON.stringify({
            id: 31,
            method: 'Page.captureScreenshot',
            params: { clip: { x: 0, y: 0, width: 1600, height: 1200, scale: 1 } }
          }));
        }, 800);
      } else if (resp.id === 31) {
        fs.writeFileSync(path.join(outputDir, '03_fragrance_story.png'), Buffer.from(resp.result.data, 'base64'));
        console.log('Saved 03_fragrance_story.png');

        // Step 4: Scroll to VIP Club & Footer
        ws.send(JSON.stringify({
          id: 40,
          method: 'Runtime.evaluate',
          params: { expression: 'window.scrollTo(0, document.body.scrollHeight - 1250);' }
        }));
        setTimeout(() => {
          ws.send(JSON.stringify({
            id: 41,
            method: 'Page.captureScreenshot',
            params: { clip: { x: 0, y: 0, width: 1600, height: 1200, scale: 1 } }
          }));
        }, 800);
      } else if (resp.id === 41) {
        fs.writeFileSync(path.join(outputDir, '04_vip_club_footer.png'), Buffer.from(resp.result.data, 'base64'));
        console.log('Saved 04_vip_club_footer.png');
        console.log('All 4 screenshots saved successfully!');
        process.exit(0);
      }
    };
  });
});
