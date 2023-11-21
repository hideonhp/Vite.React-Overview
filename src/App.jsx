import { Box } from "@chakra-ui/react";
import { Header } from "@/features/Header";
import { Landing } from "@/features/Landing";
import { Projects } from "@/features/Projects";
import { Footer } from "@/features/Footer";
import { Cert } from "@/features/Cert";

export function App() {
  return (
    <>
      <Box p={10}>
        <Header />
        <Landing />
        <Projects />
        <Cert />
      </Box>
      <Footer />
    </>
  );
}
