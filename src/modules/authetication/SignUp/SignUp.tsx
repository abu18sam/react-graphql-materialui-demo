import React, { useState } from 'react';

import { TextField, Button, Card, CardContent, Typography, makeStyles, Container } from '@material-ui/core';

import { useMutation } from "@apollo/client";
import REGISTER_USER from './signUpQuery';

const useStyles = makeStyles({
    container: {
        width:"100%",        
        paddingTop: '60px',        
    },
    card: {
        maxWidth: "40%",
        minWidth:"300px",
        minHeight: "400px",
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
    logoImg:{
        textAlign:'center',
    }
})

interface formFields {
    email: string,
    password: string,
    firstName: string,
    lastName: string
}

const InitialState: formFields = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
}

const SignUp: React.FC = () => {

    const classes = useStyles();

    const [formField, setFormField] = useState({ ...InitialState });

    const handleFormInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormField({ ...formField, [e.target.name]: e.target.value });
    }

    const [registerUser] = useMutation(REGISTER_USER);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const { email, password, firstName, lastName } = formField;

            let result = await registerUser({
                variables: {
                    "data": {
                        "firstName": firstName,
                        "lastName": lastName,
                        "email": email,
                        "password": password,
                    }
                }
            })
            console.log("SignUp_response=>", result);
        }
        catch (error) {
            console.log('Register_user_catch=>', error);
        }
    }

    return (
        <Container className={classes.container}>            
            <Card className={classes.card} >
                <CardContent >
                    <div className={classes.logoImg}>
                        <img src="https://img.icons8.com/dusk/64/000000/safe-in.png" alt="store safe"/>
                    </div>
                    <Typography variant="h4" color="textPrimary" style={{ textAlign: 'center' }}>Sign up</Typography>
                    <form onSubmit={handleSubmit} className={classes.signupForm}>
                        <div >
                            <TextField
                                id="outlined-basic"
                                // placeholder="FirstName"
                                label="First Name *"
                                name="firstName"
                                className={classes.textFields}
                                value={formField.firstName}
                                onChange={handleFormInput}
                            />
                        </div>

                        <div>
                            <TextField
                                id="outlined-basic"
                                // placeholder="LastName"
                                label="Last Name *"
                                name="lastName"
                                className={classes.textFields}
                                value={formField.lastName}
                                onChange={handleFormInput}
                            />
                        </div>

                        <div>
                            <TextField
                                id="outlined-basic"
                                // placeholder="Email"
                                label="Email *"
                                name="email"
                                className={classes.textFields}
                                value={formField.email}
                                onChange={handleFormInput}
                            />
                        </div>

                        <div>
                            <TextField
                                id="outlined-basic"
                                // placeholder="Password"
                                label="Password *"
                                name="password"
                                className={classes.textFields}
                                value={formField.password}
                                onChange={handleFormInput}
                            />
                        </div>
                        {/* <CardActions> */}
                            <Button variant="contained" color="primary" className={classes.submitBtn} onClick={handleSubmit}>
                                SignUp
                            </Button>
                        {/* </CardActions> */}
                    </form>
                </CardContent>
            </Card>            
        </Container>
    )
}

export default SignUp;