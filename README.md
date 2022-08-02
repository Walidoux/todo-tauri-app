# Desktop Todo app

A project inspired by a [todo app on FrontendMentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building real projects.
Built on top of other technologies, more details about them are down below.

Here's an example of what it looks like:

![Preview Light/Dark Theme App](./design/light-dark-app.png)

## Table of contents

- [Overview](#overview)
  - [Challenges](#challenges)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Challenges

Users should be able to:

- [] View the optimal layout for the app depending on their device's screen size
- [x] See hover states for all interactive elements on the page
- [x] Add new todos to the list
- [x] Mark todos as complete
- [x] Delete todos from the list
- [x] Filter by all/active/complete todos
- [x] Clear all completed todos
- [x] Toggle light and dark mode
- **[] Bonus**: Drag and drop to reorder items on the list
- **[] Bonus**: Build this project as a full-stack application

### Built with

| 🛠️ Technologies | 📝 Descriptions |
|---|---|
| [![Solidjs](https://img.shields.io/badge/Solid%20JS-2C4F7C?style=for-the-badge&logo=solid&logoColor=white)](https://www.solidjs.com/) | An alternative to React based on reactivity. |
| [![Rust](https://img.shields.io/badge/Rust-black?style=for-the-badge&logo=rust&logoColor=#E57324)](https://www.rust-lang.org/fr) | A programming system typed language. |
| [![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/) | Typed JS language. |
| [![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/) | CSS Framework. |
| [![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/) | Next generation front-end tooling. |
| [![Tauri](https://img.shields.io/badge/Tauri-FFC131?style=for-the-badge&logo=Tauri&logoColor=white)](https://tauri.studio/) | A Desktop framework for building webviews. |

### What I learned

An Immer inspired utility function called `produce()`. This utility allows us to write code that mutates
data in the normal way but automatically creates immutable copies behind the scenes.

```tsx
export const addTodo = (todo: ITodo) =>
  setTodos(produce((currentTodos: ITodo[]) => currentTodos.push(todo)))
```

Also, [SolidJS considerations](https://www.solidjs.com/guides/reactivity#considerations)
are extremely important to understanad when it specifically comes to
logic top-level structure or props destructuring, see second one.

```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article that helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Walid Korchi](https://www.walidkorchi.com/)
- Frontend Mentor - [@Walidoux](https://www.frontendmentor.io/profile/Walidoux)
- Discord - Walidoux#3152
