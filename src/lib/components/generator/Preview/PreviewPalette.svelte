<script lang="ts">
  import * as constants from "$lib/constants/generator";
  import { globals } from "$lib/state/generator.svelte";
  import { SwatchBook } from "@lucide/svelte";
  import { Accordion, Switch } from "@skeletonlabs/skeleton-svelte";

  const currentPresets = $derived(
    constants.previewPresets[globals.activeColor],
  );

  export const palette = [
    {
      name: "Primary",
      slug: "primary",
      ramp: [
        {
          value: 50,
          base: "bg-primary-50",
          contrast: "text-primary-contrast-50",
        },
        {
          value: 100,
          base: "bg-primary-100",
          contrast: "text-primary-contrast-100",
        },
        {
          value: 200,
          base: "bg-primary-200",
          contrast: "text-primary-contrast-200",
        },
        {
          value: 300,
          base: "bg-primary-300",
          contrast: "text-primary-contrast-300",
        },
        {
          value: 400,
          base: "bg-primary-400",
          contrast: "text-primary-contrast-400",
        },
        {
          value: 500,
          base: "bg-primary-500",
          contrast: "text-primary-contrast-500",
        },
        {
          value: 600,
          base: "bg-primary-600",
          contrast: "text-primary-contrast-600",
        },
        {
          value: 700,
          base: "bg-primary-700",
          contrast: "text-primary-contrast-700",
        },
        {
          value: 800,
          base: "bg-primary-800",
          contrast: "text-primary-contrast-800",
        },
        {
          value: 900,
          base: "bg-primary-900",
          contrast: "text-primary-contrast-900",
        },
        {
          value: 950,
          base: "bg-primary-950",
          contrast: "text-primary-contrast-950",
        },
      ],
    },
    {
      name: "Secondary",
      slug: "secondary",
      ramp: [
        {
          value: 50,
          base: "bg-secondary-50",
          contrast: "text-secondary-contrast-50",
        },
        {
          value: 100,
          base: "bg-secondary-100",
          contrast: "text-secondary-contrast-100",
        },
        {
          value: 200,
          base: "bg-secondary-200",
          contrast: "text-secondary-contrast-200",
        },
        {
          value: 300,
          base: "bg-secondary-300",
          contrast: "text-secondary-contrast-300",
        },
        {
          value: 400,
          base: "bg-secondary-400",
          contrast: "text-secondary-contrast-400",
        },
        {
          value: 500,
          base: "bg-secondary-500",
          contrast: "text-secondary-contrast-500",
        },
        {
          value: 600,
          base: "bg-secondary-600",
          contrast: "text-secondary-contrast-600",
        },
        {
          value: 700,
          base: "bg-secondary-700",
          contrast: "text-secondary-contrast-700",
        },
        {
          value: 800,
          base: "bg-secondary-800",
          contrast: "text-secondary-contrast-800",
        },
        {
          value: 900,
          base: "bg-secondary-900",
          contrast: "text-secondary-contrast-900",
        },
        {
          value: 950,
          base: "bg-secondary-950",
          contrast: "text-secondary-contrast-950",
        },
      ],
    },
    {
      name: "Tertiary",
      slug: "tertiary",
      ramp: [
        {
          value: 50,
          base: "bg-tertiary-50",
          contrast: "text-tertiary-contrast-50",
        },
        {
          value: 100,
          base: "bg-tertiary-100",
          contrast: "text-tertiary-contrast-100",
        },
        {
          value: 200,
          base: "bg-tertiary-200",
          contrast: "text-tertiary-contrast-200",
        },
        {
          value: 300,
          base: "bg-tertiary-300",
          contrast: "text-tertiary-contrast-300",
        },
        {
          value: 400,
          base: "bg-tertiary-400",
          contrast: "text-tertiary-contrast-400",
        },
        {
          value: 500,
          base: "bg-tertiary-500",
          contrast: "text-tertiary-contrast-500",
        },
        {
          value: 600,
          base: "bg-tertiary-600",
          contrast: "text-tertiary-contrast-600",
        },
        {
          value: 700,
          base: "bg-tertiary-700",
          contrast: "text-tertiary-contrast-700",
        },
        {
          value: 800,
          base: "bg-tertiary-800",
          contrast: "text-tertiary-contrast-800",
        },
        {
          value: 900,
          base: "bg-tertiary-900",
          contrast: "text-tertiary-contrast-900",
        },
        {
          value: 950,
          base: "bg-tertiary-950",
          contrast: "text-tertiary-contrast-950",
        },
      ],
    },
    {
      name: "Success",
      slug: "success",
      ramp: [
        {
          value: 50,
          base: "bg-success-50",
          contrast: "text-success-contrast-50",
        },
        {
          value: 100,
          base: "bg-success-100",
          contrast: "text-success-contrast-100",
        },
        {
          value: 200,
          base: "bg-success-200",
          contrast: "text-success-contrast-200",
        },
        {
          value: 300,
          base: "bg-success-300",
          contrast: "text-success-contrast-300",
        },
        {
          value: 400,
          base: "bg-success-400",
          contrast: "text-success-contrast-400",
        },
        {
          value: 500,
          base: "bg-success-500",
          contrast: "text-success-contrast-500",
        },
        {
          value: 600,
          base: "bg-success-600",
          contrast: "text-success-contrast-600",
        },
        {
          value: 700,
          base: "bg-success-700",
          contrast: "text-success-contrast-700",
        },
        {
          value: 800,
          base: "bg-success-800",
          contrast: "text-success-contrast-800",
        },
        {
          value: 900,
          base: "bg-success-900",
          contrast: "text-success-contrast-900",
        },
        {
          value: 950,
          base: "bg-success-950",
          contrast: "text-success-contrast-950",
        },
      ],
    },
    {
      name: "Warning",
      slug: "warning",
      ramp: [
        {
          value: 50,
          base: "bg-warning-50",
          contrast: "text-warning-contrast-50",
        },
        {
          value: 100,
          base: "bg-warning-100",
          contrast: "text-warning-contrast-100",
        },
        {
          value: 200,
          base: "bg-warning-200",
          contrast: "text-warning-contrast-200",
        },
        {
          value: 300,
          base: "bg-warning-300",
          contrast: "text-warning-contrast-300",
        },
        {
          value: 400,
          base: "bg-warning-400",
          contrast: "text-warning-contrast-400",
        },
        {
          value: 500,
          base: "bg-warning-500",
          contrast: "text-warning-contrast-500",
        },
        {
          value: 600,
          base: "bg-warning-600",
          contrast: "text-warning-contrast-600",
        },
        {
          value: 700,
          base: "bg-warning-700",
          contrast: "text-warning-contrast-700",
        },
        {
          value: 800,
          base: "bg-warning-800",
          contrast: "text-warning-contrast-800",
        },
        {
          value: 900,
          base: "bg-warning-900",
          contrast: "text-warning-contrast-900",
        },
        {
          value: 950,
          base: "bg-warning-950",
          contrast: "text-warning-contrast-950",
        },
      ],
    },
    {
      name: "Error",
      slug: "error",
      ramp: [
        { value: 50, base: "bg-error-50", contrast: "text-error-contrast-50" },
        {
          value: 100,
          base: "bg-error-100",
          contrast: "text-error-contrast-100",
        },
        {
          value: 200,
          base: "bg-error-200",
          contrast: "text-error-contrast-200",
        },
        {
          value: 300,
          base: "bg-error-300",
          contrast: "text-error-contrast-300",
        },
        {
          value: 400,
          base: "bg-error-400",
          contrast: "text-error-contrast-400",
        },
        {
          value: 500,
          base: "bg-error-500",
          contrast: "text-error-contrast-500",
        },
        {
          value: 600,
          base: "bg-error-600",
          contrast: "text-error-contrast-600",
        },
        {
          value: 700,
          base: "bg-error-700",
          contrast: "text-error-contrast-700",
        },
        {
          value: 800,
          base: "bg-error-800",
          contrast: "text-error-contrast-800",
        },
        {
          value: 900,
          base: "bg-error-900",
          contrast: "text-error-contrast-900",
        },
        {
          value: 950,
          base: "bg-error-950",
          contrast: "text-error-contrast-950",
        },
      ],
    },
    {
      name: "Surface",
      slug: "surface",
      ramp: [
        {
          value: 50,
          base: "bg-surface-50",
          contrast: "text-surface-contrast-50",
        },
        {
          value: 100,
          base: "bg-surface-100",
          contrast: "text-surface-contrast-100",
        },
        {
          value: 200,
          base: "bg-surface-200",
          contrast: "text-surface-contrast-200",
        },
        {
          value: 300,
          base: "bg-surface-300",
          contrast: "text-surface-contrast-300",
        },
        {
          value: 400,
          base: "bg-surface-400",
          contrast: "text-surface-contrast-400",
        },
        {
          value: 500,
          base: "bg-surface-500",
          contrast: "text-surface-contrast-500",
        },
        {
          value: 600,
          base: "bg-surface-600",
          contrast: "text-surface-contrast-600",
        },
        {
          value: 700,
          base: "bg-surface-700",
          contrast: "text-surface-contrast-700",
        },
        {
          value: 800,
          base: "bg-surface-800",
          contrast: "text-surface-contrast-800",
        },
        {
          value: 900,
          base: "bg-surface-900",
          contrast: "text-surface-contrast-900",
        },
        {
          value: 950,
          base: "bg-surface-950",
          contrast: "text-surface-contrast-950",
        },
      ],
    },
  ];

  let splitX = $state(false);
  let splitY = $state(false);
  let showFilled = $state(false);
  let showOutlined = $state(false);
