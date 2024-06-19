import avatar from '../assets/avatar.jpg';
import'../assets/UserCard.css'

const UserCad = () => {
  return (
    <div className='userCardContainer'>
        <div className="userAvatr">
            <img src={avatar} alt="avatar" className="avatarImage"/>
        </div>
        <div className="userInformation">
            <p className="userName">User Name <span>first user</span></p>
            <p className="userId">User ID <span>2220222</span></p>
        </div>
    </div>
  )
}

export default UserCad