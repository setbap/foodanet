import { createTheme, useTheme } from "@shopify/restyle";

const palette = {
  pink: "#f30b70",
  greenLight: "#56DCBA",
  greenPrimary: "#0ECD9D",
  greenDark: "#0A906E",
  amber: "#FFBF00",
  amberTransparent: "#FFBF0020",
  transparent: "transparent",
  black: "#0B0B0B",
  white: "#FFFFFF",
  gray: "#767676",
  grayTransparent: "#76767620",
};

export const theme = createTheme({
  colors: {
    mainBackground: "red",
    cardPrimaryBackground: palette.white,
    transparent: palette.transparent,
    grayTransparent: palette.grayTransparent,
    amberTransparent: palette.amberTransparent,
    activeTabLine: palette.greenPrimary,
    textColor: palette.black,
    textComment: palette.gray,
    discount: palette.pink,
    greenDark: palette.greenDark,
  },
  spacing: {
    xs: 4,
    s: 8,
    ms: 12,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    header: {
      // fontFamily: "vazir_bold",
      fontFamily: "vazir_bold",
      fontWeight: "bold",
      fontSize: 34,
      lineHeight: 42.5,
      color: "textColor",
    },
    header2: {
      // fontFamily: "vazir_bold",
      fontFamily: "vazir_bold",
      fontWeight: "bold",
      fontSize: 28,
      lineHeight: 42.5,
      color: "textColor",
    },
    header3: {
      // fontFamily: "vazir_bold",
      fontFamily: "vazir_bold",
      fontWeight: "bold",
      fontSize: 26,
      lineHeight: 42.5,
      color: "textColor",
    },
    subheader: {
      // fontFamily: "vazir-SemiBold",
      fontFamily: "vazir_bold",
      fontWeight: "700",
      fontSize: 20,
      lineHeight: 36,
      color: "textColor",
    },
    subheader2: {
      fontFamily: "vazir_bold",
      fontWeight: "500",
      fontSize: 18,
      lineHeight: 24,
      color: "textColor",
    },
    subheader3: {
      fontFamily: "vazir_bold",
      fontWeight: "500",
      fontSize: 15,
      lineHeight: 20,
      color: "textColor",
    },
    body: {
      fontFamily: "vazir",
      fontSize: 13,
      lineHeight: 16,
      color: "textColor",
    },
    comment: {
      fontFamily: "vazir",
      fontSize: 11,
      lineHeight: 14,
      color: "textComment",
    },
  },
  cardVariants: {
    defaults: {
      borderRadius: 16,
      overflow: "hidden",
    },
    regular: {
      padding: {
        phone: "s",
        tablet: "m",
      },
    },
    elevated: {
      p: {
        phone: "ms",
        tablet: "m",
      },
      marginTop: {
        phone: "m",
        tablet: "m",
      },
      mx: {
        phone: "m",
        tablet: "m",
      },
      backgroundColor: "cardPrimaryBackground",
      elevation: 0,
      overflow: "hidden",
    },
  },
});

export type Theme = typeof theme;
// export const useMyTheme = () => useTheme<typeof theme>();
