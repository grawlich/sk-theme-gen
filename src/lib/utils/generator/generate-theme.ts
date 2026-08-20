// Utility: Generate Theme
// Generates the {theme}.ts file output for users to copy into their projects.
import {
	settingsBackgrounds,
	settingsButtons,
	settingsColors,
	settingsCore,
	settingsEdges,
	settingsLayout,
	settingsSpacing,
	settingsTypography,
} from '$lib/state/generator.svelte';
import {
	formageEdges,
	formatBackgrounds,
	formatButtons,
	formatColors,
	formatCore,
	formatLayout,
	formatSpacing,
	formatTypography,
} from '$lib/utils/generator/format-output';

export function generateTheme() {
	const _settingsCore = formatCore(settingsCore);
	const themeCss = `
[data-theme='${_settingsCore.name}'] {
${formatTypography(settingsTypography)}
${formatSpacing(settingsSpacing)}
${formageEdges(settingsEdges)}
${formatBackgrounds(settingsBackgrounds)}
${formatButtons(settingsButtons)}
${formatLayout(settingsLayout)}
${formatColors(settingsColors)}
}
`.trim();
	return themeCss;
}
