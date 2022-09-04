<template>
    <div class="page-changelog">
        <ul class="timeline" ref="timeline"></ul>
        <component ref="changeLog" :is="name" />
    </div>
</template>
<script>
import vanlementUi from './log/vanlement-ui.md';
import masterDesign from './log/master-design.md';
import vantopUtil from './log/vantop-util.md';
import vantopEditor from './log/vantop-editor.md';
import elementUi from './log/element-ui.md';
import vanTable from './log/van-table.md';

export default {
    components: {
        vanlementUi,
        masterDesign,
        vantopUtil,
        vantopEditor,
        elementUi,
        vanTable,
    },
    data() {
        return {
            name: 'vanlementUi',
        };
    },
    watch: {
        '$route.meta.changelogName': {
            handler: function(val) {
                this.name = val;
                this.$nextTick(()=>{
                    this.formatLog();
                });
            },
        },
    },
    created() {
        this.name = this.$route.meta.changelogName;
    },
    mounted() {
        this.formatLog();
        const scrollbarDom = document.body.querySelector('.nextop-docs--wrapper > .page-component__scroll > .md-scrollbar__wrap ');
        let hash = this.$route.hash;
        if (scrollbarDom) {
            let position = {
                top: 0,
                left: 0,
                behavior: 'smooth',
            };
            if (hash) {
                hash = hash.slice(1);
                let hashDom = document.getElementById(hash);
                hashDom = hashDom.parentElement;
                const top = (hashDom && hashDom.offsetTop) || 0;
                position.top = top > 20
                    ? top - 20 : top;
            }
            scrollbarDom.scrollTo(position);
        }
    },
    methods: {
        formatLog() {
            const changeLog = this.$refs.changeLog;
            const changeLogNodes = changeLog.$el.children;
            let fragments = '';

            for (let len = changeLogNodes.length, i = 0; i < len; i++) {
                let node = changeLogNodes[i];
                let a = changeLogNodes[i].querySelector('a');
                if (node.tagName !== 'H3') {
                    a && a.remove();
                    fragments += changeLogNodes[i].outerHTML;
                } else {
                    a.remove();
                    let release = changeLogNodes[i].textContent.trim();
                    const releaseId = release.split('.').join('_');
                    fragments += `<li><h3 id="${releaseId}"><a class="nextop-docs--anchor" href="#${releaseId}">#</a> ${release}</h3>`;
                }
            }
            this.$refs.timeline.innerHTML = `${fragments}</li>`;
            changeLog.$el.remove();
        },
    },
};
</script>
<style lang="scss">
.page-changelog {
    padding-bottom: 100px;
    .heading {
        font-size: 24px;
        margin-bottom: 20px;
        color: #333;
        margin-top: 20px;
    }

    .timeline {
        padding: 0;
        padding-bottom: 10px;
        position: relative;
        color: #5e6d82;

        > li {
            position: relative;
            padding-bottom: 15px;
            list-style: none;
            line-height: 1.8;
            background: #fff;
            border: 1px solid #ddd;
            border-radius: 10px;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
            transition: all .3s;
            &:hover {
                box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.08),
                    0 10px 10px -5px rgba(0, 0, 0, 0.02);
            }

            &:not(:last-child) {
                margin-bottom: 50px;
            }
        }

        ul {
            padding: 30px 30px 15px;

            ul {
                padding: 0;
                padding-top: 5px;
                padding-left: 27px;

                li {
                    padding-left: 0;
                    color: #555;
                    word-break: normal;
                }

                li::before {
                    content: "";
                    circle: 4px #fff;
                    border: solid 1px #333;
                    margin-right: -12px;
                    display: inline-block;
                    vertical-align: middle;
                }
            }
        }

        li li {
            font-size: 16px;
            list-style: none;
            padding-left: 20px;
            padding-bottom: 5px;
            color: #333;
            word-break: break-all;

            &:before {
                content: "";
                circle: 6px #333;
                transform: translateX(-20px);
                display: inline-block;
                vertical-align: middle;
            }
        }

        i {
            padding: 0 20px;
            display: inline-block;
        }

        h3 {
            margin: 0;
            padding: 15px 30px;
            border-bottom: 1px solid #ddd;
            font-size: 20px;
            color: #333;
            font-weight: bold;

            a {
                opacity: 1;
                font-size: 20px;
                float: none;
                margin-left: 0;
                margin-right: 5px;
            }
        }

        h4 {
            margin: 0;
            padding: 20px 35px 0;
            margin-bottom: -10px;
            font-size: 18px;
            font-weight: bold;
        }

        p {
            margin: 0;
        }

        em {
            position: absolute;
            right: 30px;
            font-style: normal;
            top: 23px;
            font-size: 16px;
            color: #666;
        }
    }
}
</style>