// Constants

// Colors ---

export const colorNames = [
  "primary",
  "secondary",
  "tertiary",
  "success",
  "warning",
  "error",
  "surface",
] as const;
export const colorShades = [
  50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950,
] as const;

// Preview Presets ---

export const previewPresets: Record<string, Record<string, string>> = {
  primary: {
    name: "Primary",
    slug: "primary",
    prop: "--color-primary-500",
    propContrast: "--color-primary-contrast-500",
    filled: "preset-filled-primary-500",
    tonal: "preset-tonal-primary",
    outlined: "preset-outlined-primary-500",
    border: "border-primary-500 dark:border-primary-500",
    ring: "ring-primary-500 dark:border-primary-500",
    anchor: "text-primary-500 dark:text-primary-500",
    hover: "hover:preset-tonal-primary",
    gradient: "to-primary-500",
    contrast: "text-primary-contrast-500 dark:text-primary-contrast-500",
  },
  secondary: {
    name: "Secondary",
    slug: "secondary",
    prop: "--color-secondary-500",
    propContrast: "--color-secondary-contrast-500",
    filled: "preset-filled-secondary-500",
    tonal: "preset-tonal-secondary",
    outlined: "preset-outlined-secondary-500",
    input: "focus:ring-secondary-500 focus:dark:ring-secondary-500",
    anchor: "text-secondary-500 dark:text-secondary-500",
    hover: "hover:preset-tonal-secondary",
    gradient: "to-secondary-500",
    contrast: "text-secondary-contrast-500 dark:text-secondary-contrast-500",
  },
  tertiary: {
    name: "Tertiary",
    slug: "tertiary",
    prop: "--color-tertiary-500",
    propContrast: "--color-tertiary-contrast-500",
    filled: "preset-filled-tertiary-500",
    tonal: "preset-tonal-tertiary",
    outlined: "preset-outlined-tertiary-500",
    input: "focus:ring-tertiary-500 focus:dark:ring-tertiary-500",
    anchor: "text-tertiary-500 dark:text-tertiary-500",
    hover: "hover:preset-tonal-tertiary",
    gradient: "to-tertiary-500",
    contrast: "text-tertiary-contrast-500 dark:text-tertiary-contrast-500",
  },
  success: {
    name: "Success",
    slug: "success",
    prop: "--color-success-500",
    propContrast: "--color-success-contrast-500",
    filled: "preset-filled-success-500",
    tonal: "preset-tonal-success",
    outlined: "preset-outlined-success-500",
    input: "focus:ring-success-500 focus:dark:ring-success-500",
    anchor: "text-success-500 dark:text-success-500",
    hover: "hover:preset-tonal-success",
    gradient: "to-success-500",
    contrast: "text-success-contrast-500 dark:text-success-contrast-500",
  },
  warning: {
    name: "Warning",
    slug: "warning",
    prop: "--color-warning-500",
    propContrast: "--color-warning-contrast-500",
    filled: "preset-filled-warning-500",
    tonal: "preset-tonal-warning",
    outlined: "preset-outlined-warning-500",
    input: "focus:ring-warning-500 focus:dark:ring-warning-500",
    anchor: "text-warning-500 dark:text-warning-500",
    hover: "hover:preset-tonal-warning",
    gradient: "to-warning-500",
    contrast: "text-warning-contrast-500 dark:text-warning-contrast-500",
  },
  error: {
    name: "Error",
    slug: "error",
    prop: "--color-error-500",
    propContrast: "--color-error-contrast-500",
    filled: "preset-filled-error-500",
    tonal: "preset-tonal-error",
    outlined: "preset-outlined-error-500",
    input: "focus:ring-error-500 focus:dark:ring-error-500",
    anchor: "text-error-500 dark:text-error-500",
    hover: "hover:preset-tonal-error",
    gradient: "to-error-500",
    contrast: "text-error-contrast-500 dark:text-error-contrast-500",
  },
  surface: {
    name: "Surface",
    slug: "surface",
    prop: "--color-surface-500",
    propContrast: "--color-surface-contrast-500",
    filled: "preset-filled-surface-500",
    tonal: "bg-surface-500/10 bg-surface-500/10",
    outlined: "preset-outlined-surface-500",
    input: "focus:border-surface-500 focus:dark:ring-surface-500",
    anchor: "text-surface-500 dark:text-surface-500",
    hover: "hover:preset-tonal-surface",
    gradient: "to-surface-500",
    contrast: "text-surface-contrast-500 dark:text-surface-contrast-500",
  },
};

// Typography ---

export const typographicScales = [
  { value: "1.0", label: "Base" },
  { value: "1.067", label: "Minor Second" },
  { value: "1.125", label: "Major Second" },
  { value: "1.2", label: "Minor Third" },
  { value: "1.25", label: "Major Third" },
  { value: "1.333", label: "Perfect Fourth" },
  { value: "1.414", label: "Augmented Fourth" },
  { value: "1.5", label: "Perfect Fifth" },
  { value: "1.618", label: "Golden Ratio" },
] as const;

