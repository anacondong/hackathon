
const initialState = {
    user: {},
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_USER':
            return { user: action.user}
        default:
        return state

    }
}
export default userReducer