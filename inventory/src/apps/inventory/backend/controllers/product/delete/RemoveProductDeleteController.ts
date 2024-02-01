import { Response } from 'express';
import { BaseController } from '../../../../../../Contexts/Shared/infrastructure/api/BaseController';
import { RemoveProduct } from '../../../../../../Contexts/inventory/product/application/delete/RemoveProduct';
import { HttpRequest } from '../../../../../../Contexts/Shared/domain/HttpRequest';
import { ApplicationError } from 'Contexts/Shared/domain/ApplicationError';

export class RemoveProductDeleteController extends BaseController {
  constructor(private readonly service: RemoveProduct) {
    super();
  }
  async handle(httpRequest: HttpRequest, httpResponse: Response): Promise<void> {
    try {
      await this.service.run(httpRequest.params.productId);
      this.notContent(httpResponse);
    } catch (error) {
      this.fail(httpResponse, error as ApplicationError);
    }
  }
}
