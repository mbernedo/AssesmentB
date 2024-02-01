export interface InventoryBody {
  productId: number;
  threshold: number;
  stock: number;
  updated: Date;
}

export class Inventory {
  private productId: number;
  private threshold: number;
  private stock: number;
  private updated: Date;

  private constructor(data: InventoryBody) {
    this.productId = data.productId;
    this.threshold = data.threshold;
    this.stock = data.stock;
    this.updated = data.updated;
  }

  static fromPrimitive(data: any): Inventory {
    return new Inventory({
      ...data
    });
  }

  public static toPrimitive(data: Inventory): any {
    return {
      ...data
    };
  }
}
