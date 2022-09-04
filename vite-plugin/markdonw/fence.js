// 覆盖默认的 fence 渲染策略
module.exports = md => {
    const defaultRender = md.renderer.rules.fence;
    const LAST_TAG = '</pre>';
    md.renderer.rules.fence = (tokens, idx, options, env, self) => {
        const token = tokens[idx];

        // 复制代码功能
        const originResult = defaultRender(tokens, idx, options, env, self);
        const tpls = [
            '<div class="nextop-demo-copy-wrapper">',
            '<div class="nextop-demo-copy-notify">复制成功啦～</div>',
            '<button ',
            'class="nextop-demo-copy-btn" ',
            'onclick="_docsCopy(this)">复制代码</button>',
            '</div>'
        ];

        // 判断该 fence 是否在 :::demo 内
        const prevToken = tokens[idx - 1];
        const isInDemoContainer = prevToken && prevToken.nesting === 1 && prevToken.info.trim().match(/^demo\s*(.*)$/);
        if (token.info === 'html' && isInDemoContainer) {
            const result =  `<template slot="highlight"><pre v-pre><code class="html">${md.utils.escapeHtml(token.content)}</code></pre></template>`;
            return result.replace(LAST_TAG, `${tpls.join('')}${LAST_TAG}`);
        }
        return  originResult.replace(LAST_TAG, `${tpls.join('')}${LAST_TAG}`);

    };
};
