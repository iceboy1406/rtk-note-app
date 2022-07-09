interface ModalCardProps
    extends React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    > {
    visible: boolean
}
const ModalCard: React.FC<ModalCardProps> = ({
    children,
    className = '',
    visible,
    ...restProps
}) => {
    return (
        <div
            {...restProps}
            className={`w-full max-w-[500px] bg-gray-50 p-6 rounded ${
                visible ? ' flex flex-col gap-4 animate-fadeDown' : 'hidden'
            } ${className}`}
        >
            {children}
        </div>
    )
}

export default ModalCard
