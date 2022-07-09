interface NavBrandProps
    extends React.DetailedHTMLProps<
        React.AnchorHTMLAttributes<HTMLAnchorElement>,
        HTMLAnchorElement
    > {}
const NavBrand: React.FC<NavBrandProps> = ({
    className = '',
    ...restProps
}) => {
    return (
        <a
            {...restProps}
            href="https://www.flaticon.com/free-icon/notes_858821"
            target={'_blank'}
            rel="noreferrer"
            className={`block w-fit h-fit ${className}`}
            title={`Credit : https://www.flaticon.com/free-icon/notes_858821`}
        >
            <img
                src="/brand.svg"
                alt="brand logo"
                loading="lazy"
                className="h-9"
            />
        </a>
    )
}

export default NavBrand
