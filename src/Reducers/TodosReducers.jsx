import { v4 as uuidv4 } from "uuid";

export default function TodosReducer(currentTodos, action) {
  switch (action.type) {
    case "loaded": {
      return action.payload;
    }

    case "added": {
      const title = action.payload.title;
      if (!title.trim()) return currentTodos;
      const updatedTodos = [
        ...currentTodos,
        {
          id: uuidv4(),
          title: title,
          isDone: false,
        },
      ];
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    }

    case "checked": {
      const updatedTodos = currentTodos.map((t) => {
        if (t.id === action.payload) {
          return { ...t, isDone: !t.isDone };
        }
        return t;
      });
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    }

    case "edited": {
      console.log("hi")
      const todoId = action.payload.id
      const editTitle = action.payload.editTitle
      if (!editTitle.trim()) return currentTodos;
      const updatedTodos = currentTodos.map((t) =>
        t.id === todoId ? { ...t, title: editTitle.trim() } : t
      )
      localStorage.setItem("todos", JSON.stringify(updatedTodos))
      return updatedTodos
    }

    case "deleted": {
      const updatedTodos = currentTodos.filter(
        (task) => action.payload !== task.id
      );
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    }

    default:
      return currentTodos;
  }
}
