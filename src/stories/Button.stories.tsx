import React from "react";
import { ThemeProvider } from "theme-ui";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "../lib";

import type { Theme } from "theme-ui";

const theme: Theme = {
  fonts: {
    body: "system-ui, sans-serif",
    heading: '"Avenir Next", sans-serif',
    monospace: "Menlo, monospace",
  },
  colors: {
    text: "#000",
    background: "#fff",
    primary: "blue",
  },
};

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (
  args: React.ComponentPropsWithRef<typeof Button>
) => (
  <ThemeProvider theme={theme}>
    <Button {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  children: <p>Click Me</p>,
  sx: {
    color: "primary",
  },
};
