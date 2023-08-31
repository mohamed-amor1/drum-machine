import "./App.css";
import { DrumMachine } from "./DrumMachine";
import { Title } from "@mantine/core";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Title
        variant="gradient"
        gradient={{ from: "indigo", to: "cyan", deg: 45 }}
        sx={{ fontFamily: "IBM Plex Sans, sans-serif" }}
        ta="center"
        weight="700"
        order={1}
      >
        Drum Machine
      </Title>
      <Title
        order={2}
        m={12}
        mb={20}
        weight="100"
        c="black"
        sx={{ fontFamily: "IBM Plex Sans, sans-serif" }}
      >
        Beats at Your Fingertips: The Drum Machine Experience
      </Title>
      <DrumMachine />
      <Footer />
    </>
  );
}

export default App;
