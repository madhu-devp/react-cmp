# 🎨 React Component Development Assignment
This repository contains two reusable React components (InputField & DataTable) built using React, TypeScript, TailwindCSS, and Storybook.

---
👉 Live Preview: [Storybook Preview](https://68a5a8893bd1b8b9feb0a69c-hbkcrbdyzo.chromatic.com)
## 🚀 Components

### 1. InputField
A flexible and reusable input component.

**Features**
- Label, placeholder, helper text, error message
- States: `disabled`, `invalid`, `loading`
- Variants: `filled`, `outlined`, `ghost`
- Sizes: `small (sm)`, `medium (md)`, `large (lg)`
- Optional: clear button, password toggle
- Supports light/dark themes

**Props**
```
interface InputFieldProps {  
  value?: string;  
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;  
  label?: string;  
  placeholder?: string;  
  helperText?: string;  
  errorMessage?: string;  
  disabled?: boolean;  
  invalid?: boolean;  
  variant?: 'filled' | 'outlined' | 'ghost';  
  size?: 'sm' | 'md' | 'lg';  
}
```
## 2. DataTable
---
A table component to render and manage structured data.
***Features
--
Display tabular data
Column sorting
Row selection (single/multiple)
Loading and empty states
Customizable column definitions
```
interface DataTableProps<T> {  
  data: T[];  
  columns: Column<T>[];  
  loading?: boolean;  
  selectable?: boolean;  
  onRowSelect?: (selectedRows: T[]) => void;  
}  

interface Column<T> {  
  key: string;  
  title: string;  
  dataIndex: keyof T;  
  sortable?: boolean;  
}
```
## 🛠️ Tech Stack
---
React 18
TypeScript
TailwindCSS
Storybook (for documentation & preview)
Jest / React Testing Library (basic tests)
```
.
├── src/
│   ├── components/
│   │   ├── InputField/
│   │   │   ├── InputField.tsx
│   │   │   ├── InputField.stories.tsx
│   │   │   └── InputField.test.tsx
│   │   └── DataTable/
│   │       ├── DataTable.tsx
│   │       ├── DataTable.stories.tsx
│   │       └── DataTable.test.tsx
│   └── App.tsx
├── .storybook/
│   ├── main.ts
│   ├── preview.ts
│   └── manager.ts
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```
Clone the repo and install dependencies:
```
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
npm install
```
Run Storybook locally:
```
npm run storybook
```
Open http://localhost:6006to explore the components.
Run the app demo:
```
npm run dev
```
Run tests:
```
npm run test
```
## 🖼️ Example Usage
---
InputField Example
```
<InputField
  label="Username"
  placeholder="Enter your username"
  helperText="This is a helper text"
  variant="outlined"
  size="md"
/>
````
## DataTable Example
---
```
const users = [
  { id: 1, name: "Madhu", email: "madhu@example.com" },
  { id: 2, name: "Krishna", email: "krishna@example.com" },
];

const columns = [
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "email", title: "Email", dataIndex: "email", sortable: true },
];

<DataTable
  data={users}
  columns={columns}
  selectable
  onRowSelect={(rows) => console.log("Selected:", rows)}
/>
```
✅ Requirements Covered
✅ TypeScript with proper typing
✅ Responsive design
✅ Accessibility (ARIA labels)
✅ Modern, clean styling with TailwindCSS
✅ Basic tests included
📘 Documentation

Components are documented using Storybook with examples for different states, variants, and props.```

## ✨ Author
---
madhulatha
B.Tech CSE | Frontend Developer Enthusiast 🚀

## 📬 Contact
---
- 📧 Email: [madhu-devp](madhupodilapu999@gmail.com)
- 💼 LinkedIn: [madhu-devp](https://linkedin.com/in/madhu-devp)  
- 🐙 GitHub: [madhu-devp](https://github.com/madhu-devp)  
- 🌐 Portfolio: [click here](https://madhu-devp.github.io/madhu-portfolio/)



---

