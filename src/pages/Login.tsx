import React from 'react'
import AuthForm from '../components/form/AuthForm'
import { Auth } from '../interfaces/auth.interface'
import $axios from '../http'

const Login:React.FC = () => {
  const onsubmit = (data:Auth) => {
    $axios.post('/login',{...data})
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err))
  }

  return (
    <div>
        <AuthForm type='login' onSubmit={onsubmit}/>
    </div>
  )
}

export default Login