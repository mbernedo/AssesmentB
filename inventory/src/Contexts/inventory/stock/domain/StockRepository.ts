import { Stock } from "./Stock";

export interface StockRepository {
  find(productId: string): Promise<Stock[]>
}
