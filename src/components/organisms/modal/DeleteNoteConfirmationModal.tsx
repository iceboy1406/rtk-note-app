import Button from 'components/atoms/button/Button'
import ModalCard from 'components/molecules/ModalCard'
import ModalContainer from 'components/molecules/ModalContainer'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from 'store'
import { hideDeleteConfirmationModal } from 'store/slices/modalVisibility'
import { archiveNote, deleteNote } from 'store/slices/notes'

const DeleteNoteConfirmationModal = () => {
    const selectedNote = useSelector(
        (state: RootState) => state.note.selectedNote
    )
    const modalVisibility = useSelector(
        (state: RootState) => state.modalVisibility
    )
    const dispatch = useAppDispatch()
    return (
        <ModalContainer
            visible={modalVisibility.deleteConfirmationModal}
            onClose={() => {
                dispatch(hideDeleteConfirmationModal())
            }}
        >
            <ModalCard visible={modalVisibility.deleteConfirmationModal} className='max-w-[400px]'>
                <p className="text-2xl text-gray-700 ">
                    Apakah anda yakin ingin menghapusnya?
                </p>
                <div className="flex justify-end gap-2">
                    <Button
                        theme="secondary"
                        onClick={() => dispatch(hideDeleteConfirmationModal())}
                    >
                        Batal
                    </Button>
                    <Button
                        theme="danger"
                        onClick={() => {
                            dispatch(hideDeleteConfirmationModal())
                            dispatch(deleteNote(selectedNote.id))
                        }}
                    >
                        Hapus
                    </Button>
                </div>
            </ModalCard>
        </ModalContainer>
    )
}

export default DeleteNoteConfirmationModal
