export interface ITodo {
  name: string
  completed: boolean
  id: string
}

export type TodoFilter = 'all' | 'active' | 'completed'
