import React, { useState } from 'react'
import { Grid, Container, Box, TextField, Button} from '@mui/material'
//import { styled } from '@mui/system';
import fotoLogin from '../../static/images/login.png'

import '../../static/css/sesion.css'

export default function Login2(){
    const [body, setBody] = useState({ email: "", password: "" })

    /*const handleChange = e => {
		setBody({
			...body,
			[e.target.name]: e.target.value
		})
	}*/


    const handleChange = (event) => {
        const { name, value } = event.target;
        setBody((body) => {
            return {
            ...body,
            [name]: value,
            };
        });
    };
    
	const onSubmit = () => {
		console.log(body)
	}



    return(
        <>
        <Container maxWidth="sm" className='back-login' >
            <Box sx={{ bgcolor: '#cfe8fc', height: '60vh', borderRadius: 3, my: "8rem"}}>
                <form>
                    <Grid container spacing={2} sx={{ justifyContent:'center' }}>
                        <Grid item xs={12} sx={{ mx:27 }}>
                            <h2>CMED</h2>
                        </Grid>
                        <Grid item xs={12} sx={{ mx:27 }}>
                            <img style={{width: 100, height: 100}} src={fotoLogin}></img>
                        </Grid>
                        <Grid item xs={9}>
                            <TextField name="email" label="Email" value={body.email} onChange={handleChange} type="email" sx={{ mx:11, bgcolor: '#fff', borderRadius: 2}} />
                        </Grid>
                        <Grid item xs={9}>
                            <TextField name="password" label="Password" value={body.password} onChange={handleChange} type="password" sx={{ mx:11, bgcolor: '#fff', borderRadius: 2}} />
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="contained" size="medium"
							onClick={() => onSubmit()}>Iniciar Sesión</Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Container>
        </>
    )
}