export const fontFamilies: string[] = [
  "inherit",
  // Source: https://github.com/system-fonts/modern-font-stacks
  // NOTE: remove quotes for consistent template imports
  `system-ui, sans-serif`,
  `Charter, 'Bitstream Charter', 'Sitka Text', Cambria, serif`,
  `'Iowan Old Style', 'Palatino Linotype', 'URW Palladio L', P052, serif`,
  `Seravek, 'Gill Sans Nova', Ubuntu, Calibri, 'DejaVu Sans', source-sans-pro, sans-serif`,
  `Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif`,
  `Optima, Candara, 'Noto Sans', source-sans-pro, sans-serif`,
  `Inter, Roboto, 'Helvetica Neue', 'Arial Nova', 'Nimbus Sans', Arial, sans-serif`,
  `'Nimbus Mono PS', 'Courier New', monospace`,
  `ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, 'DejaVu Sans Mono', monospace`,
  `Bahnschrift, 'DIN Alternate', 'Franklin Gothic Medium', 'Nimbus Sans Narrow', sans-serif-condensed, sans-serif`,
  `ui-rounded, 'Hiragino Maru Gothic ProN', Quicksand, Comfortaa, Manjari, 'Arial Rounded MT', 'Arial Rounded MT Bold', Calibri, source-sans-pro, sans-serif`,
  `'Rockwell Nova', 'Roboto Slab', 'DejaVu Serif', 'Sitka Small', serif`, // Removed Rockwell
  `Superclarendon, 'Bookman Old Style', 'URW Bookman', 'URW Bookman L', 'Georgia Pro', Georgia, serif`,
  `Didot, 'Bodoni MT', 'Noto Serif Display', 'URW Palladio L', P052, Sylfaen, serif`,
  `'Segoe Print', 'Bradley Hand', Chilanka, TSCu_Comic, casual, cursive`,
] as const;

export const fontSizes = [
  "inherit",
  "12px", // '0.75rem',
  "14px", // '0.875rem',
  "16px", // '1rem',
  "18px", // '1.125rem',
  "20px", // '1.25rem',
  "24px", // '1.5rem'
] as const;

export const lineHeights = [
  "inherit",
  "16px", // '1rem',
  "20px", // '1.25rem',
  "24px", // '1.5rem',
  "28px", // '1.75rem',
  "32px", // '2rem',
  "36px", // '2.25rem,
] as const;

export const fontWeights = [
  "inherit",
  "normal",
  "bold",
  "lighter",
  "bolder",
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
] as const;

export const fontStyles = ["inherit", "normal", "italic"];
export const letterSpacings = [
  "inherit",
  "-0.05em",
  "-0.025em",
  "0em",
  "0.025em",
  "0.05em",
  "0.01em",
];
export const textDecorations = [
  "none",
  "underline",
  "overline",
  "line-through",
];

// Edges ---

export const radiusScales = [
  { value: "0", label: "None" },
  { value: "0.5", label: "xs" },
  { value: "0.75", label: "sm" },
  { value: "1", label: "Base" },
  { value: "1.25", label: "lg" },
  { value: "1.5", label: "xl" },
  { value: "2", label: "2xl" },
] as const;

// Buttons ---

export type ButtonPreset = {
  label: string;
  values: {
    '--btn-rounded': string;
    '--btn-font-weight': string;
    '--btn-border-width': string;
  };
};

export const buttonPresets: ButtonPreset[] = [
  {
    label: "Square",
    values: { '--btn-rounded': '0px', '--btn-font-weight': '500', '--btn-border-width': '1px' },
  },
  {
    label: "Sharp",
    values: { '--btn-rounded': '2px', '--btn-font-weight': '700', '--btn-border-width': '2px' },
  },
  {
    label: "Default",
    values: { '--btn-rounded': 'var(--radius-base)', '--btn-font-weight': '500', '--btn-border-width': '1px' },
  },
  {
    label: "Pill",
    values: { '--btn-rounded': '9999px', '--btn-font-weight': '600', '--btn-border-width': '1px' },
  },
];

export const buttonRoundedOptions = [
  { label: "Inherit", value: "var(--radius-base)" },
  { label: "None", value: "0px" },
  { label: "Sharp", value: "2px" },
  { label: "Soft", value: "0.375rem" },
  { label: "Medium", value: "0.75rem" },
  { label: "Large", value: "1.5rem" },
  { label: "Pill", value: "9999px" },
];

export const borderWidths = ["1px", "2px", "3px", "4px"];

// Layout ---

export const appWidths = [
  { label: "Full", value: "100%" },
  { label: "1280px", value: "1280px" },
  { label: "1440px", value: "1440px" },
  { label: "1536px", value: "1536px" },
];

export const paddingSizes = [
  { label: "None", value: "0rem" },
  { label: "xs (0.5rem)", value: "0.5rem" },
  { label: "sm (1rem)", value: "1rem" },
  { label: "md (1.5rem)", value: "1.5rem" },
  { label: "lg (2rem)", value: "2rem" },
  { label: "xl (3rem)", value: "3rem" },
];
