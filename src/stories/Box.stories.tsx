import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Box } from "../lib";

export default {
  title: "Components/Box",
  component: Box,
  argTypes: {
    backgroundColor: { control: "color" },
    bg: { control: "color" },
  },
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (
  args: React.ComponentPropsWithRef<typeof Box>
) => <Box {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: [1, 1 / 2],
  p: 4,
  mt: 3,
  bg: "tomato",
  children: "some text",
  color: "white",
};
