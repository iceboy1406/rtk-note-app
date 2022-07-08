import { createSlice } from '@reduxjs/toolkit'

interface ModalVisibilityState {
    addModal: boolean
    editModal: boolean
    deleteConfirmationModal: boolean
    archiveConfirmationModal: boolean
    unarchiveConfirmationModal: boolean
}
const initialState: ModalVisibilityState = {
    addModal: false,
    archiveConfirmationModal: false,
    deleteConfirmationModal: false,
    editModal: false,
    unarchiveConfirmationModal: false,
}
const modalVisibilitySlice = createSlice({
    name: 'modalVisibility',
    initialState,
    reducers: {
        showAddModal: (state) => {
            state.addModal = true
        },
        hideAddModal: (state) => {
            state.addModal = false
        },
        showEditModal: (state) => {
            state.editModal = true
        },
        hideEditModal: (state) => {
            state.editModal = false
        },
        showDeleteConfirmationModal: (state) => {
            state.deleteConfirmationModal = true
        },
        hideDeleteConfirmationModal: (state) => {
            state.deleteConfirmationModal = false
        },
        showArchiveConfirmationModal: (state) => {
            state.archiveConfirmationModal = true
        },
        hideArchiveConfirmationModal: (state) => {
            state.archiveConfirmationModal = false
        },
        showUnarchiveConfirmationModal: (state) => {
            state.unarchiveConfirmationModal = true
        },
        hideUnarchiveConfirmationModal: (state) => {
            state.unarchiveConfirmationModal = false
        },
    },
})
export default modalVisibilitySlice
export type { ModalVisibilityState }
export const {
    hideAddModal,
    hideArchiveConfirmationModal,
    hideDeleteConfirmationModal,
    hideEditModal,
    hideUnarchiveConfirmationModal,
    showAddModal,
    showArchiveConfirmationModal,
    showDeleteConfirmationModal,
    showEditModal,
    showUnarchiveConfirmationModal,
} = modalVisibilitySlice.actions
