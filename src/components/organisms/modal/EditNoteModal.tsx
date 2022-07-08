import Button from 'components/atoms/button/Button'
import ModalCloseButton from 'components/atoms/button/ModalCloseButton'
import TextArea from 'components/atoms/input/TextArea'
import TextInput from 'components/atoms/input/TextInput'
import ModalTitle from 'components/atoms/text/ModalTitle'
import ModalCard from 'components/molecules/ModalCard'
import ModalContainer from 'components/molecules/ModalContainer'
import ModalHeader from 'components/molecules/ModalHeader'
import { LegacyRef, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from 'store'
import { hideEditModal } from 'store/slices/modalVisibility'
import { Note, updateNote } from 'store/slices/notes'

const EditNoteModal = () => {
    const modalVisibility = useSelector(
        (state: RootState) => state.modalVisibility
    )
    const selectedNote = useSelector(
        (state: RootState) => state.note.selectedNote
    )
    const dispatch = useAppDispatch()
    const [noteTitleValue, setNoteTitleValue] = useState<string>('')
    const [noteBodyValue, setNoteBodyValue] = useState<string>('')
    const submitHandler = () => {
        const editedNote: Note = {
            ...selectedNote,
            title: noteTitleValue,
            body: noteBodyValue,
        }
        dispatch(updateNote(editedNote))
        dispatch(hideEditModal())
    }
    const noteTitleRef: LegacyRef<HTMLInputElement> = useRef(null)
    return (
        <ModalContainer
            visible={modalVisibility.editModal}
            onClose={() => {
                dispatch(hideEditModal())
            }}
            onOpen={() => {
                noteTitleRef.current?.focus()
                setNoteTitleValue(selectedNote.title)
                setNoteBodyValue(selectedNote.body)
            }}
        >
            <ModalCard visible={modalVisibility.editModal}>
                <ModalHeader>
                    <ModalTitle>Ubah Catatan</ModalTitle>
                    <ModalCloseButton
                        onClick={() => dispatch(hideEditModal())}
                    />
                </ModalHeader>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-1">
                        <p className="text-sm text-right text-gray-600">
                            {noteTitleValue.length}/50
                        </p>
                        <TextInput
                            ref={noteTitleRef}
                            placeholder="Judul Catatan"
                            className="w-full"
                            onChange={(e) => {
                                setNoteTitleValue(
                                    e.target.value
                                        .substring(0, 50)
                                        .trimStart()
                                        .replace(/ +(?= )/g, '')
                                )
                            }}
                            value={noteTitleValue}
                        />
                    </div>
                    <TextArea
                        rows={8}
                        value={noteBodyValue}
                        onChange={(e) =>
                            setNoteBodyValue(
                                e.target.value
                                    .trimStart()
                                    .replace(/ +(?= )/g, '')
                            )
                        }
                        placeholder="Isi Catatan"
                    />
                    <Button
                        theme="primary"
                        type="submit"
                        disabled={noteTitleValue === '' || noteBodyValue === ''}
                        onClick={submitHandler}
                    >
                        Simpan
                    </Button>
                </div>
            </ModalCard>
        </ModalContainer>
    )
}

export default EditNoteModal
