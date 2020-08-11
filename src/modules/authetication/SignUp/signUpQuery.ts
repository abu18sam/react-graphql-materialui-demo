import { gql } from "@apollo/client";
// import { RegisterInput, Register_UserMutationVariables } from '../../../generated/graphql';

const REGISTER_USER = gql`
    mutation ($data: RegisterInput!){
        registerUser(data:$data){
        id
        firstName
        lastName
        email
        }
    }
`;

export default REGISTER_USER;