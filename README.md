# ZenTranslator

ZenTranslator是一个在线辅助翻译工具，方便非专业人士快速翻译并润色文章。界面大体上模仿Google Translate Toolkit，但相对轻量化。

## 技术栈
vue2 + vue-cli + vue-router + vuex + element-ui

## 在线预览
在 Daocloud 的[云端测试环境](http://agrimonia-zentranslator.daoapp.io/)中

## 功能设计
- [x] 中英文分句
- [x] 自动显示 Google 翻译结果
- [x] 快捷键切换句子
- [x] 输入框自由调整位置
- [x] 译文一键复制到剪贴板
- [x] 翻译进度追踪
- [ ] 使用指导
- [ ] 译文导出到本地
- [ ] 上传文件
- [ ] ~~载入术语库~~
- [ ] ~~翻译记忆库~~

## 项目运行
```bash
# 克隆项目到本地
git clone https://github.com/Agrimonia/ZenTranslator.git

# 切换到项目所在文件夹
cd zentranslator

# 安装依赖
npm install

# 本地开发，开启服务器，浏览器访问 http://localhost:8088即可
npm run dev

# 构建生产
npm run build
```
## License
[MIT License](http://opensource.org/licenses/MIT)
