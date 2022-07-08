interface NoteActionProps
    extends React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    > {}
const NoteAction: React.FC<NoteActionProps> = (props) => {
    const { children, className, ...restProps } = props

    return <div {...restProps} className={`flex gap-1 ${className}`}>{children}</div>
}

export default NoteAction
