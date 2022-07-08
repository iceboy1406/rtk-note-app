import ActionGroup from 'components/organisms/ActionGroup'
import Footer from 'components/organisms/Footer'
import Header from 'components/organisms/Header'
import AddNoteModal from 'components/organisms/modal/AddNoteModal'
import DeleteNoteConfirmationModal from 'components/organisms/modal/DeleteNoteConfirmationModal'
import EditNoteModal from 'components/organisms/modal/EditNoteModal'
import UnarchiveNoteConfirmationModal from 'components/organisms/modal/UnarchiveNoteConfirmationModal'
import NoteList from 'components/organisms/NoteList'
import DefaultLayout from 'components/templates/DefaultLayout'
import { useSelector } from 'react-redux'
import { RootState } from 'store'

const ArchivedNotesPage = () => {
    const searchedNote = useSelector(
        (state: RootState) => state.note.searchedNote
    )
    return (
        <DefaultLayout>
            <Header />
            <ActionGroup />
            <main className="flex-grow overflow-y-auto">
                <NoteList
                    archived={true}
                    notes={searchedNote.filter(
                        (note) => note.archived === true
                    )}
                />
            </main>
            <Footer />
            {/* Modals */}
            <AddNoteModal />
            <EditNoteModal />
            <UnarchiveNoteConfirmationModal />
            <DeleteNoteConfirmationModal />
        </DefaultLayout>
    )
}

export default ArchivedNotesPage
