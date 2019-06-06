const path = require("path");
const { exec } = require("child_process");

const Commands = {
	Build: "npm run build",
	Docker: "docker build -t amir.al.omari/naat-test .",
};

const execCommand = (command, mark = "mark_wasnt_provided") =>
	new Promise((resolve, reject) => {
		console.log(`"${mark}" init`);
		const proc = exec(command, {
			cwd: __dirname + "./..",
			shell: true,
		});

		proc.on("exit", (code, signal) => {
			if (!code) {
				console.log(`"${mark}" finished with code: ${code}`);
				resolve({ code, signal });
			} else {
				reject({ code, signal });
			}
		});

		proc.stdout.pipe(process.stdout);
		proc.stderr.pipe(process.stderr);
	});

Promise.resolve()
	.then(() => execCommand(Commands.Build, "build"))
	.then(() => execCommand(Commands.Docker, "docker"))
	.catch(error => {
		console.error(error);

		process.exit(1);
	});
