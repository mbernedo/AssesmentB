import { Response } from 'express';
import { BaseController } from '../../../../../../Contexts/Shared/infrastructure/api/BaseController';
import { FindProductById } from '../../../../../../Contexts/inventory/product/application/find/FindProductById';
import { HttpRequest } from '../../../../../../Contexts/Shared/domain/HttpRequest';
import { ApplicationError } from 'Contexts/Shared/domain/ApplicationError';

export class FindProductByIdGetController extends BaseController {
  constructor(private readonly service: FindProductById) {
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
