import Button from 'components/atoms/button/Button'
import ModalCard from 'components/molecules/ModalCard'
import ModalContainer from 'components/molecules/ModalContainer'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from 'store'
import { hideUnarchiveConfirmationModal } from 'store/slices/modalVisibility'
import { archiveNote, unarchiveNote } from 'store/slices/notes'

const UnarchiveNoteConfirmationModal = () => {
    const selectedNote = useSelector(
        (state: RootState) => state.note.selectedNote
    )
    const modalVisibility = useSelector(
        (state: RootState) => state.modalVisibility
    )
    const dispatch = useAppDispatch()
    return (
        <ModalContainer
            visible={modalVisibility.unarchiveConfirmationModal}
            onClose={() => {
                dispatch(hideUnarchiveConfirmationModal())
            }}
        >
            <ModalCard visible={modalVisibility.unarchiveConfirmationModal} className='max-w-[400px]'>
                <p className="text-2xl text-gray-700 ">
                    Apakah anda yakin ingin memindahkannya dari arsip?
                </p>
                <div className="flex justify-end gap-2">
                    <Button
                        theme="secondary"
                        onClick={() =>
                            dispatch(hideUnarchiveConfirmationModal())
                        }
                    >
                        Batal
                    </Button>
                    <Button
                        theme="primary"
                        onClick={() => {
                            dispatch(hideUnarchiveConfirmationModal())
                            dispatch(unarchiveNote(selectedNote.id))
                        }}
                    >
                        Yakin
                    </Button>
                </div>
            </ModalCard>
        </ModalContainer>
    )
}

export default UnarchiveNoteConfirmationModal
