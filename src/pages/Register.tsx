import React from 'react'
import { Auth } from '../interfaces/auth.interface'
import AuthForm from '../components/form/AuthForm'
import $axios from '../http'

const Register:React.FC = () => {
  const onsubmit = async (data:Auth) => {
    console.log("Submitting data:", data)
      try {
        const res = await $axios.post('/registration',{...data})
        console.log(res.data)
      } catch (error) {
        console.log(error)
      }
  }
 
  return (
    <div>
        <AuthForm type='register' onSubmit={onsubmit}/>
    </div>
  )
}

export default Register