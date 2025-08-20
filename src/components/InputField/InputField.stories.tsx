import type { Meta, StoryObj } from "@storybook/react";
import { InputField } from "./InputField";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
  tags: ["autodocs"], // Storybook Docs panel kosam
  argTypes: {
    variant: {
      control: "radio",
      options: ["filled", "outlined", "ghost"],
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
    type: {
      control: "radio",
      options: ["text", "password"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    label: "Username",
    placeholder: "Enter username",
    helperText: "This is a helper text",
    variant: "outlined",
    size: "md",
  },
};

export const Invalid: Story = {
  args: {
    label: "Email",
    placeholder: "Enter email",
    invalid: true,
    errorMessage: "Invalid email address",
  },
};

export const Disabled: Story = {
  args: {
    label: "Password",
    placeholder: "Enter password",
    disabled: true,
  },
};

export const FilledVariant: Story = {
  args: {
    label: "Name",
    placeholder: "Enter your name",
    variant: "filled",
  },
};

export const GhostVariant: Story = {
  args: {
    label: "Search",
    placeholder: "Type something...",
    variant: "ghost",
  },
};
