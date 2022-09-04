<!--
 * @Descripttion: 在线编码
 * @Author: 蔡远程
 * @Date: 2022-02-01 23:19:36
 * @LastEditTime: 2022-02-14 16:19:47
 * @LastEditors: 蔡远程
-->
<template>
    <div class="docs-example--container">
        <el-row class="docs-example--operation">
            <el-button
                type="primary"
                @click="run"
            >运行</el-button>
            <p>暂时不支持 jsx 写法，可以使用 render 函数写法。</p>
        </el-row>
        <el-row
            :gutter="20"
            class="docs-exapmle--wrapper"
        >
            <el-col :span="12">
                <code-editor
                    ref="editor"
                    class="docs-example--editor"
                    @click.native="handleFocus"
                />
            </el-col>
            <el-col :span="12">
                <div
                    ref="display"
                    class="docs-example--display"
                />
            </el-col>
        </el-row>
    </div>
</template>

<script>
import CodeEditor from './code-editor.vue';
import Vue from 'vue';
function randomStr(len = 32) {
  const $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
  const maxPos = $chars.length;
  let str = '';
  for (let i = 0; i < len; i++) {
    str += $chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return str;
}
export default {
    name: 'Example',
    components: {
        CodeEditor,
    },
    data() {
        return {
            html: '',
            js: '',
            css: '',
            id: randomStr(),
            show: true,
        };
    },
    mounted() {
        const code = localStorage.getItem('DOCS_DEMO_CODE');
        if (this.$route.query.from === 'demo' && code) this.$refs.editor.code = code;
        this.renderCode(false);
    },
    methods: {
        handleFocus() {
            const elm = this.$refs.editor.$el.querySelector('.prism-editor__textarea');
            elm && elm.focus();
        },
        getSource(source, type) {
            const regex = new RegExp(`<${type}[^>]*>`);
            let openingTag = source.match(regex);

            if (!openingTag) return '';
            openingTag = openingTag[0];

            return source.slice(
                source.indexOf(openingTag) + openingTag.length,
                source.lastIndexOf(`</${type}>`)
            );
        },
        splitCode() {
            const code = this.$refs.editor.code;
            const script = this.getSource(code, 'script').replace(
                /export default/,
                'return '
            );
            const style = this.getSource(code, 'style');
            let template = this.getSource(code, 'template');

            //兼容没有 template 包裹的情况
            if (!template) template = code.replace(/<(script|style)[\s\S]+<\/\1>/g, '').trim();

            this.js = script || 'return {}';
            this.css = style;
            this.html = template;
        },
        renderCode(tips = true) {
            this.splitCode();

            if (this.html !== '' && this.js !== '') {
                const parseStrToFunc = new Function(this.js)();

                parseStrToFunc.template = `<div id="nextop-docs-example">${this.html}</div>`;
                const Component = Vue.extend(parseStrToFunc);
                this.component = new Component().$mount();

                this.$refs.display.appendChild(this.component.$el);

                if (this.css !== '') {
                    const style = document.createElement('style');
                    style.type = 'text/css';
                    style.id = this.id;
                    style.innerHTML = this.css;
                    document.getElementsByTagName('head')[0].appendChild(style);
                }

                tips && this.$message.success('运行成功！');
            } else {
                this.$message.error('运行失败，代码格式不正确！');
            }

        },
        destroyCode() {
            const $target = document.getElementById(this.id);
            if ($target) $target.parentNode.removeChild($target);

            if (this.component) {
                this.$refs.display.removeChild(this.component.$el);
                this.component.$destroy();
                this.component = null;
            }
        },
        run() {
            try {
                this.destroyCode();
                this.renderCode();
            } catch (err) {
                this.$message.error(`运行失败：${JSON.stringify(err.message)}`);
                throw Error(err);
            }
        },
    },
    beforeDestroy() {
        this.destroyCode();
    },
};
</script>

<style lang="scss">
.docs-example--container {
    .docs-example--operation {
        display: flex;
        align-items: flex-end;
        .el-button {
            margin: 10px 10px 0 0;
        }
        p {
            margin: 0;
            color: #9CA3AF;
        }
    }
    .docs-exapmle--wrapper {
        margin-top: 10px;
        height: calc(100vh - 220px);
        .docs-example--editor, .docs-example--display {
            border: 1px solid #D1D5DB;
            box-sizing: border-box;
            height: 100%;
        }
        .docs-example--display {
            padding: 20px;
            overflow: auto;
        }
        .el-col-12 {
            height: 99%;
        }
    }
}
</style>

