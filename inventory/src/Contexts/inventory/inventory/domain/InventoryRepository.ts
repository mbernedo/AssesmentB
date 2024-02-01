import { Inventory } from "./Inventory"

export interface InventoryRepository {
  update(productId: number, quantity: number): Promise<void>
  find(productId: number): Promise<Inventory>
}
