import { UseCaseResponse } from 'Contexts/Shared/domain/UseCaseResponse';
import { BaseUseCase } from '../../../../Shared/application/BaseUseCase';
import { ProductRepository } from '../../domain/ProductRepository';

export class FindProduct extends BaseUseCase<string, Response> {
  constructor(private readonly repository: ProductRepository) {
    super();
  }

  async run(): Promise<UseCaseResponse> {
    const response = await this.repository.findAll()
    return { data: response }
  }
}
