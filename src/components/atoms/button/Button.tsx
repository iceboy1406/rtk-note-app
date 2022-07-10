interface ButtonProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    theme?: 'primary' | 'danger' | 'secondary' | 'info'
}
const Button: React.FC<ButtonProps> = ({
    theme = 'primary',
    className = '',
    children,
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
            case 'secondary':
                return 'bg-gray-500 text-white hover:shadow-gray-500/[.5]'
        }
    })()
    return (
        <button
            {...restProps}
            className={`h-fit rounded text-white text-base px-6 py-2.5 hover:shadow-lg active:shadow-none transition-all duration-300 disabled:cursor-not-allowed disabled:bg-opacity-60 disabled:hover:shadow-none ${themeStyle} ${className}`}
        >
            {children}
        </button>
    )
}

export default Button
