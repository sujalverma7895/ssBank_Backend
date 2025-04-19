require('dotenv').config();


module.exports = {

    SERVER: {
        HOSTNAME: process.env.HOST || `localhost`,
        PORT: process.env.PORT || 3000
    },
    DATABASE: {
        MONGO_CONNECTION_URL: process.env.MONGO_URL || `mongodb+srv://sujalsoni7895:vermasujal8810@divine.sc0yg.mongodb.net/Banking_Application`,
        DB_NAME : process.env.DB_NAME || `Nodejs`,
        DB_HOST : process.env.DB_HOST || `localhost`,

    },

    StatusCode: {
        SUCCCESS: 200,
        NOT_FOUND:404,
        BAD_REQUEST:400,
        UNAUTHORIZED:401,
        PAYMENT_REQUIRED:402,
        NOT_ACCEPTABLE:406,
        INTERNAL_SERVER_ERROR :500
    }

}