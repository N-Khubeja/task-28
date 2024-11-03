import React, { FormEvent, useState } from 'react'
import { Auth } from '../../interfaces/auth.interface'
import { Button, TextField, Typography } from '@mui/material'

interface AuthFormProps{
    type:string
    onSubmit:(data:Auth) => void
}

const AuthForm:React.FC<AuthFormProps> = ({type,onSubmit}) => {
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')

    const handle = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit({email,password})
        setemail('')
        setpassword('')
    }

  return (
    <form onSubmit={handle} style={{width:'500px',margin:'50px auto',display:'flex',flexDirection:'column'}}>
        <Typography>{type === 'login' ? 'login' : 'register'}</Typography>
        <TextField 
            style={{marginTop:'20px',marginBottom:'20px'}}
            value={email}
            fullWidth
            required
            variant='outlined'
            type='mail'
            label='email'
            onChange={(e) => setemail(e.target.value)}
        />

        <TextField 
            value={password}
            fullWidth
            required
            variant='outlined'
            type='password'
            label='password'
            onChange={(e) => setpassword(e.target.value)}
        />

        <Button type='submit'>{type === 'login' ? 'login' : 'register'}</Button>
    </form>
  )
}

export default AuthForm