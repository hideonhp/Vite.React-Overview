import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    dark: "#FF7308  ",
    light: "#FFCD69",
  },
  secondary: "#0F1B61",
  black: "#000000",

  React: "#FF7308",
  Appium: "#E72F09",
  JavaScript: "#8f327b",
  ChakraUI: "#31b03e",
  Jmeter: "#ffcb6b",
  Selenium: "#52b3e3",
  Vite: "#949c3e",

  //Cert
  "Soft Skills": "#329ba8",
  Mindset: "#a83290",
  Knowledge: "#32a852",
  Logic: "#942112",
  Technical: "#a6819a",
  "C#": "#cc19cf",
};

const fonts = {
  heading: `'Poppins', sans-serif`,
  body: `'Inter', sans-serif`,
};

export const cusTheme = extendTheme({ colors, fonts });
