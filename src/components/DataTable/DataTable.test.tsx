import { render, screen, fireEvent } from "@testing-library/react";
import { DataTable, Column } from "./DataTable";
import "@testing-library/jest-dom"; // ✅ fix matchers

type User = { id: number; name: string; age: number };

const sampleData: User[] = [
  { id: 1, name: "Alice", age: 24 },
  { id: 2, name: "Bob", age: 30 },
];

// ✅ Correct typing
const columns: Column<User>[] = [
  { key: "id", title: "ID", dataIndex: "id", sortable: true },
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "age", title: "Age", dataIndex: "age", sortable: true },
];

describe("DataTable", () => {
  test("renders table data", () => {
    render(<DataTable data={sampleData} columns={columns} />);
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("Bob")).toBeInTheDocument();
  });

  test("shows loading state", () => {
    render(<DataTable data={[]} columns={columns} loading />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("shows empty state", () => {
    render(<DataTable data={[]} columns={columns} />);
    expect(screen.getByText("No data available")).toBeInTheDocument();
  });

  test("allows row selection", () => {
    const handleSelect = jest.fn();
    render(
      <DataTable data={sampleData} columns={columns} selectable onRowSelect={handleSelect} />
    );
    const checkbox = screen.getAllByRole("checkbox")[0];
    fireEvent.click(checkbox);
    expect(handleSelect).toHaveBeenCalledWith([sampleData[0]]);
  });
});
