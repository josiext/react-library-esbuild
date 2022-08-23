import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Input } from "./index";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    backgroundColor: { control: "color" },
    bg: { control: "color" },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (
  args: React.ComponentPropsWithRef<typeof Input>
) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {};
