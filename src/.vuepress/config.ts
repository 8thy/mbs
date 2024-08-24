import {defineUserConfig} from "vuepress";
import theme from "./theme.js";
// import {hopeTheme} from "vuepress-theme-hope";
import {searchProPlugin} from "vuepress-plugin-search-pro";


export default defineUserConfig({
    base:`/`,

    locales: {
        "/": {
            lang: "en-US",
            title: "Code notes",
            description: "A code notes for vuepress-theme-hope",
        },
        "/zh/": {
            lang: "zh-CN",
            title: "代码笔记",
            description: "vuepress-theme-hope 的代码笔记",
        },
    },

    theme,
    // Enable it with pwa
    // shouldPrefetch: false,
    plugins: [
        searchProPlugin({
            indexContent: true,
            queryHistoryCount: 5,
            resultHistoryCount: 5
        })
    ]
});
