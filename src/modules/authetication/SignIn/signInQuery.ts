import { gql } from '@apollo/client';

const SIGNIN = gql`
mutation Login (
    $password:String!
    $email:String!
  ){
    login(
      password:$password 
      email:$email
    ) {
      id
      firstName
      lastName
      email
      name
      isActive
    }
  }
`;

export default SIGNIN;
