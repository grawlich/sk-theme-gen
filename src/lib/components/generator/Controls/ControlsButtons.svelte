<script lang="ts">
	// Constants
	import * as constants from '$lib/constants/generator';
	// State
	import { settingsButtons } from '$lib/state/generator.svelte';

	// Tracks which preset was last applied. Cleared when any individual control is changed.
	let activePreset: string | null = $state(null);

	function applyPreset(preset: constants.ButtonPreset) {
		settingsButtons['--btn-rounded'] = preset.values['--btn-rounded'];
		settingsButtons['--btn-font-weight'] = preset.values['--btn-font-weight'];
		settingsButtons['--btn-border-width'] = preset.values['--btn-border-width'];
		activePreset = preset.label;
	}
</script>

<div class="space-y-6">
	<p class="opacity-60">Configure button shape, weight, and border defaults. Changes are reflected immediately in the preview pane.</p>

	<!-- Presets -->
	<div class="label">
		<span class="label-text">Presets</span>
		<div class="grid grid-cols-4 gap-2">
			{#each constants.buttonPresets as preset (preset)}
				<button
					type="button"
					class="btn {activePreset === preset.label ? 'preset-filled' : 'preset-tonal'}"
					onclick={() => applyPreset(preset)}
				>
					{preset.label}
				</button>
			{/each}
		</div>
	</div>

	<!-- Individual overrides -->
	<h2 class="h5">Overrides</h2>

	<label class="label">
		<span class="label-text">Border Radius</span>
		<select
			class="select"
			name="--btn-rounded"
			value={settingsButtons['--btn-rounded']}
			onchange={(e) => { settingsButtons['--btn-rounded'] = e.currentTarget.value; activePreset = null; }}
		>
			{#each constants.buttonRoundedOptions as opt (opt)}
				<option value={opt.value}>{opt.label} ({opt.value})</option>
			{/each}
		</select>
	</label>

	<label class="label">
		<span class="label-text">Font Weight</span>
		<select
			class="select"
			name="--btn-font-weight"
			value={settingsButtons['--btn-font-weight']}
			onchange={(e) => { settingsButtons['--btn-font-weight'] = e.currentTarget.value; activePreset = null; }}
		>
			{#each constants.fontWeights as weight (weight)}
				{#if weight !== 'inherit' && weight !== 'lighter' && weight !== 'bolder'}
					<option value={weight}>{weight}</option>
				{/if}
			{/each}
		</select>
	</label>

	<label class="label">
		<span class="label-text">Outlined Border Width</span>
		<div class="grid grid-cols-4 gap-2">
			{#each constants.borderWidths as width (width)}
				<button
					type="button"
					class="btn {settingsButtons['--btn-border-width'] === width ? 'preset-filled' : 'preset-tonal'}"
					onclick={() => { settingsButtons['--btn-border-width'] = width; activePreset = null; }}
				>
					{width}
				</button>
			{/each}
		</div>
	</label>
</div>
