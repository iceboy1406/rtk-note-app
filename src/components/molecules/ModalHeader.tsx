interface ModalHeaderProps
    extends React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    > {}
const ModalHeader: React.FC<ModalHeaderProps> = ({
    children,
    className = '',
    ...restProps
}) => {
    return (
        <div
            {...restProps}
            className={`flex justify-between gap-2 items-center ${className}`}
        >
            {children}
        </div>
    )
}

export default ModalHeader
