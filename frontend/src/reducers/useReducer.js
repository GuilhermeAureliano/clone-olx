const initialState = {
    email: ''
};

export default (state = initialState, action) => {
    // Exemplo de uso
    if (action.type === 'SET_EMAIL') {
        return { ...state, email: action.payload.email};
    }

    return state;
}