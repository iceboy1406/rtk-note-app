interface ZeroNoteMessageProps
    extends React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLParagraphElement>,
        HTMLParagraphElement
    > {}
const ZeroNoteMessage: React.FC<ZeroNoteMessageProps> = ({
    children,
    className = '',
    ...restProps
}) => {
    return (
        <p
            {...restProps}
            className={`text-lg text-gray-700 font-normal ${className}`}
        >
            {children}
        </p>
    )
}

export default ZeroNoteMessage
