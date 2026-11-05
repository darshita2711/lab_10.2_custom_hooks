# Custom Hooks Lab

## Project Description

This project demonstrates how to create and use custom React Hooks with TypeScript.

It includes two custom hooks:

1. **usePagination** – Manages pagination, including current page, total pages, and page navigation.
2. **useDebounce** – Delays updating a value until the user stops typing for a specified amount of time.

## Features

### 1. Pagination Demo
- Displays a list of 100 items.
- Allows users to select 5, 10, or 20 items per page.
- Provides Previous and Next navigation.
- Allows users to jump to a specific page.
- Disables navigation buttons when unavailable.
- Displays the current page and item range.

### 2. Debounce Search Demo
- Accepts user input.
- Displays the current input immediately.
- Displays the debounced value after the selected delay.
- Allows users to change the debounce delay.
- Shows simulated search results.

## Technologies Used

- React
- TypeScript
- JavaScript
- CSS
- Vite

## Project Structure

```text
src/
├── components/
│   ├── PaginationDemo.tsx
│   └── DebounceSearchDemo.tsx
├── hooks/
│   ├── usePagination.ts
│   └── useDebounce.ts
├── types/
│   ├── pagination.ts
│   └── index.ts
├── App.tsx
├── App.css
└── main.tsx
```

## Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Navigate to the project folder:

```bash
cd YOUR_PROJECT_FOLDER
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## How to Use

Open the application in your browser.

- Use the Pagination Demo to navigate through the list of items.
- Use the Debounce Search Demo to enter text and observe the delayed value.
- Change the debounce delay to see how it affects the search behavior.

## Learning Outcomes

Through this project, I practiced:

- Creating reusable custom React Hooks.
- Managing component state with `useState`.
- Using `useEffect` for side effects.
- Cleaning up timers with `clearTimeout`.
- Working with arrays and pagination.
- Passing values between components and custom hooks.

## Author

Created as part of the Per Scholas Software Development Training Program.