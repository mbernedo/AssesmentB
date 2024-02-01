import { Product } from "./Product";

export interface ProductRepository {
  findAll(): Promise<Product[]>
  find(producId: string): Promise<Product>
  save(product: Record<string, any>): Promise<void>
  update(product: Record<string, any>): Promise<void>
  remove(productId: string): Promise<void>
}
