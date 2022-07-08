interface ZeroNoteMessageProps
    extends React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLParagraphElement>,
        HTMLParagraphElement
    > {}
const ZeroNoteMessage: React.FC<ZeroNoteMessageProps> = (props) => {
    const { children, className , ...restProps} = props
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
