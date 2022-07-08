import Button from 'components/atoms/button/Button'
import ModalCard from 'components/molecules/ModalCard'
import ModalContainer from 'components/molecules/ModalContainer'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from 'store'
import { hideArchiveConfirmationModal } from 'store/slices/modalVisibility'
import { archiveNote } from 'store/slices/notes'

const ArchiveNoteConfirmationModal = () => {
    const selectedNote = useSelector(
        (state: RootState) => state.note.selectedNote
    )
    const modalVisibility = useSelector(
        (state: RootState) => state.modalVisibility
    )
    const dispatch = useAppDispatch()
    return (
        <ModalContainer
            visible={modalVisibility.archiveConfirmationModal}
            onClose={() => {
                dispatch(hideArchiveConfirmationModal())
            }}
        >
            <ModalCard visible={modalVisibility.archiveConfirmationModal} className='max-w-[400px]'>
                <p className="text-2xl text-gray-700 ">
                    Apakah anda yakin ingin mengarsipkannya?
                </p>
                <div className="flex justify-end gap-2">
                    <Button
                        theme="secondary"
                        onClick={() => dispatch(hideArchiveConfirmationModal())}
                    >
                        Batal
                    </Button>
                    <Button
                        theme="primary"
                        onClick={() => {
                            dispatch(hideArchiveConfirmationModal())
                            dispatch(archiveNote(selectedNote.id))
                        }}
                    >
                        Yakin
                    </Button>
                </div>
            </ModalCard>
        </ModalContainer>
    )
}

export default ArchiveNoteConfirmationModal
