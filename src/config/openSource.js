export const OPEN_ROUTER = [
    'git',
    'code-style',
    'cli',
    'css-theme',
    'master-design',
    'van-table',
    'vanlement-ui',
    'vantop-editor',
    'vantop-util',
    'example',
    'changelog'
];


const openSource = import.meta.env.VITE_OPEN_SOURCE;

export const isOpen = openSource === 'true' || openSource === true;
