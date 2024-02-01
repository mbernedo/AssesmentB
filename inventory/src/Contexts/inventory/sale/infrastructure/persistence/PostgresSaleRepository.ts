import { PostgresRepository } from '../../../../Shared/infrastructure/persistence/redis/PostgresRepository';
import { SaleRepository } from '../../domain/SaleRepository';
import { SaleQuery } from '../query/SaleQuery';

export class PostgresSaleRepository extends PostgresRepository implements SaleRepository {

  async save(product: Record<string, any>): Promise<void> {
    const client = await this.connect();
    await client.query(SaleQuery.createSale, [product.productId, product.quantity])
  }
}
