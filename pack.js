const fs = require('fs');
const childProcess = require('child_process');

const LIBS = {
    VANTOP_UI: {
        name: 'master-design',
        path: 'node_modules/master-design',
        changelog: 'CHANGELOG.md',
    },
    VAN_TABLE: {
        name: 'van-table',
        path: 'node_modules/vxe-table',
    },
    VANTOP_UTIL: {
        name: 'vantop-util',
        path: 'node_modules/@master_vantop/vantop-util',
        changelog: 'CHANGELOG.md',
    },
    VANLEMENT_UI: {
        name: 'vanlement-ui',
        path: 'node_modules/element-ui',
        changelog: 'CHANGELOG.zh-CN.md',
    },
    VANTOP_EDITOR: {
        name: 'vantop-editor',
        path: 'node_modules/vantop-editor',
        changelog: 'CHANGELOG.md',
    },
};

let o = [];
Object.values(LIBS).forEach(i => {
    console.log(i.changelog);
    if (i.changelog) {
        // 复制changelog文件
        childProcess.exec(`mkdir -p src/views/changelog && cp ${process.cwd()}/${i.path}/${i.changelog} src/views/changelog/${i.name}.md`);
    }

    // 获取最新版本号
    try {
        // const FILE_PATH = `${process.cwd()}/${i.path}/package.json`;
        // fs.accessSync(FILE_PATH, fs.constants.F_OK);
        // const pkg = require(FILE_PATH);
        o.push({
            name: i.name,
            path: i.changelog ? `/changelog/${i.name}` : undefined,
            // version: pkg.version || 'N/A',
        });
    } catch (err) {
        o.push({
            name: i.name,
            path: i.changelog ? `/changelog/${i.name}` : undefined,
            // version: 'N/A',
        });
    }
});
// 写入版本号
fs.writeFileSync(`${process.cwd()}/src/config/version.json`, JSON.stringify(o));
