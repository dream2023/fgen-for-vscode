"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const index_1 = require("./index");
function activate(context) {
    let disposable = vscode.commands.registerCommand('extension.fgen', () => {
        index_1.default(context);
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map