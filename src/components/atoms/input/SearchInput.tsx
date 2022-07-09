import { FiSearch } from 'react-icons/fi'
interface SearchInputProps
    extends React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    containerClassName?: string
}
const SearchInput: React.FC<SearchInputProps> = ({
    className = '',
    containerClassName = '',
    id,
    ...restProps
}) => {
    return (
        <label
            className={`flex gap-2.5 items-center px-5 py-2.5 h-fit bg-white rounded cursor-text border border-transparent transition-all duration-300 ${containerClassName} focus-within:border-primary-500`}
            htmlFor={id}
        >
            <FiSearch className="text-gray-600 text-xl" />
            <input
                {...restProps}
                id={id}
                type="search"
                className={`bg-transparent text-base text-gray-600 placeholder:text-gray-500 flex-grow ${className}`}
            />
        </label>
    )
}

export default SearchInput
