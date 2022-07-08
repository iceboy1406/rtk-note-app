import { FiX } from 'react-icons/fi'
interface ModalCloseButtonProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {}
const ModalCloseButton: React.FC<ModalCloseButtonProps> = (props) => {
    const { className, ...restProps } = props
    return (
        <button
            {...restProps}
            className={`p-2.5 bg-white text-base rounded ${className}`}
        >
            <FiX />
        </button>
    )
}

export default ModalCloseButton
