import { Card, Grid, Flex, Text } from "@mantine/core";
import VolumeSlider from "./VolumeSlider";
import { useState } from "react";
import { Switch } from "@mantine/core";
import { useEffect, useMemo, useCallback } from "react";

export function DrumMachine() {
  const [volume, setVolume] = useState(80); // Initialize volume state
  const [checked, setChecked] = useState(true);

  const nameOfSound = useMemo(() => {
    return {
      Q: "Kick",
      W: "Heater 1",
      E: "Heater 2",
      S: "Heater 3",
      Z: "Closed-HH",
      D: "Heater 4",
      X: "Kick-n'-Hat",
      C: "Open-HH",
      A: "Clap",
    };
  }, []);

  const keyToAudioId = useMemo(() => {
    return {
      Q: "Q",
      W: "W",
      E: "E",
      A: "A",
      S: "S",
      D: "D",
      Z: "Z",
      X: "X",
      C: "C",
    };
  }, []);

  const handleClick = useCallback(
    (audioId: string) => {
      if (!checked) {
        return; // Do nothing if the switch is off
      }

      const audio = document.getElementById(audioId) as HTMLAudioElement;
      const name = nameOfSound[audioId as keyof typeof nameOfSound];
      if (name !== undefined && name !== null) {
        const displayElement = document.getElementById("display");
        if (displayElement) {
          displayElement.innerText = name;
        }
      }

      if (audio) {
        audio.volume = volume / 100;
        audio.play();
        audio.currentTime = 0;

        const childElement = document.getElementById(audioId); // Replace with the ID of your child element
        if (childElement) {
          const parentElement = childElement.parentNode as HTMLElement;

          // Add the 'active' class to simulate the mouse down effect
          parentElement.classList.add("active");
          // Listen for the 'transitionend' event to remove the 'active' class after the transition completes
          parentElement.addEventListener("transitionend", handleTransitionEnd, {
            once: true,
          });
        }
      }
    },
    [checked, nameOfSound, volume]
  );

  function handleTransitionEnd(event: TransitionEvent) {
    const parentElement = event.target as HTMLElement;

    // Remove the 'active' class after the transition completes
    parentElement.classList.remove("active");
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (checked) {
        const key = event.key.toUpperCase();
        const audioId = keyToAudioId[key as keyof typeof keyToAudioId];
        if (audioId) {
          handleClick(audioId);
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [checked, handleClick, keyToAudioId]);

  return (
    <Flex
      direction={{ base: "column", sm: "row" }}
      gap={{ base: "sm", sm: "lg" }}
      justify={{ sm: "center" }}
    >
      <Card id="drum-machine" withBorder radius="md">
        <Flex>
          <Grid>
            <Grid.Col
              className="drum-pad"
              id="rp4-kick"
              span={3}
              onClick={() => handleClick("Q")}
            >
              Q<audio src="../public/sounds/RP4_KICK_1.mp3" id="Q"></audio>
            </Grid.Col>

            <Grid.Col
              className="drum-pad"
              id="heater-1"
              span={3}
              onClick={() => handleClick("W")}
            >
              W<audio src="../public/sounds/Heater-1.mp3" id="W"></audio>
            </Grid.Col>
            <Grid.Col
              className="drum-pad"
              id="heater-2"
              onClick={() => handleClick("E")}
              span={3}
            >
              E<audio src="../public/sounds/Heater-2.mp3" id="E"></audio>
            </Grid.Col>
            <Grid.Col
              className="drum-pad"
              id="heater-6"
              span={3}
              onClick={() => handleClick("A")}
            >
              A<audio src="../public/sounds/Heater-6.mp3" id="A"></audio>
            </Grid.Col>
            <Grid.Col
              className="drum-pad"
              id="heater-3"
              span={3}
              onClick={() => handleClick("S")}
            >
              S<audio src="../public/sounds/Heater-3.mp3" id="S"></audio>
            </Grid.Col>
            <Grid.Col
              className="drum-pad"
              id="heater-4"
              span={3}
              onClick={() => handleClick("D")}
            >
              D<audio src="../public/sounds/Heater-4_1.mp3" id="D"></audio>
            </Grid.Col>
            <Grid.Col
              className="drum-pad"
              id="cev-h2"
              span={3}
              onClick={() => handleClick("Z")}
            >
              Z<audio src="../public/sounds/Cev_H2.mp3" id="Z"></audio>
            </Grid.Col>
            <Grid.Col
              className="drum-pad"
              id="kick-n-hat"
              span={3}
              onClick={() => handleClick("X")}
            >
              X<audio src="../public/sounds/Kick_n_Hat.mp3" id="X"></audio>
            </Grid.Col>
            <Grid.Col
              className="drum-pad"
              id="dsc-oh"
              span={3}
              onClick={() => handleClick("C")}
            >
              C<audio src="../public/sounds/Dsc_Oh.mp3" id="C"></audio>
            </Grid.Col>
          </Grid>
          <Flex direction="column" align="center" justify="center" wrap="wrap">
            <Switch
              onLabel="ON"
              offLabel="OFF"
              size="xl"
              id="switch"
              defaultChecked
              checked={checked}
              onChange={() => setChecked((prevChecked) => !prevChecked)}
            />
            <Card
              withBorder
              h="50px"
              w="200px"
              shadow="sm"
              padding="xs"
              id="display-card"
            >
              <Text
                id="display"
                size="xl"
                weight="400"
                align="center"
                variant="gradient"
                ff="IBM Plex Mono, monospace"
                gradient={{ from: "orange", to: "red" }}
              >
                {`Volume: ${volume}%`}
              </Text>
            </Card>
            <VolumeSlider
              value={volume}
              setValue={setVolume}
              disabled={!checked}
            />
          </Flex>
        </Flex>
      </Card>
    </Flex>
  );
}
