export const color = {
  primary: "#0052cc", // Blue
  success: "#0B875B", // green
  danger: "#E13C3C", // red
  warning: "#F89C1C", // orange
  secondary: "#F4F5F7", // light grey

  textDarkest: "#172b4d",
  textDark: "#42526E",
  textMedium: "#5E6C84",
  textLight: "#8993a4",
  textLink: "#0052cc",

  backgroundDarkPrimary: "#0747A6",
  backgroundDarkSecondary: "#38A1F3",
  backgroundMedium: "#dfe1e6",
  backgroundLight: "#ebecf0",
  backgroundLightest: "#F4F5F7",
  backgroundLightPrimary: "#D2E5FE",
  backgroundLightSuccess: "#E4FCEF",

  borderLightest: "#dfe1e6",
  borderLight: "#C1C7D0",
  borderInputFocus: "#4c9aff",
};

export const sizes = {
  backButtonSize: `min-width: ${40}px; min-height: ${40}px; max-width: ${40}px; max-height: ${40}px;`,

  navbarWidth: 990,
  navbarHeight: 54,

  middleResponsive: "1200px",
  mobileResponsive: "850px",
};

export const font = {
  regular: "font-family: 'MontserratRegular'; font-weight: normal;",
  medium: 'font-family: "MontserratMedium"; font-weight: normal;',
  bold: 'font-family: "MontserratBold"; font-weight: normal;',
  black: 'font-family: "MontserratBlack"; font-weight: normal;',
  size: (size) => `font-size: ${size}px;`,
};
