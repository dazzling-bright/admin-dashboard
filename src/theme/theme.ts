import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// Custom theme object
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const customTheme = extendTheme({
  config,
  colors: {
    primary: "#0687FC",
    secondary: "#FF8800",
    accent: "#FF6F00",
    border: "#D1D7DE",
    text: {
      light: "#6B7280",
      dark: "#111827",
      gray: "#8F8F8F",
    },
    background: {
      light: "#F3F4F6",
      highlight: "yellow",
      muted: "#E5E7EB",
    },
  },
});

export default customTheme;
