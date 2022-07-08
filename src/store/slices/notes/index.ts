import { createSlice } from '@reduxjs/toolkit'

interface Note {
    id: number
    title: string
    body: string
    createdAt: string
    archived: boolean
}
interface NoteState {
    notes: Note[]
    searchedNote: Note[]
    selectedNote: Note
    searchKeyword: string
}
const initialNote = [
    {
        id: 1,
        title: 'Babel',
        body: 'Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.',
        createdAt: '2022-04-14T04:27:34.572Z',
        archived: false,
    },
    {
        id: 2,
        title: 'Functional Component',
        body: 'Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.',
        createdAt: '2022-04-14T04:27:34.572Z',
        archived: false,
    },
    {
        id: 3,
        title: 'Modularization',
        body: 'Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.',
        createdAt: '2022-04-14T04:27:34.572Z',
        archived: false,
    },
    {
        id: 4,
        title: 'Lifecycle',
        body: 'Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya. ',
        createdAt: '2022-04-14T04:27:34.572Z',
        archived: false,
    },
    {
        id: 5,
        title: 'ESM',
        body: 'ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.',
        createdAt: '2022-04-14T04:27:34.572Z',
        archived: false,
    },
    {
        id: 6,
        title: 'Module Bundler',
        body: 'Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.',
        createdAt: '2022-04-14T04:27:34.572Z',
        archived: false,
    },
]
const initialState: NoteState = {
    notes: initialNote,
    searchedNote: initialNote,
    searchKeyword: '',
    selectedNote: initialNote[0],
}

const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        search: (state, action: { type: string; payload: string }) => {
            state.searchedNote = state.notes.filter((note) =>
                note.title.match(new RegExp(action.payload.trim(), 'gi'))
            )
            state.searchKeyword = action.payload
        },
        select: (state, action: { type: string; payload: number }) => {
            state.selectedNote = state.notes.filter(
                (note) => note.id === action.payload
            )[0]
        },
        add: (state, action: { type: string; payload: Note }) => {
            state.notes.push(action.payload)
        },
        update: (state, action: { type: string; payload: Note }) => {
            state.notes = state.notes.map((note) =>
                note.id === action.payload.id ? action.payload : note
            )
        },
        delete: (state, action: { type: string; payload: number }) => {
            state.notes = state.notes.filter(
                (note) => note.id !== action.payload
            )
        },
        archive: (state, action: { type: string; payload: number }) => {
            state.notes = state.notes.map((note) =>
                note.id === action.payload ? { ...note, archived: true } : note
            )
        },
        unarchive: (state, action: { type: string; payload: number }) => {
            state.notes = state.notes.map((note) =>
                note.id === action.payload ? { ...note, archived: false } : note
            )
        },
    },
})

export default noteSlice
export type { Note, NoteState }
export const {
    add: addNote,
    archive: archiveNote,
    search: searchNote,
    select: selectNote,
    unarchive: unarchiveNote,
    update: updateNote,
    delete: deleteNote,
} = noteSlice.actions
