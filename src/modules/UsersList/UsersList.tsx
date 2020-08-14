import React, { useEffect, useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, makeStyles, TextField, Button } from '@material-ui/core';

import { useLazyQuery, useMutation } from '@apollo/client';

import GET_ALL_USERS from './usersListQuery';
import UPDATE_USER from './updateUserMutation';

import { User } from '../../generated/graphql';
import DELETE_USER from './deleteUserMutation';

const useStyles = makeStyles({
    container: {
        paddingTop: '60px'
    },
    deleteIcon: {
        height: '25px',
        width: '25px',
        marginLeft: '20px'
    },
    textFields: {
        width: '150px'
    }
});

const UsersList: React.FC = (props: any) => {

    const classes = useStyles();
    const [usersList, setUsersList]: [User[], any] = useState([]);
    const [getAllUsers, { data, refetch: refetchUsersList }] = useLazyQuery(GET_ALL_USERS);
    const [updateUser] = useMutation(UPDATE_USER);
    const [deleteUser] = useMutation(DELETE_USER);

    const fetchUsersList = React.useCallback(() => {
        try {
            let data = getAllUsers();
            console.log('data==>> ', data);
        }
        catch (error) {

        }
    }, []);

    useEffect(() => {
        if (data && data.getAllUsers) {
            setUsersList(data.getAllUsers);
        }
    }, [data]);

    useEffect(() => {
        fetchUsersList();
    }, [fetchUsersList]);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {

        let list: any = usersList.slice();
        let obj = { ...usersList[index], [e.target.name]: e.target.value };
        list[index] = obj;
        setUsersList(list);

    }

    const handleUpdate = async (index: number) => {

        updateUser({
            variables: {
                "id": Number(usersList[index].id),
                "firstName": usersList[index].firstName,
                "lastName": usersList[index].lastName,
                "email": usersList[index].email
            },
        })
            .then(() => {                
                if (refetchUsersList) {
                    refetchUsersList();
                }
            })

    }

    function handleDelete(index: number) {
        alert("number: " + index)
        deleteUser({
            variables: {
                "id": Number(usersList[index].id)
            }
        })
            .then(() => {
                if (refetchUsersList) {
                    refetchUsersList();
                }
            })
    }

    return (
        <Container className={classes.container}>
            <Typography variant="h4" color="textPrimary" >Users List</Typography>
            <List>
                <ListItem >
                    <ListItemText >
                        <span>First Name </span>
                    </ListItemText>
                    <ListItemText >
                        <span>Last Name </span>
                    </ListItemText>
                    <ListItemText >
                        <span>Email </span>
                    </ListItemText>
                </ListItem>
                {
                    usersList && usersList[0] ?
                        <>
                            {
                                usersList.map((user: User, index: number) => {
                                    // console.log(user);
                                    return (
                                        <ListItem key={user.id}>
                                            <ListItemText >
                                                <TextField
                                                    id="outlined-basic"
                                                    label="First Name"
                                                    name="firstName"
                                                    className={classes.textFields}
                                                    value={user.firstName}
                                                    onChange={(e) => handleInput(e, index)}
                                                />
                                            </ListItemText>
                                            <ListItemText >
                                                <TextField
                                                    id="outlined-basic"
                                                    label="Last Name"
                                                    name="lastName"
                                                    className={classes.textFields}
                                                    value={user.lastName}
                                                    onChange={(e) => handleInput(e, index)}
                                                />
                                            </ListItemText>
                                            <ListItemText >
                                                <TextField
                                                    id="outlined-basic"
                                                    label="Email *"
                                                    name="email"
                                                    // itemID=""
                                                    className={classes.textFields}
                                                    value={user.email}
                                                    onChange={(e) => handleInput(e, index)}
                                                />
                                            </ListItemText>

                                            <ListItemSecondaryAction>
                                                <Button color="primary" variant="contained" onClick={() => handleUpdate(index)}>Update</Button>
                                                <IconButton>
                                                    {
                                                        user.isActive ?
                                                            <img className={classes.deleteIcon}
                                                                src="https://img.icons8.com/plasticine/100/000000/delete-sign.png" alt="block" />
                                                            : <img className={classes.deleteIcon}
                                                                src="https://img.icons8.com/carbon-copy/100/000000/delete-sign.png" alt="unblock" />
                                                    }
                                                    {/* <img src="https://img.icons8.com/dotty/50/000000/delete-forever.png" style={{ height: 25, width: 25 }} alt="delete..." /> */}
                                                </IconButton>
                                                <IconButton>
                                                    <img src="https://img.icons8.com/material/24/000000/trash--v1.png" alt="delete" onClick={() => handleDelete(index)} />
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

export default UsersList;