</script>

<div class="space-y-2 transition-all">
  <!-- Palette -->
  <section class="space-y-2 transition-all">
    <div class="w-full flex items-center gap-4">
      <h6 class="h6 leading-none!">Colors</h6>
      <Switch
        class="hidden xl:inline-flex"
        onCheckedChange={(e) => {
          splitX = e.checked;
        }}
      >
        <Switch.Control
          class="border border-surface-300-700 preset-filled-surface-50-950 data-[state=checked]:preset-filled-primary-500 **:data-[state=checked]:bg-surface-50"
        >
          <Switch.Thumb class="bg-surface-950-50" />
        </Switch.Control>
        <Switch.Label>Isolate X</Switch.Label>
        <Switch.HiddenInput />
      </Switch>
      <Switch
        onCheckedChange={(e) => {
          splitY = e.checked;
        }}
      >
        <Switch.Control
          class="border border-surface-300-700 preset-filled-surface-50-950 data-[state=checked]:preset-filled-primary-500 **:data-[state=checked]:bg-surface-50"
        >
          <Switch.Thumb class="bg-surface-950-50" />
        </Switch.Control>
        <Switch.Label>Isolate Y</Switch.Label>
        <Switch.HiddenInput />
      </Switch>
    </div>
    <div
      style="background-color: var(--color-surface-50-950);"
      class="grid grid-cols-1 xl:grid-cols-7 p-2 rounded-md {splitX
        ? 'gap-2'
        : 'gap-2 xl:gap-0'} transition-all"
    >
      {#each palette as color (color)}
        <div
          class="{splitY
            ? 'space-y-2 first:**:rounded-l-sm last:**:rounded-r-sm **:overflow-hidden'
            : 'first:*:nth-[2]:rounded-l-sm last:*:nth-[2]:rounded-r-sm'} transition-all"
        >
          <p class="block text-center leading-none opacity-60 pb-2">
            {color.name}
          </p>
          <div
            class="grid grid-rows-11 overflow-hidden {splitY
              ? 'gap-2'
              : ''} transition-all"
          >
            <!-- Color Ramp -->
            {#each color.ramp as shade (shade)}
              <div
                class="{shade.base} {splitX && splitY
                  ? 'rounded-sm'
                  : splitX
                    ? 'first:rounded-t-sm last:rounded-b-sm'
                    : ''} transition-all"
              >
                <span
                  class="flex items-center justify-center py-2 font-bold text-xs {shade.contrast}"
                  class:underline={shade.value === 500}
                >
                  {shade.value}
                </span>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </section>
  <hr class="hr border-surface-300-700 my-4" />
  <!-- Presets: Filled -->
  <section class="space-y-2">
    <div class="w-full flex items-center gap-4">
      <h6 class="h6 leading-none!">Filled</h6>
      <button
        type="button"
        class="anchor text-sm leading-none!"
        onclick={() => {
          showFilled = !showFilled;
        }}>{showFilled ? "Show Only Selected" : "Show All"}</button
      >
    </div>
    <div
      style="background-color: var(--color-surface-50-950);"
      class="p-2 rounded-md space-y-4"
    >
      {#each palette as color (color)}
        {#if showFilled || currentPresets.name === color.name}
          <div class="space-y-2">
            <p class="block leading-none text-sm opacity-60">
              {color.name}
            </p>
            <div class="grid grid-cols-11 gap-2">
              <!-- Color Ramp -->
              {#each color.ramp as shade (shade)}
                <div
                  class={`${shade.base} rounded-md flex py-2 justify-center items-center`}
                >
                  <span
                    class="flex items-center justify-center font-bold text-xs {shade.contrast}"
                    class:underline={shade.value === 500}
                  >
                    {shade.value}
                  </span>
                </div>
              {/each}
            </div>
          </div>
        {/if}
      {/each}
    </div>
  </section>
  <hr class="hr border-surface-300-700 my-4" />
  <!-- Presets: Outlined -->
  <section class="space-y-2">
    <div class="w-full flex items-center gap-4">
      <h6 class="h6 leading-none!">Outlined</h6>
      <button
        type="button"
        class="anchor text-sm leading-none!"
        onclick={() => {
          showOutlined = !showOutlined;
        }}>{showOutlined ? "Show Only Selected" : "Show All"}</button
      >
    </div>
    <div
      style="background-color: var(--color-surface-50-950);"
      class="p-2 rounded-md space-y-4"
    >
      {#each palette as color (color)}
        {#if showOutlined || currentPresets.name === color.name}
          <div class="space-y-1">
            <p class="block leading-none text-sm opacity-60">
              {color.name}
            </p>
            <div class="grid grid-cols-11 gap-2">
              <!-- Color Ramp -->
              {#each color.ramp as shade (shade)}
                <div
                  style="border-color: var(--color-{color.slug}-{shade.value});"
                  class="border rounded-md flex py-2 justify-center items-center"
                >
                  <span
                    class="flex items-center justify-center font-bold text-xs"
                    class:underline={shade.value === 500}
                  >
                    {shade.value}
                  </span>
                </div>
              {/each}
            </div>
          </div>
        {/if}
      {/each}
    </div>
  </section>
  <hr class="hr border-surface-300-700 my-4" />
  <!-- Presets: Tonal -->
  <section class="space-y-2">
    <div class="w-full flex items-center gap-2">
      <h6 class="h6 leading-none!">Tonal</h6>
    </div>
    <div
      style="background-color: var(--color-surface-50-950);"
      class="p-2 rounded-md grid grid-cols-7 gap-2"
    >
      {#each palette as color (color)}
        <div class="space-y-1">
          <p class="block leading-none text-sm opacity-60">
            {color.name}
          </p>
          <div class=" gap-2">
            <!-- Color Ramp -->
            <div
              style="background-color: var(--color-{color.slug}-{color.slug ===
              'surface'
                ? '100-900'
                : '50-950'}); color: var(--color-{color.slug}-contrast-50-950);"
              class="rounded-md flex py-2 justify-center items-center"
            >
              <SwatchBook size={20} />
            </div>
          </div>
        </div>
      {/each}
    </div>
  </section>
</div>
