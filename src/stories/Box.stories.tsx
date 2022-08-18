import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Box } from "../lib";

export default {
  title: "Components/Box",
  component: Box,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args: any) => <Box {...args} />;

export const Default = Template.bind({});
Default.args = {
  bg: "red",
  color: "white",
  children: "Button",
};
