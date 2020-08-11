import React, { useEffect, useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, makeStyles } from '@material-ui/core';

import { useLazyQuery } from '@apollo/client';

import GET_ALL_USERS from './usersListQuery';

import { User } from '../../generated/graphql';

const useStyles = makeStyles({
    container:{
        paddingTop:'60px'
    }
})

const UserList = () => {

    const classes= useStyles();

    const [usersList, setUsersList] = useState([]);

    const [getAllUsers, { data }] = useLazyQuery(GET_ALL_USERS);

    const fetchUsersList = async () => {
        try {
            getAllUsers()
        }
        catch (error) {

        }
    }

    useEffect(() => {
        if (data && data.getAllUsers) {
            // console.log("Data==> ", data);
            setUsersList(data.getAllUsers);
        }
    }, [usersList, data])


    useEffect(() => {
        fetchUsersList();
    }, [])

    return (
        <Container className={classes.container}>
            <Typography variant="h4" color="textPrimary" >Users List</Typography>
            <List>
                {
                    usersList && usersList[0] ?
                        <>
                            <ListItem >
                                <ListItemText >
                                    <span>Name </span>
                                </ListItemText>
                                <ListItemText >
                                    <span>Email </span>
                                </ListItemText>
                            </ListItem>
                            {
                                usersList.map((user: User, index) => {
                                    // console.log(user);
                                    return (
                                        <ListItem key={user.id}>
                                            <ListItemText >
                                                <span>{user.name}</span>
                                            </ListItemText>
                                            <ListItemText >
                                                <span>{user.email}</span>
                                            </ListItemText>

                                            <ListItemSecondaryAction>
                                                <IconButton>
                                                    <img src="https://img.icons8.com/dotty/50/000000/delete-forever.png" style={{ height: 25, width: 25 }} alt="delete..." />
                                                </IconButton>
                                            </ListItemSecondaryAction>

                                        </ListItem>
                                    )
                                })
                            }

                        </>
                        : null
                }
            </List>
        </Container>
    )
};

export default UserList;