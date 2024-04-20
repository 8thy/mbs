import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  "/zh/demo/",
  {
    text: "代码笔记",
    icon: "code",
    prefix: "/zh/codenotes/",
    children: [
      {
        text: "前端笔记",
        icon: "lightbulb",
        prefix: "front-end/",
        link: "front-end/"
      },
      {
        text: "后端笔记",
        icon: "heart",
        prefix: "back-end/",
        link: "back-end/"
      },
    ],
  },
/*  {
    text: "指南",
    icon: "lightbulb",
    prefix: "/zh/guide/",
    children: [
      {
        text: "Bar",
        icon: "lightbulb",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "Foo",
        icon: "lightbulb",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
      },
    ],
  },

  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },*/
]);
