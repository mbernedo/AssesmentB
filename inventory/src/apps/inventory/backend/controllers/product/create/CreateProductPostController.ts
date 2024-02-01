import { Response } from 'express';
import { BaseController } from '../../../../../../Contexts/Shared/infrastructure/api/BaseController';
import { CreateProduct } from '../../../../../../Contexts/inventory/product/application/create/CreateProduct';
import { HttpRequest } from '../../../../../../Contexts/Shared/domain/HttpRequest';
import { ApplicationError } from 'Contexts/Shared/domain/ApplicationError';

export class CreateProductPostController extends BaseController {
  constructor(private readonly service: CreateProduct) {
    super();
  }
  async handle(httpRequest: HttpRequest, httpResponse: Response): Promise<void> {
    try {
      await this.service.run({ ...httpRequest.body });
      this.created(httpResponse);
    } catch (error) {
      this.fail(httpResponse, error as ApplicationError);
    }
  }
}
