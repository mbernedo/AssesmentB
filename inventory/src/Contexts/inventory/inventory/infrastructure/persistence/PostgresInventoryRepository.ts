import { PostgresRepository } from '../../../../Shared/infrastructure/persistence/redis/PostgresRepository';
import { Inventory } from '../../domain/Inventory';
import { InventoryRepository } from '../../domain/InventoryRepository';
import { inventoryQuery } from '../query/inventoryQuery';

export class PostgresInventoryRepository extends PostgresRepository implements InventoryRepository {

  async update(productId: number, quantity: number): Promise<void> {
    const client = await this.connect();
    await client.query(inventoryQuery.updateStock, [quantity, productId])
  }

  async find(productId: number): Promise<Inventory> {
    const client = await this.connect();
    const response = await client.query(inventoryQuery.getInventory, [productId])
    return response.rows[0] && Inventory.fromPrimitive(response.rows[0]);
  }
}
