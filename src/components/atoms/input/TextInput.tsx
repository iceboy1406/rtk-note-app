import React, { LegacyRef } from 'react'
interface TextInputProps
    extends React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {}
const TextInput = React.forwardRef(
    (
        { className = '', ...restProps }: TextInputProps,
        ref: LegacyRef<HTMLInputElement>
    ) => {
        return (
            <input
                ref={ref}
                {...restProps}
                type="text"
                className={`bg-white text-base text-gray-600 placeholder:text-gray-500 flex-grow px-5 py-2.5 rounded border border-transparent focus:border-primary-500 ${className}`}
            />
        )
    }
)

export default TextInput
export type { TextInputProps }
