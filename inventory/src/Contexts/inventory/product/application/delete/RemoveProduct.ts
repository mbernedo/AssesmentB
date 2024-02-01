import { BaseUseCase } from '../../../../Shared/application/BaseUseCase';
import { ProductRepository } from '../../domain/ProductRepository';
import { FindProductById } from '../find/FindProductById';

export class RemoveProduct extends BaseUseCase<string, any> {
  constructor(private readonly repository: ProductRepository,
    private readonly findProductById: FindProductById) {
    super();
  }

  async run(productId: string): Promise<void> {
    await this.findProductById.run(productId)
    await this.repository.remove(productId)
  }
}