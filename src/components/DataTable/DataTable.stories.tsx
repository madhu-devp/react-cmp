import type { Meta, StoryObj } from "@storybook/react";
import { DataTable } from "./DataTable";
import { Column } from "./DataTable";

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

const sampleData: User[] = [
  { id: 1, name: "Madhu", email: "madhu@example.com", age: 24 },
  { id: 2, name: "Krishna", email: "krishna@example.com", age: 28 },
  { id: 3, name: "Anjali", email: "anjali@example.com", age: 22 },
];

const columns: Column<User>[] = [
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "email", title: "Email", dataIndex: "email" },
  { key: "age", title: "Age", dataIndex: "age", sortable: true },
];


const meta: Meta<typeof DataTable<User>> = {
  title: "Components/DataTable",
  component: DataTable<User>,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DataTable<User>>;

export const Default: Story = {
  args: {
    data: sampleData,
    columns,
  },
};

export const Sortable: Story = {
  args: {
    data: sampleData,
    columns,
  },
};

export const Selectable: Story = {
  args: {
    data: sampleData,
    columns,
    selectable: true,
    onRowSelect: (rows) => console.log("Selected rows:", rows),
  },
};

export const Loading: Story = {
  args: {
    data: [],
    columns,
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    data: [],
    columns,
  },
};
