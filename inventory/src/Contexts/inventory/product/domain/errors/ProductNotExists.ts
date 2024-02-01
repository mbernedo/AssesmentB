import { ApplicationError } from '../../../../Shared/domain/ApplicationError';

export class ProductNotExists extends ApplicationError {
  constructor() {
    super('Product does not exists', 'NOT_FOUND');
  }
}
