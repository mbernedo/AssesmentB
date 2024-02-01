export interface SaleRepository {
  save(product: Record<string, any>): Promise<void>
}
