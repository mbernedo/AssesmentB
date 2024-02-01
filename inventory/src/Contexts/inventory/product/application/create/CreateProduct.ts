import { BaseUseCase } from '../../../../Shared/application/BaseUseCase';
import { ProductRepository } from '../../domain/ProductRepository';
import { InvalidRequest } from '../../domain/errors/InvalidRequest';

interface Request {
  productName: string;
  productCode: string;
}

export class CreateProduct extends BaseUseCase<Request, any> {
  constructor(private readonly repository: ProductRepository) {
    super();
  }

  async run(request: Request): Promise<void> {
    if (!request.productCode || !request.productName) throw new InvalidRequest()
    await this.repository.save(request)
  }
}