import md2vue from './md2vue';

const mdRegex = /\.md$/;

function MarkdownLoad() {
    return {
        name: 'markdown-transform-vue',
        transform(raw, id) {
            if (!mdRegex.test(id)) return;

            try {
                return md2vue(raw, id);
            } catch (e) {
                throw Error(e);
            }
        },
        async handleHotUpdate(ctx) {
          if (!mdRegex.test(ctx.file)) return;

          const defaultRead = ctx.read;
          ctx.read = async function() {
            return md2vue(await defaultRead());
          };
        },
    };
}

export default MarkdownLoad;