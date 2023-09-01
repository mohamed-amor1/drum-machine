import { Group, ActionIcon, Anchor } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

export default function Footer() {
  return (
    <div style={{ margin: "20px" }}>
      <Group spacing="xs" position="center" noWrap>
        <Anchor href="https://github.com/mohamed-amor1" target="_blank">
          <ActionIcon variant="subtle">
            <IconBrandGithub strokeWidth={1.5} />
          </ActionIcon>
        </Anchor>
        <Anchor href="https://linkedin.com/in/mohamedamor1" target="_blank">
          <ActionIcon variant="subtle">
            <IconBrandLinkedin strokeWidth={1.5} />
          </ActionIcon>
        </Anchor>
        <Anchor href="mailto:mohamedamor654@gmail.com">
          <ActionIcon variant="subtle">
            <IconMail strokeWidth={1.5} />
          </ActionIcon>
        </Anchor>
      </Group>
    </div>
  );
}
