import { Response } from 'express';
import { BaseController } from '../../../../../../Contexts/Shared/infrastructure/api/BaseController';
import { FindStockProduct } from '../../../../../../Contexts/inventory/stock/application/find/FindStockProduct';
import { HttpRequest } from '../../../../../../Contexts/Shared/domain/HttpRequest';
import { ApplicationError } from 'Contexts/Shared/domain/ApplicationError';

export class FindStockProductGetController extends BaseController {
  constructor(private readonly service: FindStockProduct) {
    super();
  }
  async handle(httpRequest: HttpRequest, httpResponse: Response): Promise<void> {
    try {
      const response = await this.service.run(httpRequest.params.productId);
      this.ok(httpResponse, response);
    } catch (error) {
      this.fail(httpResponse, error as ApplicationError);
    }
  }
}
