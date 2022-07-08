import React from 'react'
interface FooterProps
    extends React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
    > {}
const Footer: React.FC<FooterProps> = (props) => {
    const { className, ...restProps } = props
    return (
        <footer
            {...restProps}
            className={`text-base text-gray-700 text-center ${className}`}
        >
            © Copyright (C) 2022. Created by Eko Susilo
        </footer>
    )
}

export default Footer
