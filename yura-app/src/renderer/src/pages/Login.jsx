import '../assets/Login.css'
import avatar from '../assets/avatar.jpg'

const Login = () => {
  return (
    <div className='login_container'>
      <h1>LOGIN</h1>
      <div className='formulair'>
        <form >
          <div className="imgcontainer">
            <img src={avatar} alt="Avatar" className="avatar"/>
          </div>
          <div className="containerr">
            {/* <label><b>Username</b></label> */}
            <input type="text" placeholder="Enter Username"/>

            {/* <label><b>Password</b></label> */}
            <input type="password" placeholder="Enter Password"/>

            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login