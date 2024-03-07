export const uiKitModules = {
  x0: 2,
  x1: 4,
  x2: 8,
  x3: 12,
  x4: 16,
  x5: 20,
  x6: 24,
  x7: 28,
  x8: 32,
  x9: 36,
  x10: 40,
  x11: 44,
  x12: 48,
  x13: 52,
  x14: 56,
  x15: 60,
  x16: 64,
  x17: 68,
  x18: 72,
  x19: 76,
  x20: 80,
  x21: 84,
  x22: 88,
  x23: 92,
  x24: 96,
  x25: 100,
  x26: 104,
  x27: 108,
  x28: 112,
  x29: 116,
  x30: 120,
} as const;

export const uiKitBorderRadius = {
  x1: 4,
  x2: 6,
  x3: 8,
  x4: 10,
  x5: 12,
  x6: 16,
  x7: 20,
  x8: 30,
  x30: 60,
} as const;

export const uiKitFontSizes = {
  "3XS": 11,
  XXS: 12,
  XS: 14,
  S: 16,
  M: 18,
  L: 20,
  XL: 24,
  "2XL": 28,
  "3XL": 32,
  "4XL": 36,
  "5XL": 40,
  "6XL": 52,
  "7XL": 60,
} as const;

export const uiKitFontWeights = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

export const uiKitLineHeights = {
  x6: 12,
  x8: 16,
  x9: 18,
  x10: 20,
  x11: 22,
  x12: 24,
  x13: 26,
  x14: 28,
  x15: 30,
  x16: 32,
  x17: 34,
  x18: 36,
  x19: 38,
  x20: 40,
  x21: 42,
  x22: 44,
  x24: 48,
  x27: 54,
  x30: 60,
  x32: 64,
  x34: 68,
} as const;

export const screenSize = {
  TABLET_SMALL_LANDING_MIN_WIDTH: "480px",
  TABLET_LANDING_MIN_WIDTH: "767px",
  TABLET_BIG_LANDING_MIN_WIDTH: "1023px",
  DESKTOP_LANDING_MIN_WIDTH: "1279px",
} as const;

export const uiKitBreakpoints = {
  minWidth: {
    XS: `(min-width: ${screenSize.TABLET_SMALL_LANDING_MIN_WIDTH})`,
    S: `(min-width: ${screenSize.TABLET_LANDING_MIN_WIDTH})`,
    M: `(min-width: ${screenSize.TABLET_BIG_LANDING_MIN_WIDTH})`,
    L: `(min-width: ${screenSize.DESKTOP_LANDING_MIN_WIDTH})`,
  },

  maxWidth: {
    XS: `(max-width: ${screenSize.TABLET_SMALL_LANDING_MIN_WIDTH})`,
    S: `(max-width: ${screenSize.TABLET_LANDING_MIN_WIDTH})`,
    M: `(max-width: ${screenSize.TABLET_BIG_LANDING_MIN_WIDTH})`,
    L: `(max-width: ${screenSize.DESKTOP_LANDING_MIN_WIDTH})`,
  },
} as const;

export const uiKitColors = {
  textMain: "#D9D9D9",
  textSecondary: "#CCCCCC",
  textAccent: "#8584EE",

  bgMain: "#191919",

  strokesMain: "#E0E0E0",
  strokesSecondary: "#B8B8B8",
  strokeSecondaryLight: "#F5F5F5",
  strokesAccent: "#000000",
  strokesInvert: "#3D3D3D",
  strokesDisable: "#E0E0E0",
  strokesSuccess: "#3DB83D80",
  strokesDanger: "#D5401F80",

  iconsMain: "#000000",
  iconsSecondary: "#8F8F8F",
  iconsSecondaryAddition: "#B8B8B8",
  iconsInvert: "#FFFFFF",
  iconsDisabled: "#B8B8B8",
};
