import { FC } from 'react'

interface NoteTitleProps
    extends React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLHeadingElement>,
        HTMLHeadingElement
    > {}
const NoteTitle: FC<NoteTitleProps> = ({
    className = '',
    children,
    ...restProps
}) => {
    return (
        <h1
            {...restProps}
            className={`text-2xl text-gray-700 font-semibold ${className}`}
        >
            {children}
        </h1>
    )
}

export default NoteTitle
