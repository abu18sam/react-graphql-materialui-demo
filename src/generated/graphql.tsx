import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
  getAllUsers?: Maybe<Array<User>>;
  me?: Maybe<User>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  isActive: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  registerUser: User;
  deleteUser: Scalars['Boolean'];
  updateUser: Scalars['Boolean'];
  login?: Maybe<User>;
};


export type MutationRegisterUserArgs = {
  data: RegisterInput;
};


export type MutationDeleteUserArgs = {
  id: Scalars['Float'];
};


export type MutationUpdateUserArgs = {
  lastName?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['Float'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};

export type RegisterInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Register_UserMutationVariables = Exact<{
  data: RegisterInput;
}>;


export type Register_UserMutation = (
  { __typename?: 'Mutation' }
  & { registerUser: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName' | 'email'>
  ) }
);


export const Register_UserDocument = gql`
    mutation Register_User($data: RegisterInput!) {
  registerUser(data: $data) {
    id
    firstName
    lastName
    email
  }
}
    `;
export type Register_UserMutationFn = ApolloReactCommon.MutationFunction<Register_UserMutation, Register_UserMutationVariables>;
export type Register_UserComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<Register_UserMutation, Register_UserMutationVariables>, 'mutation'>;

    export const Register_UserComponent = (props: Register_UserComponentProps) => (
      <ApolloReactComponents.Mutation<Register_UserMutation, Register_UserMutationVariables> mutation={Register_UserDocument} {...props} />
    );
    
export type Register_UserProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<Register_UserMutation, Register_UserMutationVariables>
    } & TChildProps;
export function withRegister_User<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  Register_UserMutation,
  Register_UserMutationVariables,
  Register_UserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, Register_UserMutation, Register_UserMutationVariables, Register_UserProps<TChildProps, TDataName>>(Register_UserDocument, {
      alias: 'registerUser',
      ...operationOptions
    });
};
export type Register_UserMutationResult = ApolloReactCommon.MutationResult<Register_UserMutation>;
export type Register_UserMutationOptions = ApolloReactCommon.BaseMutationOptions<Register_UserMutation, Register_UserMutationVariables>;