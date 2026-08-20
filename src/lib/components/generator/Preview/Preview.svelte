<script lang="ts">
  // State
  // Components (common)
  import CodeBlock from "$lib/components/common/CodeBlock/CodeBlock.svelte";
  import { globals } from "$lib/state/generator.svelte";
  // Utils
  import { generateTheme } from "$lib/utils/generator/generate-theme";
  import { Accordion } from "@skeletonlabs/skeleton-svelte";
  // Components (generator)
  import PreviewComponents from "./PreviewComponents.svelte";
  import PreviewPalette from "./PreviewPalette.svelte";
  import PreviewTypography from "./PreviewTypography.svelte";
  import { MinusIcon, PlusIcon } from "@lucide/svelte";

  function copyToClipboard() {
    if (!window.isSecureContext) {
      console.error(
        "Needs secure context: https://developer.mozilla.org/en-US/docs/Web/API/Clipboard",
      );
      return {};
    }
    navigator.clipboard.writeText(generateTheme());
  }

  let openPreviews: string[] = $state(["palette", "components", "typography"]);
</script>

<!-- bg-gradient-skeleton -->
<section class="relative h-screen overflow-y-auto">
  <!-- Content -->
  <article class="container mx-auto">
    {#if globals.panel === "preview"}
      <!-- Components -->
      <section class="p-2 md:p-4">
        <Accordion
          value={openPreviews}
          onValueChange={(e) => (openPreviews = e.value)}
          collapsible
          multiple
          class="gap-0 overflow-hidden card transition-all"
        >
          <Accordion.Item class="gap-0" value="palette">
            <h5 class="h5">
              <Accordion.ItemTrigger
                class="rounded-none flex justify-between items-center preset-filled-surface-200-800 hover:preset-tonal-primary {openPreviews.includes(
                  'palette',
                )
                  ? 'preset-filled-primary-500!'
                  : ''}"
              >
                Palette
                <Accordion.ItemIndicator class="group">
                  <MinusIcon
                    class="size-4 group-data-[state=open]:block hidden"
                  />
                  <PlusIcon
                    class="size-4 group-data-[state=open]:hidden block"
                  />
                </Accordion.ItemIndicator>
              </Accordion.ItemTrigger>
            </h5>
            <Accordion.ItemContent
              class="preset-filled-surface-100-900 p-3 transition-all"
            >
              <PreviewPalette />
            </Accordion.ItemContent>
          </Accordion.Item>
          <Accordion.Item class="gap-0" value="components">
            <h5 class="h5">
              <Accordion.ItemTrigger
                class="rounded-none flex justify-between items-center preset-filled-surface-200-800 hover:preset-tonal-primary {openPreviews.includes(
                  'components',
                )
                  ? 'preset-filled-primary-500!'
                  : ''}"
              >
                Components
                <Accordion.ItemIndicator class="group">
                  <MinusIcon
                    class="size-4 group-data-[state=open]:block hidden"
                  />
                  <PlusIcon
                    class="size-4 group-data-[state=open]:hidden block"
                  />
                </Accordion.ItemIndicator>
              </Accordion.ItemTrigger>
            </h5>
            <Accordion.ItemContent class="preset-filled-surface-100-900 p-3">
              <PreviewComponents />
            </Accordion.ItemContent>
          </Accordion.Item>
          <Accordion.Item class="gap-0" value="typography">
            <h5 class="h5">
              <Accordion.ItemTrigger
                class="rounded-none flex justify-between items-center preset-filled-surface-200-800 hover:preset-tonal-primary {openPreviews.includes(
                  'typography',
                )
                  ? 'preset-filled-primary-500!'
                  : ''}"
              >
                Typography
                <Accordion.ItemIndicator class="group">
                  <MinusIcon
                    class="size-4 group-data-[state=open]:block hidden"
                  />
                  <PlusIcon
                    class="size-4 group-data-[state=open]:hidden block"
                  />
                </Accordion.ItemIndicator>
              </Accordion.ItemTrigger>
            </h5>
            <Accordion.ItemContent class="preset-filled-surface-100-900 p-3">
              <PreviewTypography />
            </Accordion.ItemContent>
          </Accordion.Item>
        </Accordion>
      </section>
    {:else}
      <!-- Theme Output -->
      <section class="py-10 px-5 space-y-5">
        <header class="flex justify-between gap-4">
          <!-- prettier-ignore -->
          <p>
						Copy the theme code below, then follow the <a href="https://skeleton.dev/docs/design/themes" target="_blank" class="anchor">documentation instructions</a>.
					</p>
          <button
            type="button"
            class="btn preset-outlined-surface-300-700 hover:preset-tonal"
            onclick={copyToClipboard}>Copy</button
          >
        </header>
        <CodeBlock lang="css" code={generateTheme()} />
      </section>
    {/if}
  </article>
  <!-- Footer -->
  <footer class="p-10 py-5">
    <p class="text-xs text-center opacity-20">Forked from Skeleton Labs.</p>
  </footer>
</section>
