import Button from 'components/atoms/button/Button'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
    const navigate = useNavigate()
    return (
        <div className="p-8 flex flex-col gap-4 justify-center items-center min-h-screen">
            <img src="/404.svg" alt="page not found" className="h-full" />
            <Button onClick={() => navigate('/')}>Back to Home</Button>
        </div>
    )
}

export default PageNotFound
