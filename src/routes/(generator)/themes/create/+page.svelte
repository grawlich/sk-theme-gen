<script lang="ts">
  // Components (generator)
  import Logo from "$lib/components/common/Logo/Logo.svelte";
  import Controls from "$lib/components/generator/Controls/Controls.svelte";
  import Preview from "$lib/components/generator/Preview/Preview.svelte";
  // Utils
  import { generatePreviewCss } from "$lib/utils/generator/generate-css";
</script>

<!-- Live Preview CSS -->
<svelte:head>
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html `<style>${generatePreviewCss()}</style>`}
</svelte:head>

<main class="h-full grid grid-cols-[1fr_480px]">
  <Preview />
  <Controls />
</main>
