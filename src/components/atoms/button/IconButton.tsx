interface IconButtonProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    theme: 'primary' | 'danger' | 'info'
}
const IconButton: React.FC<IconButtonProps> = ({
    theme = 'primary',
    children,
    className = '',
    ...restProps
}) => {
    const themeStyle = (() => {
        switch (theme) {
            case 'primary':
                return 'bg-primary-500 text-white hover:shadow-primary-500/[.5]'
            case 'danger':
                return 'bg-danger-500 text-white hover:shadow-danger-500/[.5]'
            case 'info':
                return 'bg-info-500 text-white hover:shadow-info-500/[.5]'
        }
    })()
    return (
        <button
            {...restProps}
            className={`w-fit h-fit rounded text-white text-lg p-2.5 hover:shadow-lg active:shadow-none transition-all duration-300 ${themeStyle} ${className}`}
        >
            {children}
        </button>
    )
}

export default IconButton
