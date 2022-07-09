import React from 'react'
interface ModalTitleProps
    extends React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLHeadingElement>,
        HTMLHeadingElement
    > {}
const ModalTitle: React.FC<ModalTitleProps> = ({
    className = '',
    children,
    ...restProps
}) => {
    return (
        <h1
            {...restProps}
            className={`text-2xl text-gray-700 font-semibold ${className}`}
        >
            {children}
        </h1>
    )
}

export default ModalTitle
