const Config = require('markdown-it-chain');
const anchor = require('markdown-it-anchor');
const containers = require('./containers');
const overWriteFenceRule = require('./fence');
const { slugify, } = require('./util');

const config = new Config();

config
    .options.html(true).end()
    .plugin('anchor').use(anchor, [{
        slugify,
        level: 2,
        permalink: true,
        permalinkBefore: true,
        permalinkSymbol: '#',
        permalinkClass: 'nextop-docs--anchor',
    }]).end()
    .plugin('containers').use(containers).end();

const md = config.toMd();
overWriteFenceRule(md);

module.exports = md;