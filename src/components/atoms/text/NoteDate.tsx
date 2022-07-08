interface NoteDateProps
    extends React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLParagraphElement>,
        HTMLParagraphElement
    > {}
const NoteDate: React.FC<NoteDateProps> = (props) => {
    const { children, className , ...restProps} = props
    return (
        <p
            {...restProps}
            className={`text-base text-gray-500 font-light leading-5 ${className}`}
        >
            {children}
        </p>
    )
}

export default NoteDate
