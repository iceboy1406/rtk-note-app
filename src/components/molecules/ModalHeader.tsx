
interface ModalHeaderProps
    extends React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    > {}
const ModalHeader: React.FC<ModalHeaderProps> = (props) => {
    const { children, className , ...restProps} = props
    return (
        <div {...restProps} className={`flex justify-between gap-2 items-center ${className}`}>
            {children}
        </div>
    )
}

export default ModalHeader
