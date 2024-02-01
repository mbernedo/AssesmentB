import { ApplicationError } from '../../../../Shared/domain/ApplicationError';

export class InventoryNotExists extends ApplicationError {
  constructor() {
    super('Inventory does not exists', 'NOT_FOUND');
  }
}
