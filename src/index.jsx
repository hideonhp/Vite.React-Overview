import "@fontsource/inter";
import "@fontsource/poppins";

import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { App } from "./App.jsx";
import { cusTheme } from "@/styles/theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={cusTheme}>
    <App />
  </ChakraProvider>
);
