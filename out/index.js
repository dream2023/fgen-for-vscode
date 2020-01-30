"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const fs = require("fs");
const path = require("path");
// 获取扩展的绝对路径
function getExtensionFileAbsolutePath(context, relativePath) {
    return path.join(context.extensionPath, relativePath);
}
/**
 * 读取html文件
 */
function getWebViewContent(context) {
    const relativePath = './node_modules/vue-ele-form-generator/dist';
    const absoluteDir = getExtensionFileAbsolutePath(context, relativePath);
    const htmlPath = absoluteDir + '/index.html';
    let html = fs.readFileSync(htmlPath, 'utf-8');
    html = html.replace(/css.*?\.css|js.*?\.js/g, `vscode-resource:${absoluteDir}/$&`);
    return html;
}
function default_1(context) {
    const panel = vscode.window.createWebviewPanel('catCoding', '表单设计器', vscode.ViewColumn.One, {
        enableScripts: true,
        retainContextWhenHidden: true
    });
    panel.webview.html = getWebViewContent(context);
}
exports.default = default_1;
//# sourceMappingURL=index.js.map