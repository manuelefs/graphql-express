const { PubSub } = require('graphql-subscriptions');

const pubsub = new PubSub();

module.exports = {

    Subscription: {
        userAdded: {
            subscribe: () => pubsub.asyncIterator('userAdded'),
        },
        orderUpdated: {
            subscribe: () => pubsub.asyncIterator('orderUpdated'),
        }
    },

    Query: {
        time: function (root, args) {
            return new Date().toLocaleString();
        }
    },

    Mutation: {
        addUser: function (root, args) {
            pubsub.publish('userAdded', { userAdded: { id: 1, name: 'Username' } });
            return 'user added!'
        },
        updateOrder: function (root, args) {
            pubsub.publish('orderUpdated', { orderUpdated: { ...args } });
            return 'order changed!'
        }
    }

};