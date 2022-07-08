import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import modalVisibilitySlice from './slices/modalVisibility'
import noteSlice from './slices/notes'

const store = configureStore({
    reducer: {
        note: noteSlice.reducer,
        modalVisibility: modalVisibilitySlice.reducer,
    },
    devTools: true,
})
export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
