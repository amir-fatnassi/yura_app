import { useState } from 'react'
import '../assets/Login.css'
import avatar from '../assets/avatar.jpg'

const Login = ({loded, setLoded}) => {
  console.log(loded)
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const handleName = (e) => {
    setName(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)

  }
  const handleSub = () => {
    if (!name || !password) return
    setLoded(true)
  }
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
            <input type="text" placeholder="Enter Username" onChange={handleName}/>

            {/* <label><b>Password</b></label> */}
            <input type="password" placeholder="Enter Password" onChange={handlePassword}/>

            <button type="submit" onClick={handleSub}>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login