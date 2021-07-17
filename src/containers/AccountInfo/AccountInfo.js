import { AccInfo, Rounded, UserInfo} from './useStyles'
import { useAuth } from '../../services/context/AuthContext'
import Helmet from 'react-helmet'

const AccountInfo = ({name}) => {
    const { currentUser } = useAuth()
    return (
        <AccInfo>
            <Helmet>
                {/* <title>User account | { " " + name}</title> */}
            </Helmet>
            <Rounded>
                {currentUser && currentUser.email.split("")[0].toUpperCase()}
            </Rounded>
            <UserInfo>
                <li>Name: <b>{name}</b></li>
                <li>Email: <b>{currentUser && currentUser.email}</b></li>
                <li>Creation date: <b>{currentUser && currentUser.metadata.creationTime}</b></li>
            </UserInfo>
        </AccInfo>
    )
}

export default AccountInfo
