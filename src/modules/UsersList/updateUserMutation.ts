import { gql } from '@apollo/client';

const UPDATE_USER = gql`
mutation UpdateUser(
    $id:Float!
    $lastName:String!
    $firstName:String!
    $email:String!
  ){
    updateUser(
      id:$id
      lastName:$lastName
      firstName:$firstName
      email:$email
    )
  }
`;

export default UPDATE_USER;