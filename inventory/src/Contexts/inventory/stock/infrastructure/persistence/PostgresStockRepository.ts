import { PostgresRepository } from '../../../../Shared/infrastructure/persistence/redis/PostgresRepository';
import { Stock } from '../../domain/Stock';
import { StockRepository } from '../../domain/StockRepository';
import { StockQuery } from '../query/StockQuery';

export class PostgresStockRepository extends PostgresRepository implements StockRepository {
  async find(): Promise<Stock[]> {
    const client = await this.connect();
    const response = await client.query(StockQuery.getProductStock);
    return response.rows.map((p: Record<string, any>) => Stock.fromPrimitive(p));
  }
}
