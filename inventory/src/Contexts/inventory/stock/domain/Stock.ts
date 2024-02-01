export interface StockBody {
  monthNumber: number;
  productCode: string;
  productName: string;
}

export class Stock {
  private monthNumber: number;
  private productCode: string;
  private productName: string;

  private constructor(data: StockBody) {
    this.monthNumber = data.monthNumber;
    this.productCode = data.productCode;
    this.productName = data.productName;
  }

  static fromPrimitive(data: any): Stock {
    return new Stock({
      ...data
    });
  }

  public static toPrimitive(data: Stock): any {
    return {
      ...data
    };
  }
}
