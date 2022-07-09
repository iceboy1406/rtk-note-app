interface TabBarProps
    extends React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    > {}
const TabBar: React.FC<TabBarProps> = ({
    children,
    className = '',
    ...restProps
}) => {
    return (
        <div {...restProps} className={`grid grid-cols-2 gap-1`}>
            {children}
        </div>
    )
}

export default TabBar
