
/**
 * @param {*} stateTodo 
 * @param {*} action 
 * @description 每个传入 combineReducers 的 reducer 都需满足以下规则：
 * 1、所有未匹配到的 action，必须把它接收到的第一个参数也就是下述 stateTodo 原封不动返回。
 * 2、永远不能返回 undefined。当过早 return 时非常容易犯这个错误，为了避免错误扩散，遇到这种情况时 combineReducers 会抛异常。
 * 3、如果传入的 state 就是 undefined，一定要返回对应 reducer 的初始 state。根据上一条规则，初始 state 禁止使用 undefined。使用 ES6 的默认参数值语法来设置初始 state 很容易，但你也可以手动检查第一个参数是否为 undefined。
 * 4、虽然 combineReducers 自动帮你检查 reducer 是否符合以上规则，但你也应该牢记，并尽量遵守。
 */
const todo = (stateTodo = {}, action) => {
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

