interface NoteActionProps
    extends React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    > {}
const NoteAction: React.FC<NoteActionProps> = ({
    children,
    className = '',
    ...restProps
}) => {
    return (
        <div {...restProps} className={`flex gap-1 ${className}`}>
            {children}
        </div>
    )
}

export default NoteAction
