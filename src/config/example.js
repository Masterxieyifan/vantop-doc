/*
 * @Descripttion: 示例代码
 * @Author: 蔡远程
 * @Date: 2022-02-14 10:29:53
 * @LastEditTime: 2022-02-14 16:17:07
 * @LastEditors: 蔡远程
 */

export default `<template>
    <div class="example-demo--container">
        <h2>欢迎使用在线编程工具 🎉</h2>
        <el-divider content-position="left">Content</el-divider>
        <img class="example-img" src="/img/FELAB.jpg">
        <p class="example-desc">在这里你可以进行组件的在线编程实验</p>
        <p class="example-tip">但是请注意，在线编程工具还不支持 jsx 语法，但你还是可以使用 render 函数语法</p>
        <el-divider content-position="left">Example</el-divider>
        <div class="example-demo">
            <p>Hello, world +{{count}}</p>
            <el-button @click="add">add</el-button>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
          count: 0
      };
    },
    methods: {
        add() {
            this.count++;
        }
    }
  }
</script>

<style>
.example-demo--container .example-img {
    width: 100%;
}
.example-demo--container h2 {
    color: #1F2837;
}
.example-demo--container .example-desc {
    color: #6B7280;
}
.example-demo--container .example-tip {
    color: #F97316;
}
.example-demo--container .example-demo p{
    font-size: 20px;
    color: #3573FE;
}
</style>
`;
