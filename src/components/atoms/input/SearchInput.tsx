import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
interface SearchInputProps
    extends React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    containerClassName?: string
}
const SearchInput: React.FC<SearchInputProps> = (props) => {
    const [isFocus, setIsFocus] = useState(false)
    const { className, containerClassName, id, ...restProps } = props
    return (
        <label
            className={`flex gap-2.5 items-center px-5 py-2.5 h-fit bg-white rounded cursor-text border ${
                isFocus ? 'border-primary-500' : 'border-transparent'
            } transition-all duration-300 ${containerClassName}`}
            htmlFor={id}
        >
            <FiSearch className="text-gray-600 text-xl" />
            <input
                {...restProps}
                id={id}
                type="search"
                className={`bg-transparent text-base text-gray-600 placeholder:text-gray-500 flex-grow ${className}`}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                autoComplete={'off'}
            />
        </label>
    )
}

export default SearchInput
