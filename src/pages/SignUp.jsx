import { Button, Typography, Stack } from '@mui/material'
import { styled } from '@mui/material/styles'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import signCSS from './sign.module.css'


const CustomizedButton = styled(Button) ({
    paddingLeft:'34px',
    textTransform:'none',
    fontSize: 19,
    '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none',
        color:'white',
    }
})
const SignUp = () => {
    const navigate = useNavigate();
    const changePage = (path) => {
        navigate(path)
    }
  return (
    <div className={signCSS['sign-up-body']}>
        <div className={signCSS["center"]}>
            <h1><Button onClick={()=>changePage('/')} variant='outlined'><ArrowBackIcon/></Button> Sign up</h1>
            <form action="post">
                <div className={signCSS["formPadding"]}> 
                    <div className={signCSS["txt-field"]}>
                        <input type="text" name="name" id="name-input" required/>
                        <span></span>
                        <label>Name</label>
                    </div>                   
                    <div className={signCSS["txt-field"]}>
                        <input type="text" name="username" id="user-input" required/>
                        <span></span>
                        <label>Username</label>
                    </div>
                    <div className={signCSS["txt-field"]}>
                        <input type="email" name="email" id="email-input" required/>
                        <span></span>
                        <label>Email</label>
                    </div>
                    <div className={signCSS["txt-field"]}>
                        <input type="password" name="password" id="password-input" required/>
                        <span></span>
                        <label>Password</label>
                    </div>
                    <div className={signCSS["txt-field"]}>
                        <input type="password" name="confirm-password" id="confirm-password-input" required/>
                        <span></span>
                        <label>Confirm password</label>
                    </div>
                    
                    <div className={signCSS["pass"]}>Forgot Password?</div>
                    <input type="submit" id="" value="Sign up"/>
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
                        Sign up with Google
                    </CustomizedButton>
                    <CustomizedButton variant='outlined'
                         startIcon={<img className={signCSS['customButtonImg']}
                          src='Images/7 SignInUp/facebook 1.png'
                           width={29} height={29} alt='Facebook icon'></img>}
                    >
                        Sign up with Facebook
                    </CustomizedButton>
                </Stack>
                <div className={signCSS["sign-up-link"]}>
                    Already have an account? <Link to="/sign-in">Sign in</Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp