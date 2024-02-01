export interface SaleBody {
  productId: number;
  quantity: number;
  created: Date;
}

export class Sale {
  private productId: number;
  private quantity: number;
  private created: Date;

  private constructor(data: SaleBody) {
    this.productId = data.productId;
    this.quantity = data.quantity;
    this.created = data.created;
  }

  static fromPrimitive(data: any): Sale {
    return new Sale({
      ...data
    });
  }

  public static toPrimitive(data: Sale): any {
    return {
      ...data
    };
  }
}
