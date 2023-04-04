// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { resolveGcodeTooltip } from './resolveGcodeTooltip';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	console.log('"vsc-gcode" is now active!');

	const disposable = vscode.languages.registerHoverProvider('gcode', {
		async provideHover(model, position) {
			const wordRange = model.getWordRangeAtPosition(
				position,
				/[^\s]+/
			);
			const word = model.getText(wordRange);
			return new vscode.Hover(
				new vscode.MarkdownString(await resolveGcodeTooltip(word))
			);
		}
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
	console.log('"vsc-gcode" is deactivated');
}
