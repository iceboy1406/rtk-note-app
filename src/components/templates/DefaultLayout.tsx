interface DefaultLayoutProps
    extends React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    > {}
const DefaultLayout: React.FC<DefaultLayoutProps> = (props) => {
    const { className, children, ...restProps } = props
    return (
        <div
            {...restProps}
            className={`w-screen h-screen overflow-hidden  px-6 py-4 bg-gray-50 flex flex-col items-center ${className}`}
        >
            <div className="w-full h-full max-w-3xl flex flex-col gap-4">
                {children}
            </div>
        </div>
    )
}

export default DefaultLayout
