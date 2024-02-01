import { PostgresRepository } from '../../../../Shared/infrastructure/persistence/redis/PostgresRepository';
import { Product } from '../../domain/Product';
import { ProductRepository } from '../../domain/ProductRepository';
import { ProductQuery } from '../query/ProductQuery';

export class PostgresProductRepository extends PostgresRepository implements ProductRepository {
  async findAll(): Promise<Product[]> {
    const client = await this.connect();
    const response = await client.query(ProductQuery.listActiveProducts);
    return response.rows.map((p: Record<string, any>) => Product.fromPrimitive(p));
  }

  async find(productId: string): Promise<Product> {
    const client = await this.connect();
    const response = await client.query(ProductQuery.getProductDetail, [productId])
    return response.rows[0] && Product.fromPrimitive(response.rows[0]);
  }

  async save(product: Record<string, any>): Promise<void> {
    const client = await this.connect();
    await client.query(ProductQuery.createProduct, [product.productCode, product.productName])
  }

  async update(product: Record<string, any>): Promise<void> {
    const client = await this.connect();
    await client.query(ProductQuery.updateProductName, [product.productName, product.productId])
  }

  async remove(productId: string): Promise<void> {
    const client = await this.connect();
    await client.query(ProductQuery.removeProduct, [productId])
  }
}
