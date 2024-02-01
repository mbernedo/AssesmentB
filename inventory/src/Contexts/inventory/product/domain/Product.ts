export interface ProductBody {
  id: number;
  productCode: string;
  productName: string;
  active: boolean;
  created: Date;
}

export class Product {
  private id: number;
  private productCode: string;
  private productName: string;
  private active: boolean;
  private created: Date;

  private constructor(data: ProductBody) {
    this.id = data.id;
    this.productCode = data.productCode;
    this.productName = data.productName;
    this.active = data.active;
    this.created = data.created;
  }

  static fromPrimitive(data: any): Product {
    return new Product({
      ...data
    });
  }

  public static toPrimitive(data: Product): any {
    return {
      ...data
    };
  }
}
