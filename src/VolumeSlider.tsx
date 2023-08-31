import { Slider } from "@mantine/core";

// Define the prop types for the VolumeSlider component
interface VolumeSliderProps {
  value: number;
  setValue: (newValue: number) => void;
  disabled: boolean;
}

export default function VolumeSlider(props: VolumeSliderProps) {
  return (
    <>
      <Slider
        labelTransition="skew-down"
        labelTransitionDuration={150}
        labelTransitionTimingFunction="ease"
        label={(value) => `${value}%`}
        disabled={props.disabled}
        w="200px"
        size="xl"
        radius="xs"
        value={props.value} // Use the value from props
        onChange={(newValue) => {
          props.setValue(newValue);
        }}
        marks={[
          { value: 20, label: "20%" },
          { value: 50, label: "50%" },
          { value: 80, label: "80%" },
        ]}
      />
    </>
  );
}
