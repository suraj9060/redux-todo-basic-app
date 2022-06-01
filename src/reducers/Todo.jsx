const initialState = {
    data:[]
}

const todos = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                data: [
                    ...state.data,
                    {
                        massage: action.massage,
                        id:action.id,
                    },
                ],
            };
        case "DELETE_TODO":
            const todos = state.data.filter((todo)=>todo.id !== action.id)
            return {
                ...state,
                data:todos,
            };
        default:
            return state;
    }
};
export default todos