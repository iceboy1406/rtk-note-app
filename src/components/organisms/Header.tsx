import NavBrand from 'components/atoms/NavBrand'
import TabItem from 'components/atoms/TabItem'
import TabBar from 'components/molecules/TabBar'
import { useLocation, useNavigate } from 'react-router-dom'

interface HeaderProps
    extends React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
    > {}
const Header: React.FC<HeaderProps> = (props) => {
    const { pathname } = useLocation()
    const navigate = useNavigate()
    const { className, ...restProps } = props

    return (
        <header
            {...restProps}
            className={`w-full bg-white p-4 rounded flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center ${className}`}
        >
            <NavBrand />
            <TabBar>
                <TabItem
                    isActive={pathname === '/active-notes'}
                    onClick={() => navigate('/active-notes')}
                >
                    Catatan Aktif
                </TabItem>
                <TabItem
                    isActive={pathname === '/archived-notes'}
                    onClick={() => navigate('/archived-notes')}
                >
                    Arsip
                </TabItem>
            </TabBar>
        </header>
    )
}

export default Header
