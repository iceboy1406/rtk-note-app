import { LegacyRef, useEffect, useRef } from 'react'
interface ModalContainerProps
    extends React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    > {
    onClose?: Function
    onOpen?: Function
    visible: boolean
}
const ModalContainer: React.FC<ModalContainerProps> = ({
    children,
    className = '',
    visible,
    onClose = () => {},
    onOpen = () => {},
    onClick = () => {},
    ...restProps
}) => {
    const containerRef: LegacyRef<HTMLDivElement> = useRef(null)
    useEffect(() => {
        document.body.addEventListener('keyup', (e) => {
            if (e.key === 'Escape') onClose()
        })
    }, [])
    useEffect(() => {
        if (visible === true) onOpen()
        if (visible === false) onClose()
    }, [visible])
    return (
        <div
            {...restProps}
            ref={containerRef}
            onClick={(e) => {
                onClick(e)
                if (e.target === containerRef.current) onClose()
            }}
            className={`${
                visible ? 'grid place-items-center' : 'hidden'
            } px-6 py-8 fixed top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-60 ${className}`}
        >
            {children}
        </div>
    )
}

export default ModalContainer
