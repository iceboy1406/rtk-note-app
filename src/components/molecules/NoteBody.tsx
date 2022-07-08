import NoteContent from 'components/atoms/text/NoteContent'
import NoteDate from 'components/atoms/text/NoteDate'
import NoteTitle from 'components/atoms/text/NoteTitle'

interface NoteBodyProps
    extends React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
    > {
    title: string
    date: string
    content: string
}
const NoteBody: React.FC<NoteBodyProps> = (props) => {
    const { children, className, title, date, content, ...restProps } = props
    return (
        <article {...restProps} className={`flex flex-col gap-3 ${className}`}>
            <div className="flex flex-col gap-0.5">
                <NoteTitle>{title}</NoteTitle>
                <NoteDate>{date}</NoteDate>
            </div>
            <NoteContent>{content}</NoteContent>
        </article>
    )
}

export default NoteBody
