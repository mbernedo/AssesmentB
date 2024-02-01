import { FindProductById } from '../../../product/application/find/FindProductById';
import { BaseUseCase } from '../../../../Shared/application/BaseUseCase';
import { InventoryRepository } from '../../domain/InventoryRepository';
import { InvalidRequest } from '../../domain/errors/InvalidRequest';

interface Request {
  productId: number;
  quantity: number;
}

export class UpdateStock extends BaseUseCase<Request, any> {
  constructor(private readonly repository: InventoryRepository) {
    super();
  }

  async run(request: Request): Promise<void> {
    if (!request.productId || !request.quantity) throw new InvalidRequest()
    await this.repository.update(request.productId, request.quantity);
  }
}