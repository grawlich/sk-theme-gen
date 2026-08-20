// Utility: Generate CSS
// Generates the theme CSS for live previews.
import {
	settingsBackgrounds,
	settingsButtons,
	// settingsCore,
	settingsColors,
	settingsEdges,
	settingsLayout,
	settingsSpacing,
	settingsTypography,
} from '$lib/state/generator.svelte';
import { formageEdges, formatBackgrounds, formatButtons, formatColors, formatLayout, formatSpacing, formatTypography } from '$lib/utils/generator/format-output';

export function generatePreviewCss() {
	const themeCss = `
${formatTypography(settingsTypography)}
${formatSpacing(settingsSpacing)}
${formageEdges(settingsEdges)}
${formatBackgrounds(settingsBackgrounds)}
${formatButtons(settingsButtons)}
${formatLayout(settingsLayout)}
${formatColors(settingsColors)}
`.trim();
	// See root +layout.svelte to reference where this attribute is used
	return `[data-theme="generated"] {\n${themeCss}\n}`;
}
