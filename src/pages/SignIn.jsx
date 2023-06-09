import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import {styled} from '@mui/material/styles'
import {  Link, useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import signCSS from './sign.module.css'

const CustomizedButton = styled(Button) ({
    // display:'flex',
    // flexDirection:'column',
    paddingLeft:'40px',
    textTransform:'none',
    fontSize: 19,
    '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none',
        color:'white',
    },
})

const SignIn = () => {
    // const navigate = useNavigate();
    // function changePage() {
    //     navigate.pathname = '/sign-up'
    // 
    const navigate = useNavigate();
    const changePage = (path) => {
        navigate(path)
    }
  return (
    <div className={signCSS['sign-in-body']}>
        <div className={signCSS["center"]}>
           <h1><Button variant='outlined' onClick={()=> changePage('/')}><ArrowBackIcon/></Button> Sign in</h1>
            <form action="post">
                <div className={signCSS["formPadding"]}>                    
                    <div className={signCSS["txt-field"]}>
                        <input type="text" name="username" id="user-input" required/>
                        <span></span>
                        <label>Username</label>
                    </div>
                    <div className={signCSS["txt-field"]}>
                        <input type="password" name="password" id="password-input" required/>
                        <span></span>
                        <label>Password</label>
                    </div>
                    
                    <div className={signCSS["pass"]}>Forgot Password?</div>
                    <input type="submit" id="" value="Sign in"/>
                    <Typography variant='h2' 
                        sx={{color:'#2691d9', fontSize:'29px', margin:'40px auto 52px auto', textAlign:'center'}}>
                            OR
                    </Typography>
                </div>
                <Stack direction={'row'} sx={{justifyContent:'space-around'}}>                    
                    <CustomizedButton variant='outlined'
                         startIcon={<img className={signCSS['customButtonImg']}
                          src='Images/7 SignInUp/google 1.png'
                           width={29} height={29} alt='Google icon'></img>}
                    >
                        Sign in with Google
                    </CustomizedButton>
                    <CustomizedButton variant='outlined'
                         startIcon={<img className={signCSS['customButtonImg']}
                          src='Images/7 SignInUp/facebook 1.png'
                           width={29} height={29} alt='Facebook icon'></img>}
                    >
                        Sign in with Facebook
                    </CustomizedButton>
                </Stack>
                <div className={signCSS["sign-up-link"]}>
                    Not a member? <Link to={'/sign-up'} variant='body2'
                                    >Sign up
                                </Link>{/**Link bilen edil shuny berip bolyaar */}
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignIn