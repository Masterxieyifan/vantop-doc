const http = require('http');

exports.getRequest = (url) => new Promise((resolve, reject)=>{
        http.get(url, (resp) => {
            let data = '';
            resp.on('data', (chunk) => {
                data += chunk;
            });

            resp.on('end', () => {
                resolve({
                    success: true,
                    data: data,
                    msg: null,
                });
            });
        }).on('error', (err) => {
            reject({
                success: false,
                data: null,
                msg: err.message,
            });
        });
    });