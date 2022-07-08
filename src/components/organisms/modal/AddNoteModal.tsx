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
import { hideAddModal } from 'store/slices/modalVisibility'
import { addNote, Note } from 'store/slices/notes'

const AddNoteModal = () => {
    const modalVisibility = useSelector(
        (state: RootState) => state.modalVisibility
    )
    const dispatch = useAppDispatch()
    const [noteTitleValue, setNoteTitleValue] = useState<string>('')
    const [noteBodyValue, setNoteBodyValue] = useState<string>('')
    const resetForm = () => {
        setNoteTitleValue('')
        setNoteBodyValue('')
    }
    const submitHandler = () => {
        const newNote: Note = {
            id: +new Date(),
            title: noteTitleValue,
            body: noteBodyValue,
            createdAt: new Date().toISOString(),
            archived: false,
        }
        dispatch(addNote(newNote))
        dispatch(hideAddModal())
    }
    const noteTitleRef: LegacyRef<HTMLInputElement> = useRef(null)
    return (
        <ModalContainer
            visible={modalVisibility.addModal}
            onClose={() => {
                dispatch(hideAddModal())
                resetForm()
            }}
            onOpen={() => {
                noteTitleRef.current?.focus()
            }}
        >
            <ModalCard visible={modalVisibility.addModal}>
                <ModalHeader>
                    <ModalTitle>Buat Catatan Baru</ModalTitle>
                    <ModalCloseButton
                        onClick={() => dispatch(hideAddModal())}
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

export default AddNoteModal
