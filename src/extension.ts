import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('vscode117148.readFile', async () => {
		const root = vscode.workspace.workspaceFolders![0].uri;
		const path = vscode.Uri.joinPath(root, 'servers.dat');
		const array = await vscode.workspace.fs.readFile(path);
		const a = array[0];
		const b = new Uint8Array(array.buffer)[0];
		vscode.window.showInformationMessage(`First byte: ${a} | ${b}`);
	});

	context.subscriptions.push(disposable);
}
