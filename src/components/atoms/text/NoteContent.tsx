import { useEffect, useState } from 'react'

interface NoteContentProps
    extends React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLParagraphElement>,
        HTMLParagraphElement
    > {
    showMoreClassName?: string
}
const NoteContent: React.FC<NoteContentProps> = (props) => {
    const {className, showMoreClassName, children, ...restProps} = props
    const value = children?.toString()!
    const [content, setContent] = useState(value)
    const [showMore, setShowMore] = useState(false)
    useEffect(() => {
        if (showMore) {
            setContent(value)
        } else {
            setContent(value.split(' ').slice(0, 65).join(' '))
        }
    }, [showMore, value])
    return (
        <p
            {...restProps}
            className={`text-base text-gray-600 font-normal leading-5 ${className}`}
        >
            {content}
            {value.split(' ').length > 65 ? (
                <>
                    <button
                        type="button"
                        className={`text-primary-500 ${showMoreClassName}`}
                        onClick={() => setShowMore(!showMore)}
                    >
                        ...
                        {showMore
                            ? 'Lihat lebih sedikit'
                            : 'Lihat Selengkapnya'}
                    </button>
                </>
            ) : (
                ''
            )}
        </p>
    )
}

export default NoteContent
