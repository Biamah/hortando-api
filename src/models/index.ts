import { ConnectionOptions, createConnection } from 'typeorm'
import 'reflect-metadata'

const connect = async () => { 
    const { NODE_ENV = null, DATABASE_URL = '' } = process.env
    const environment = NODE_ENV || 'development'

    if (environment.includes('development')) {
        await createConnection()
        return true
    }

    const options: ConnectionOptions = {
        type: 'postgres',
        name: 'default',
        url: DATABASE_URL,
        ssl: {
            rejectUnauthorized: true
        },
        synchronize: true,
        entities: ['**/models/**/*{.ts,.js}']
    }

    await createConnection(options)
}

connect()