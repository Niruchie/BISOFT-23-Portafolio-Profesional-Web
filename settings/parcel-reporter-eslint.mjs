import { Validator } from "@parcel/plugin";
import { ESLint } from "eslint";
import process from "process";

export default new Validator({
	async validate({ asset }) {
		try {
			let output = "";

			const eslint = new ESLint({
				useEslintrc: true,
				fix: true,
			});
			
			const formatter = await eslint
				.loadFormatter();

			const code = await asset.getCode();
			const results = await eslint.lintText(
				code,
				{
					filePath: asset.filePath,
				},
			);
			
			const found = results.some((result) => result.warningCount)
				|| results.some((result) => result.errorCount);
			
			if (found)
				output = formatter.format(results);
			
			process.stdout.write(output);
		}
		catch (error) {/* ? Ignore read errors found by ESLint */}
		finally {/* ? Ignore read errors found by ESLint */}
	},
});