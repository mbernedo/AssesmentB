import { UseCaseResponse } from 'Contexts/Shared/domain/UseCaseResponse';
import { BaseUseCase } from '../../../../Shared/application/BaseUseCase';
import { ProductRepository } from '../../domain/ProductRepository';
import { ProductNotExists } from '../../domain/errors/ProductNotExists';

export class FindProductById extends BaseUseCase<string, Response> {
  constructor(private readonly repository: ProductRepository) {
    super();
  }

  async run(productId: string): Promise<UseCaseResponse> {
    const response = await this.repository.find(productId)
    if(!response) throw new ProductNotExists();
    return { data: response }
  }
}
