import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./index";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
    bg: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (
  args: React.ComponentPropsWithRef<typeof Button>
) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Click me",
};
