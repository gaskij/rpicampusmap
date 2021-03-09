import createSlice from '@reduxjs/toolkit'

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        login: 0
    },
    reducers: {
        login: state => {state.login = 1},
        logout: state => {state.login = 0}
    }
})

export const { login, logout } = usersSlice.actions

export default usersSlice.reducer