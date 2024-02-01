import { FindInventoryByProduct } from '../../../../../Contexts/inventory/inventory/application/find/FindInventoryByProduct';
import { UpdateStock } from '../../../../../Contexts/inventory/inventory/application/update/UpdateStock';
import { FindProductById } from '../../../../../Contexts/inventory/product/application/find/FindProductById';
import { BaseUseCase } from '../../../../Shared/application/BaseUseCase';
import { SaleRepository } from '../../domain/SaleRepository';
import { InvalidRequest } from '../../domain/errors/InvalidRequest';
import { NotEnoughInventory } from '../../domain/errors/NotEnoughInventory';

interface Request {
  productId: number;
  quantity: number;
}

export class CreateSale extends BaseUseCase<Request, any> {
  constructor(private readonly repository: SaleRepository,
    private readonly findProductById: FindProductById,
    private readonly findInventoryByProduct: FindInventoryByProduct,
    private readonly updateStock: UpdateStock) {
    super();
  }

  async run(request: Request): Promise<void> {
    await this.findProductById.run(String(request.productId))
    if (!request.productId || !request.quantity) throw new InvalidRequest()
    await this.repository.save(request)
    const inventory = await this.findInventoryByProduct.run(String(request.productId))
    if ((inventory.data.stock - request.quantity) < 0) throw new NotEnoughInventory()
    await this.updateStock.run({ productId: request.productId, quantity: (inventory.data.stock - request.quantity) })
  }
}