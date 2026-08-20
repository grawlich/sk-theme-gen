<script lang="ts">
	// Constants
	import * as constants from '$lib/constants/generator';
	// State
	import { settingsLayout } from '$lib/state/generator.svelte';
</script>

<div class="space-y-4">
	<p class="opacity-60">Set app container widths and section padding. These variables map directly to Comix Cleric layout tokens.</p>

	<h2 class="h5">Container</h2>

	<label class="label">
		<span class="label-text">App Max Width</span>
		<div class="grid grid-cols-4 gap-2">
			{#each constants.appWidths as opt (opt)}
				<button
					type="button"
					class="btn btn-sm {settingsLayout['--app-width'] === opt.value ? 'preset-filled' : 'preset-tonal'}"
					onclick={() => (settingsLayout['--app-width'] = opt.value)}
				>
					{opt.label}
				</button>
			{/each}
		</div>
	</label>

	<label class="label">
		<span class="label-text">App Horizontal Padding</span>
		<select class="select" name="--app-padding" bind:value={settingsLayout['--app-padding']}>
			{#each constants.paddingSizes as opt (opt)}
				<option value={opt.value}>{opt.label}</option>
			{/each}
		</select>
	</label>

	<h2 class="h5">Sections</h2>

	<div class="grid grid-cols-2 gap-4">
		<label class="label">
			<span class="label-text">Header Padding</span>
			<select class="select" name="--header-padding" bind:value={settingsLayout['--header-padding']}>
				{#each constants.paddingSizes as opt (opt)}
					<option value={opt.value}>{opt.label}</option>
				{/each}
			</select>
		</label>

		<label class="label">
			<span class="label-text">Footer Padding</span>
			<select class="select" name="--footer-padding" bind:value={settingsLayout['--footer-padding']}>
				{#each constants.paddingSizes as opt (opt)}
					<option value={opt.value}>{opt.label}</option>
				{/each}
			</select>
		</label>

		<label class="label col-span-2">
			<span class="label-text">Page Content Padding</span>
			<select class="select" name="--page-padding" bind:value={settingsLayout['--page-padding']}>
				{#each constants.paddingSizes as opt (opt)}
					<option value={opt.value}>{opt.label}</option>
				{/each}
			</select>
		</label>
	</div>
</div>
