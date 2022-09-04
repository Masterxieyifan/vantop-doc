
const { getRequest, } = require('../http');

module.exports = (router) => {
    // 获取版本号
    router.post('/version', (req, res) => {
        const npmUrl = 'http://npm.nextop.cc/-/verdaccio/sidebar/';
        try {
            if (req.body.packages) {
                const promises = req.body.packages.map(item=>getRequest(`${npmUrl}${item}`));
                Promise.allSettled(promises).then(data => {
                    data = data.filter(item=>item.status === 'fulfilled').map(item => {
                        const newVal = JSON.parse(item.value.data);
                        return {
                            name: newVal._id,
                            beta: newVal['dist-tags'].beta || null,
                            hotfix: newVal['dist-tags'].hotfix || null,
                            latest: newVal['dist-tags'].latest || null,
                        };
                    });
                    res.json({
                        success: true,
                        data: data,
                        msg: null,
                    });
                }).catch(()=>{
                    res.json({
                        success: false,
                        data: null,
                        msg: '服务器错误',
                    });
                });
            } else {
                res.json({
                    success: false,
                    data: null,
                    msg: '请传入正确的参数',
                });
            }
        } catch (err) {
            res.json({
                success: false,
                data: null,
                msg: err,
            });
        }
    });
};