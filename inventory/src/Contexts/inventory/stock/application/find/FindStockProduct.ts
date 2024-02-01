import { UseCaseResponse } from 'Contexts/Shared/domain/UseCaseResponse';
import { BaseUseCase } from '../../../../Shared/application/BaseUseCase';
import { StockRepository } from '../../domain/StockRepository';

export class FindStockProduct extends BaseUseCase<string, Response> {
  constructor(private readonly repository: StockRepository) {
    super();
  }

  async run(productId: string): Promise<UseCaseResponse> {
    const response = await this.repository.find(productId)
    return { data: response }
  }
}
