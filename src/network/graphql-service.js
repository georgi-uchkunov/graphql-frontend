import gql from 'graphql-tag';
import graphQLClient from './graphql-client';

export default {
    async getMovies(responseFields) {
        const response = await graphQLClient.query({
            query: gql `
                query {
                    movies {
                        ${responseFields}
                    }
                }
            `
        })
        return response;
    },
    async addMovie(variables, responseFields){
        const response = await graphQLClient.mutate({
            mutation: gql `mutation($name: String!, $description: String!, $imageUrl: String!, $price: Float!){
                addMovie(name: $name, description: $description, imageUrl: $imageUrl, price: $price){
                    ${responseFields}
                }
            }`,
            variables
        })
        return response;
    },
    async deleteMovie(variables, responseFields){
        const response = await graphQLClient.mutate({
            mutation: gql `mutation($_id: String!){
                deleteMovie(_id: $_id){
                    ${responseFields}
                }
            }`,
            variables
        })
        return response;
    },
    async editUser(variables, responseFields){
        const response = await graphQLClient.mutate({
            mutation: gql `
            mutation($_id: String!, $firstName: String!, $lastName: String!, $password: String!){
               editUser(_id: $_id, firstName: $firstName, lastName: $lastName, password: $password){
                    ${responseFields}
               }
           }`,
           variables
        })
        return response;
    },

    async addUser(variables){
        const response = await graphQLClient.mutate({
            mutation: gql `mutation($firstName: String!, $lastName: String!, $email: String!, $userType: String!, $password: String!){
                addUser(firstName: $firstName, lastName: $lastName, email: $email, userType: $userType, password: $password)
            }`,
            variables
        })
        return response;
    },

    async login(variables){
        const response = await graphQLClient.mutate({
            mutation: gql `mutation($email: String!, $password: String!){
                login(email: $email, password: $password)
            }`,
            variables
        })
        return response;
    },

    async currentUser(responseFields = "_id firstName lastName email userType movies {name}"){
        const response = await graphQLClient.query({
            query: gql `
                query {
                    currentUser {
                        ${responseFields}
                    }
                }
            `
        })
        return response;
    }
}

