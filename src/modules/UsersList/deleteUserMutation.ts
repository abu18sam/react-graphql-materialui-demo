import { gql } from '@apollo/client';

const DELETE_USER = gql`
mutation deleteUser(
    $id:Float!
  ){
    deleteUser(
      id:$id      
    )
  }
`;

export default DELETE_USER;