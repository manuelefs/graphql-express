const { gql } = require('apollo-server-express');

module.exports = gql`

    type Query {
        time: String
    }

    type Mutation {
        addUser: String
        updateOrder(id: Int, status: String): String
    }

    type Subscription {
        userAdded: User
        orderUpdated: Order
    }

    type User {
        id: Int
        name: String
    }

    type Order {
        id: Int,
        status: String
    }

`;

