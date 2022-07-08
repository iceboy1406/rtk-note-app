interface TabItemProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    isActive: boolean
}
const TabItem: React.FC<TabItemProps> = (props) => {
    const { isActive, className, children, ...restProps } = props
    return (
        <button
            {...restProps}
            type="button"
            className={`px-4 py-2.5 md:px-7 rounded select-none ${
                isActive
                    ? 'bg-primary-500 text-white'
                    : 'bg-transparent text-gray-600 hover:bg-gray-200'
            } transition-all duration-300 ${className}`}
        >
            {children}
        </button>
    )
}

export default TabItem
