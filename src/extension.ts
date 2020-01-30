import * as vscode from 'vscode';
import main from './index';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('extension.fgen', () => {
		main(context)
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
