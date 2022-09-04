/*
 * @Descripttion: docs serve express
 * @Author: 蔡远程
 * @Date: 2021-05-02 15:31:41
 * @LastEditTime: 2022-05-19 10:53:19
 * @LastEditors: 蔡远程
 */
const API_PREFIX = process.env.NODE_ENV === 'production' ? '/api' : '/';
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routers');

const PORT = 3000;
const HOST = '0.0.0.0';
const app = express();

// 中间件
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, }));

// api
const router = express.Router();
routes(router);

//监听
app.use(API_PREFIX, router);
app.listen(PORT, HOST);
