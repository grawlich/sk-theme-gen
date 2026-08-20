<script lang="ts">
	// Components
	import Edges from '$lib/components/generator/Edges/Edges.svelte';
	// Constants
	import * as constants from '$lib/constants/generator';
	// State
	import { settingsEdges } from '$lib/state/generator.svelte';

	function activeScaleClass(value: string) {
		return settingsEdges['--radius-scale'] === value ? 'preset-filled' : 'preset-tonal';
	}
</script>

<div class="space-y-4">
	<p class="opacity-60">Set border radius and edge widths.</p>

	<h2 class="h5">Radius Scale</h2>
	<label class="label">
		<span class="label-text">Global Radius Multiplier</span>
		<div class="grid grid-cols-7 gap-1">
			{#each constants.radiusScales as scale (scale)}
				<button
					type="button"
					class="btn btn-sm {activeScaleClass(scale.value)}"
					onclick={() => (settingsEdges['--radius-scale'] = scale.value)}
				>
					<span class="text-xs font-bold">{scale.label}</span>
				</button>
			{/each}
		</div>
	</label>

	<h2 class="h5">Border Radius</h2>
	<div class="label">
		<!--  -->
		<Edges
			name="rounded-base"
			items={['0rem', '0.063rem', '0.125rem', '0.25rem', '0.375rem', '0.75rem', '9999rem']}
			bind:value={settingsEdges['--radius-base']}
		/>
	</div>
	<div class="label">
		<span class="label-text">Container Border Radius</span>
		<Edges
			name="rounded-container"
			items={['0rem', '0.063rem', '0.125rem', '0.25rem', '0.375rem', '0.75rem', '1.5rem']}
			bind:value={settingsEdges['--radius-container']}
		/>
	</div>
	<h2 class="h5">Default Edge Widths</h2>
	<div class="label">
		<span class="label-text">Border Width</span>
		<!--  -->
		<Edges name="borders" items={['1px', '2px', '4px', '6px']} bind:value={settingsEdges['--default-border-width']} thickness />
	</div>
	<div class="label">
		<!-- ['0rem', '0.063rem', '0.125rem', '0.25rem',' 0.375rem'] -->
		<span class="label-text">Ring Width</span>
		<Edges name="rings" items={['1px', '2px', '4px', '6px']} bind:value={settingsEdges['--default-ring-width']} thickness />
	</div>
	<div class="label">
		<!-- ['0rem', '0.063rem', '0.125rem', '0.25rem',' 0.375rem'] -->
		<span class="label-text">Divider Width</span>
		<Edges name="dividers" items={['1px', '2px', '4px', '6px']} bind:value={settingsEdges['--default-divide-width']} thickness />
	</div>
</div>
