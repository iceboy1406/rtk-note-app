import PageNotFound from 'pages/404'
import ActiveNotesPage from 'pages/ActiveNotesPage'
import ArchivedNotesPage from 'pages/ArchivedNotesPage'
import { Provider } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import store from 'store'
function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path='*' element={<PageNotFound />} />
                    <Route
                        path="/"
                        element={<Navigate to={'/active-notes'} replace />}
                    />
                    <Route path="/active-notes" element={<ActiveNotesPage />} />
                    <Route
                        path="/archived-notes"
                        element={<ArchivedNotesPage />}
                    />
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

export default App
