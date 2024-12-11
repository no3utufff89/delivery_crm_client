const Endpoints = {
    AUTH: {
        LOGIN: '/login',
        REFRESH: '/refresh',
        LOGOUT: '/logout',
        PROFILE: '/profile'

    },
    USERS: {
        ALL: '/users',
        CREATE: '/users',
        UPDATE: '/users/:id',
        DELETE: '/users/:id',
        GET_BY_ID: '/users/:id'
    },
    ORDERS: {
        ALL: '/orders',
        CREATE: '/orders',
        UPDATE: '/orders/:id',
        DELETE: '/orders/:id',
        GET_BY_ID: '/orders/:id',
        GET_BY_USER: '/orders/user/:id'
    },
    PRODUCTS: {
        ALL: '/products',
        CREATE: '/products',
        UPDATE: '/products/:id',
        DELETE: '/products/:id',
        GET_BY_ID: '/products/:id',
        GET_BY_CATEGORY: '/products/category/:id'
    },
    CATEGORIES: {
        ALL: '/categories',
        CREATE: '/categories',
        UPDATE: '/categories/:id',
        DELETE: '/categories/:id',
        GET_BY_ID: '/categories/:id'
    }
}

export default Endpoints;