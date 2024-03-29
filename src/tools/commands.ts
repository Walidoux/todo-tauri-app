/* eslint-disable */
// This file was generated by [tauri-specta](https://github.com/oscartbeaumont/tauri-specta). Do not edit this file manually.

declare global {
    interface Window {
        __TAURI_INVOKE__<T>(cmd: string, args?: Record<string, unknown>): Promise<T>;
    }
}

// Function avoids 'window not defined' in SSR
const invoke = () => window.__TAURI_INVOKE__;

export function addTodo(todo: ITodo) {
    return invoke()<null>("add_todo", { todo })
}

export function removeTodo(todo: ITodo) {
    return invoke()<null>("remove_todo", { todo })
}

export function fetchTodos() {
    return invoke()<ITodo[]>("fetch_todos")
}

export function updateTodos(todos: ITodo[]) {
    return invoke()<null>("update_todos", { todos })
}

export function toggleTodo(todo: ITodo) {
    return invoke()<null>("toggle_todo", { todo })
}

export function clearCompletedTodos() {
    return invoke()<null>("clear_completed_todos")
}

export type ITodo = { name: string; completed: boolean; id: string }
