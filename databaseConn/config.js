import mongodb from 'mongoose'


// connection to database

const connect = async () => {
    try {
        const conn = await mongodb.connect(process.env.MONGODB_URI)
        console.log(`database successfully connected ${conn.connection.host}`)
    } catch (error) {
        console.log(`ERROR : ${error.message}`)
        // process.exit(1)
    }
}


export {connect}