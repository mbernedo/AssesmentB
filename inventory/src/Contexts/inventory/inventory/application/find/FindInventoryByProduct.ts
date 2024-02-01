import { UseCaseResponse } from 'Contexts/Shared/domain/UseCaseResponse';
import { BaseUseCase } from '../../../../Shared/application/BaseUseCase';
import { InventoryRepository } from '../../domain/InventoryRepository';
import { InventoryNotExists } from '../../domain/errors/InventoryNotExists';

export class FindInventoryByProduct extends BaseUseCase<string, Response> {
  constructor(private readonly repository: InventoryRepository) {
    super();
  }

  async run(productId: string): Promise<UseCaseResponse> {
    const response = await this.repository.find(Number(productId))
    if (!response) throw new InventoryNotExists();
    return { data: response }
  }
}
