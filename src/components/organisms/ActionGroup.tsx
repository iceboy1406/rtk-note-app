import Button from 'components/atoms/button/Button'
import SearchInput from 'components/atoms/input/SearchInput'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from 'store'
import { showAddModal } from 'store/slices/modalVisibility'
import { searchNote } from 'store/slices/notes'
interface ActionGroupProps
    extends React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    > {}
const ActionGroup: React.FC<ActionGroupProps> = ({
    className = '',
    ...restProps
}) => {
    const noteState = useSelector((state: RootState) => state.note)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(searchNote(noteState.searchKeyword))
    }, [noteState.notes])
    return (
        <div
            {...restProps}
            className={`flex flex-col gap-2 sm:flex-row ${className}`}
        >
            <SearchInput
                id="search-input"
                placeholder="Cari berdasarkan judul"
                value={noteState.searchKeyword}
                onChange={(e) => {
                    const searchValue = e.target.value
                        .trimStart()
                        .replace(/ +(?= )/g, '')
                    dispatch(searchNote(searchValue))
                }}
                containerClassName="flex-grow"
            />
            <Button
                className="w-full sm:w-fit"
                onClick={() => dispatch(showAddModal())}
                theme="primary"
            >
                Buat Catatan
            </Button>
        </div>
    )
}

export default ActionGroup
