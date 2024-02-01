import { Client } from 'pg'

export abstract class PostgresRepository {

  protected async connect(): Promise<any> {
    const client = new Client({
      user: 'pgadmin',
      host: '127.0.0.1',
      database: 'test_db',
      password: 'pgadmin',
      port: 5432
    })
    try {
      await client.connect();
    } catch (error) {
      console.log("Postgres client error", error)
    }
    return client;
  }
}
