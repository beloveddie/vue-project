export interface TodoItemModel {
    id: number;
    label: string;
    purchased: boolean;
    highPriority: boolean;
}

export interface TodoListModel {
    todoItems: TodoItemModel[]
  }