import getConfig from '../../rollup.config.base.js';

export default getConfig(null, { external: ['resize-observer-polyfill'] });
