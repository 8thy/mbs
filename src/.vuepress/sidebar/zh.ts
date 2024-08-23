import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      text: "代码笔记",
      icon: "icon-daima",
      collapsible: true,
      prefix: "codenotes/",
      // children: "structure"
      children:[
        {
          text: "前端笔记",
          icon: "laptop-code",
          prefix: "front-end/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "后端笔记",
          icon: "laptop-code",
          prefix: "back-end/",
          collapsible: true,
          children: "structure",
        }
      ],
    },
    {
      text: "案例",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    /*{
      text: "文档",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
    },*/
  ],
});
