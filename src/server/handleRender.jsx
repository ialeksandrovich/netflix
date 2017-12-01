import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import { App } from '../App';

function renderFullPage(html) {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset=utf-8>
          <title>React Server Side Rendering</title>
        </head>
        <body>
          <div id="app">${html}</div>
          <script src="/js/bundle.js"></script>
        </body>
      </html>
  `;
}

function handleRender(req, res) {
    const context = {};
    const app = (
        <StaticRouter location={req.url} context={context} >
            <App/>
        </StaticRouter>
    );

    const html = renderToString(app);

    if (context.url) {
        // Somewhere a `<Redirect>` was rendered
        return res.redirect(context.url);
    }

    return res.send(renderFullPage(html));
}

export default handleRender;
