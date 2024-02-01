import { BaseUseCase } from '../../../../Shared/application/BaseUseCase';
import { ProductRepository } from '../../domain/ProductRepository';
import { InvalidRequest } from '../../domain/errors/InvalidRequest';
import { FindProductById } from '../find/FindProductById';

interface Request {
  productId: string;
  productName: string;
}

export class UpdateProductName extends BaseUseCase<Request, any> {
  constructor(private readonly repository: ProductRepository,
    private readonly findProductById: FindProductById) {
    super();
  }

  async run(request: Request): Promise<void> {
    await this.findProductById.run(request.productId)
    if (!request.productName) throw new InvalidRequest()
    await this.repository.update(request)
  }
}