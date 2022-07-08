import ActionGroup from 'components/organisms/ActionGroup'
import Footer from 'components/organisms/Footer'
import Header from 'components/organisms/Header'
import AddNoteModal from 'components/organisms/modal/AddNoteModal'
import ArchiveNoteConfirmationModal from 'components/organisms/modal/ArchiveNoteConfirmationModal'
import DeleteNoteConfirmationModal from 'components/organisms/modal/DeleteNoteConfirmationModal'
import EditNoteModal from 'components/organisms/modal/EditNoteModal'
import NoteList from 'components/organisms/NoteList'
import DefaultLayout from 'components/templates/DefaultLayout'
import { useSelector } from 'react-redux'
import { RootState } from 'store'

const ActiveNotesPage = () => {
    const searchedNote = useSelector(
        (state: RootState) => state.note.searchedNote
    )

    return (
        <DefaultLayout>
            <Header />
            <ActionGroup />
            <main className="flex-grow overflow-y-auto">
                <NoteList
                    archived={false}
                    notes={searchedNote.filter(
                        (note) => note.archived === false
                    )}
                />
            </main>
            <Footer />
            {/* Modals */}
            <AddNoteModal />
            <EditNoteModal />
            <ArchiveNoteConfirmationModal />
            <DeleteNoteConfirmationModal />
        </DefaultLayout>
    )
}

export default ActiveNotesPage
