import { ApplicationError } from '../../../../Shared/domain/ApplicationError';

export class NotEnoughInventory extends ApplicationError {
  constructor() {
    super('Not enough inventory to sale', 'INVALID_REQUEST');
  }
}
