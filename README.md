# React useRef Hook – Auto Focus Input

## 📌 About the Project

This project demonstrates the **`useRef` Hook** in React. It automatically focuses on an input field when the component loads.

The `useRef` Hook allows us to create a reference to a DOM element or store a mutable value without triggering a re-render when the value changes.

## 🎯 Objective

- Understand the `useRef` Hook in React.
- Access DOM elements directly using refs.
- Automatically focus on an input field when the component mounts.
- Learn how to use `useRef` with `useEffect`.

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- HTML
- CSS

## 📂 Code Implementation

```jsx
import React, { useRef, useEffect } from "react";
import "./App.css";

const App = () => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} placeholder="Auto Focus" />
    </div>
  );
};

export default App;
```

## 🧠 Understanding the Code

### 1. Importing Hooks

```jsx
import React, { useRef, useEffect } from "react";
```

- **`useRef`**: Creates a reference that can point to a DOM element.
- **`useEffect`**: Runs side-effect logic after React renders the component.

### 2. Creating a Reference

```jsx
const inputRef = useRef();
```

The `useRef` Hook creates a reference object with a `current` property.

Initially, `inputRef.current` is `undefined` because no DOM element
