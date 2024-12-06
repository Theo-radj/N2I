
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/N2I/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 691, hash: '914298ae7ddaf172551e72347fd4f6b94f5af863d22dced131e5103fe52aba08', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1204, hash: 'a1cfb9b300c5dd1bbecf884893944502fb0dfa9e9f1d3728aac4aa7c45798692', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
