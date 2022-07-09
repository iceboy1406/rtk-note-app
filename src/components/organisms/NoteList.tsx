import IconButton from 'components/atoms/button/IconButton'
import ZeroNoteMessage from 'components/atoms/text/ZeroNoteMessage'
import NoteAction from 'components/molecules/NoteAction'
import NoteBody from 'components/molecules/NoteBody'
import NoteCard from 'components/molecules/NoteCard'
import React from 'react'
import { FiEdit, FiTrash2 } from 'react-icons/fi'
import { MdArchive, MdUnarchive } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from 'store'
import {
    showArchiveConfirmationModal,
    showDeleteConfirmationModal,
    showEditModal,
    showUnarchiveConfirmationModal,
} from 'store/slices/modalVisibility'
import { Note, selectNote } from 'store/slices/notes'
import { getFormattedDate } from 'utils'
interface NoteListProps
    extends React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLUListElement>,
        HTMLUListElement
    > {
    notes: Note[]
    archived: boolean
}
const NoteList: React.FC<NoteListProps> = ({
    notes,
    className = '',
    archived,
    ...restProps
}) => {
    const noteState = useSelector((state: RootState) => state.note)
    const dispatch = useAppDispatch()
    return (
        <ul
            {...restProps}
            className={`${
                notes.length > 0
                    ? 'columns-1 sm:columns-2 gap-4 pr-2'
                    : 'grid place-items-center h-full'
            } ${className}`}
        >
            {notes.length > 0 ? (
                <>
                    {notes.map((note) => (
                        <NoteCard borderLeftNumber={note.id} key={note.id}>
                            <NoteBody
                                title={note.title}
                                date={getFormattedDate(note.createdAt)}
                                content={note.body}
                            />
                            <NoteAction>
                                <IconButton
                                    theme="primary"
                                    title="Edit"
                                    onClick={() => {
                                        dispatch(selectNote(note.id))
                                        dispatch(showEditModal())
                                    }}
                                >
                                    <FiEdit />
                                </IconButton>
                                <IconButton
                                    theme="danger"
                                    title="Hapus"
                                    onClick={() => {
                                        dispatch(selectNote(note.id))
                                        dispatch(showDeleteConfirmationModal())
                                    }}
                                >
                                    <FiTrash2 />
                                </IconButton>
                                <IconButton
                                    theme="info"
                                    title={
                                        note.archived ? 'Unarchive' : 'Archive'
                                    }
                                    onClick={() => {
                                        if (note.archived) {
                                            dispatch(selectNote(note.id))
                                            dispatch(
                                                showUnarchiveConfirmationModal()
                                            )
                                        } else {
                                            dispatch(selectNote(note.id))
                                            dispatch(
                                                showArchiveConfirmationModal()
                                            )
                                        }
                                    }}
                                >
                                    {note.archived ? (
                                        <MdUnarchive />
                                    ) : (
                                        <MdArchive />
                                    )}
                                </IconButton>
                            </NoteAction>
                        </NoteCard>
                    ))}
                </>
            ) : (
                <ZeroNoteMessage>
                    {noteState.notes.filter(
                        (note) => note.archived === archived
                    ).length > 0 ? (
                        <>
                            Catatan dengan judul yang mirip dengan{' '}
                            <b>{noteState.searchKeyword}</b> tidak ditemukan
                        </>
                    ) : (
                        <>Tidak ada catatan</>
                    )}
                </ZeroNoteMessage>
            )}
        </ul>
    )
}

export default NoteList
