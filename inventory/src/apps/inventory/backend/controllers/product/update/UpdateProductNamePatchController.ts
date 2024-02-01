import { Response } from 'express';
import { BaseController } from '../../../../../../Contexts/Shared/infrastructure/api/BaseController';
import { UpdateProductName } from '../../../../../../Contexts/inventory/product/application/update/UpdateProductName';
import { HttpRequest } from '../../../../../../Contexts/Shared/domain/HttpRequest';
import { ApplicationError } from 'Contexts/Shared/domain/ApplicationError';

export class UpdateProductNamePatchController extends BaseController {
  constructor(private readonly service: UpdateProductName) {
    super();
  }
  async handle(httpRequest: HttpRequest, httpResponse: Response): Promise<void> {
    try {
      httpRequest.body.productId = httpRequest.params.productId
      await this.service.run({ ...httpRequest.body });
      this.notContent(httpResponse);
    } catch (error) {
      this.fail(httpResponse, error as ApplicationError);
    }
  }
}
