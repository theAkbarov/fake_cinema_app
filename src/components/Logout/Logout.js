import {useHistory} from 'react-router-dom'
import {useState} from "react"
import { useAuth} from "../../services/context/AuthContext"
import logOutIcon from '../../assets/icons/logOutIcon.svg'
import {GetOut} from './useStyles'

const Logout = () => {
    const {  logout } = useAuth()

    const history = useHistory()
    const [error, setError] = useState("");
    
    async function logOutHandler() {
        setError("")
        try {
            await logout()
            history.push('/auth')
        } catch {
            setError("Failed to log out!")
            alert(error)
        }
    }
    return (
        <GetOut onClick={logOutHandler}>
            <img src={logOutIcon} alt="" />
            Log out</GetOut>
    )
}

export default Logout
