const { compileTemplate, } = require('@vue/component-compiler-utils');
const compiler = require('vue-template-compiler');

function stripScript(content) {
    const result = content.match(/<(script)>([\s\S]+)<\/\1>/);
    return result && result[2] ? result[2].trim() : '';
}

function stripStyle(content) {
    const result = content.match(/<(style)\s*>([\s\S]+)<\/\1>/);
    return result && result[2] ? result[2].trim() : '';
}

// 编写例子时不一定有 template。所以采取的方案是剔除其他的内容
function stripTemplate(content) {
    content = content.trim();
    if (!content) {
        return content;
    }
    return content.replace(/<(script|style)[\s\S]+<\/\1>/g, '').trim();
}

function pad(source) {
    return source
        .split(/\r?\n/)
        .map(line => `  ${line}`)
        .join('\n');
}

function genInlineComponentText(template, script) {
    // https://github.com/vuejs/vue-loader/blob/423b8341ab368c2117931e909e2da9af74503635/lib/loaders/templateLoader.js#L46
    const finalOptions = {
        source: `<div>${template}</div>`,
        filename: 'inline-component', // TODO：这里有待调整
        compiler,
    };
    const compiled = compileTemplate(finalOptions);
    // tips
    if (compiled.tips && compiled.tips.length) {
        compiled.tips.forEach(tip => {
            console.warn(tip);
        });
    }
    // errors
    if (compiled.errors && compiled.errors.length) {
        console.error(
            `\n  Error compiling template:\n${pad(compiled.source)}\n` +
            compiled.errors.map(e => `  - ${e}`).join('\n') +
            '\n'
        );
    }
    let demoComponentContent = `
    ${compiled.code}
  `;
    // todo: 这里采用了硬编码有待改进
    script = script.trim();
    if (script) {
        script = script.replace(/export\s+default/, 'const democomponentExport =');
    } else {
        script = 'const democomponentExport = {}';
    }
    demoComponentContent = `(function() {
    ${demoComponentContent}
    ${script}
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })()`;
    return demoComponentContent;
}


/* eslint-disable no-useless-escape */
// eslint-disable-next-line no-control-regex
const rControl = /[\u0000-\u001f]/g;
const rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’–—<>,.?/]+/g;
const rCombining = /[\u0300-\u036F]/g;

function slugify(str) {
    str = decodeURI(str);
    // Split accented characters into components
    return str.normalize('NFKD')
        // Remove accents
        .replace(rCombining, '')
        // Remove control characters
        .replace(rControl, '')
        // Replace special characters
        .replace(rSpecial, '-')
        // Remove continuous separators
        .replace(/\-{2,}/g, '-')
        // Remove prefixing and trailing separators
        .replace(/^\-+|\-+$/g, '')
        // ensure it doesn't start with a number (#121)
        .replace(/^(\d)/, '_$1')
        // lowercase
        .toLowerCase();
}


function complieComponent(code) {
    // 匹配所有组件的import
    const reg = /import.*from.*?[;\n]/g;
    const importsArr = code.match(reg);

    if (importsArr && importsArr.length > 0) {
        // 清空组件内的import，避免 import 顶层报错
        let componenetsString = code.replace(reg, '');
        const importStr = importsArr.join(' ');
        return `<script lang="jsx">
            ${importStr}
        export default {
        name: 'component-doc',
        components: {
            ${componenetsString}
        }
        }
        </script>`;
    }
    return `<script lang="jsx">
        export default {
          name: 'component-doc',
          components: {
            ${code}
          }
        }
      </script>`;

}


module.exports = {
    slugify,
    stripScript,
    stripStyle,
    stripTemplate,
    complieComponent,
    genInlineComponentText,
};

