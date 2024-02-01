import { Response } from 'express';
import { BaseController } from '../../../../../../Contexts/Shared/infrastructure/api/BaseController';
import { FindProduct } from '../../../../../../Contexts/inventory/product/application/find/FindProduct';
import { HttpRequest } from '../../../../../../Contexts/Shared/domain/HttpRequest';
import { ApplicationError } from 'Contexts/Shared/domain/ApplicationError';

export class FindProductGetController extends BaseController {
  constructor(private readonly service: FindProduct) {
    super();
  }
  async handle(httpRequest: HttpRequest, httpResponse: Response): Promise<void> {
    try {
      const response = await this.service.run();
      this.ok(httpResponse, response);
    } catch (error) {
      this.fail(httpResponse, error as ApplicationError);
    }
  }
}
