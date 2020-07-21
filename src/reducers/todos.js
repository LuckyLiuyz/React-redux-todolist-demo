const todo = (stateTodo, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false,
            };
        case 'TOGGLE_TODO':
            if (stateTodo.id !== action.id) {
                return stateTodo
            }
            return Object.assign({}, stateTodo, { completed: !stateTodo.completed });
        default:
            return stateTodo
    }
};

const todos = (stateTodos = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...stateTodos, todo(undefined, action)];
        case 'TOGGLE_TODO':
            return stateTodos.map((t) => todo(t, action));
        case 'DELETE_TODO':
            return stateTodos.filter(todo => todo.id !== action.id);
        default:
            return stateTodos
    }
};

export default todos;

