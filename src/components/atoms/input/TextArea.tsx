import React from 'react'
interface TextAreaProps
    extends React.DetailedHTMLProps<
        React.TextareaHTMLAttributes<HTMLTextAreaElement>,
        HTMLTextAreaElement
    > {}
const TextArea: React.FC<TextAreaProps> = (props) => {
    const { className, ...restProps } = props
    return (
        <textarea
            {...restProps}
            className={`bg-white text-base text-gray-600 placeholder:text-gray-500 flex-grow px-5 py-2.5 rounded border border-transparent focus:border-primary-500 ${className}`}
        ></textarea>
    )
}

export default TextArea
