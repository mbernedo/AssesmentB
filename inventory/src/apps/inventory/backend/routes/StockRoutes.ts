import { Router } from 'express';
import container from '../config/dependency-injection';
import { BaseRouter } from '../../../../Contexts/Shared/infrastructure/api/BaseRouter';
import { ControllerAdapter } from '../../../../Contexts/Shared/infrastructure/api/ControllerAdapter';

export default class StockRoutes extends BaseRouter {
  protected BASE_PATH = '/stock';

  protected handler(router: Router): void {
    this.get({
      router,
      route: ControllerAdapter.handle(container.get('Apps.controllers.FindStockProductGetController')),
      middlewares: [
      ],
      url: '/:productId'
    });
  }
}
