import { gql } from '@apollo/client';

const GET_ALL_USERS = gql`
    query {
        getAllUsers {
        id
        firstName
        lastName
        name
        email
        isActive
        }
    }
`;

export default GET_ALL_USERS;