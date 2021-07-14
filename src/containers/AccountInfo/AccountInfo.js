import { AccInfo, Rounded, UserInfo} from './useStyles'
import { useAuth } from '../../services/context/AuthContext'
import Helmet from 'react-helmet'

const AccountInfo = () => {
    const { currentUser } = useAuth()
    console.log(currentUser);
    const nameHandler= (arr)=>{
        let name =""
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== "@") {
                name += arr[i]
            } else{
                break
            }
        }
        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
        
        return capitalizeFirstLetter(name)
    }
    return (
        <AccInfo>
            <Helmet>
                <title>User account | { " " + nameHandler(currentUser.email.split(""))}</title>
            </Helmet>
            <Rounded>
                {currentUser && currentUser.email.split("")[0].toUpperCase()}
            </Rounded>
            <UserInfo>
                <li>Name: <b>{nameHandler(currentUser.email.split(""))}</b></li>
                <li>Email: <b>{currentUser && currentUser.email}</b></li>
                <li>Creation date: <b>{currentUser && currentUser.metadata.creationTime}</b></li>
            </UserInfo>
        </AccInfo>
    )
}

export default AccountInfo
