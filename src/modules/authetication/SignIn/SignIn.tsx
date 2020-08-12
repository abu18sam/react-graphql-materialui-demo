import React, { useState, useContext } from 'react';

import { Container, Card, Typography, makeStyles, CardContent, TextField, CardActions, Button } from '@material-ui/core';
import { useMutation } from '@apollo/client';
import SIGNIN from './signInQuery';
import { authContext } from '../../../contexts/AuthContext';

const useStyles = makeStyles({
    container: {
        paddingTop: "60px",
        width: '100%'
    },
    card: {
        maxWidth: '40%',
        minWidth: '300px',
        minHeight: '300px',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    signupForm: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    textFields: {
        width: "100%",
        marginTop: '10px'
    },
    submitBtn: {
        marginTop: '30px',
        width: '100%'
    },
    logoImg: {
        textAlign: 'center',
    }
});

interface formFields {
    email: string,
    password: string
}

const InitialState: formFields = {
    email: "",
    password: ""
}

const SignIn = () => {

    const classes = useStyles();

    const [formFields, setFormFields] = useState({ ...InitialState });

    const { setLoginData } = useContext(authContext);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormFields({ ...formFields, [e.target.name]: e.target.value });
    }

    const [loginUser] = useMutation(SIGNIN);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const { email, password } = formFields;
            let result = await loginUser({
                variables: {
                    email,
                    password
                }
            })
            console.log("login_result=> ", result)
            setLoginData(result.data.login);
        }
        catch (error) {
            console.log(error);
        }


    }

    return (
        <Container className={classes.container}>
            <Card className={classes.card}>
                <CardContent>
                    <div className={classes.logoImg}>
                        <img src="https://img.icons8.com/nolan/64/password.png" alt="unlock" />
                    </div>
                    <Typography variant="h4" color="textPrimary" style={{ textAlign: 'center' }}>
                        Sign in
                </Typography>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <TextField
                                id="outlined-basic"
                                label="Email *"
                                name="email"
                                itemID="login-email"
                                className={classes.textFields}
                                value={formFields.email}
                                onChange={handleInput}
                            />
                        </div>

                        <div>
                            <TextField
                                id="outlined-basic"
                                label="Password *"
                                name="password"
                                itemID="login-password"
                                className={classes.textFields}
                                value={formFields.password}
                                onChange={handleInput}
                                type="password"
                            />
                        </div>

                        <CardActions>
                            <Button variant="contained" color="primary" className={classes.submitBtn} onClick={handleSubmit}>
                                SignIn
                            </Button>
                        </CardActions>

                    </form>
                </CardContent>
            </Card>
        </Container>
    )
}

// {
//     "password":"1234",
//     "email":"alex@gmail.com"
//   }



export default SignIn;