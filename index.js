import { renderToString } from 'react-dom/server';
import HelloWorld from './HelloWorld.jsx';

const PORT = 3001;
Bun.serve({
  port: PORT,
  routes: {
    '/': async req => {
      let foo = { bar: 1 };
      let app = HelloWorld({ foo });
      let html = await renderToString(app);
      return new Response(html, {
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
        },
      });
    },
  },
});

console.log(`Listening at http://localhost:${PORT}`);
