import { Router } from 'express';
import container from '../config/dependency-injection';
import { BaseRouter } from '../../../../Contexts/Shared/infrastructure/api/BaseRouter';
import { ControllerAdapter } from '../../../../Contexts/Shared/infrastructure/api/ControllerAdapter';

export default class SaleRoutes extends BaseRouter {
  protected BASE_PATH = '/sale';

  protected handler(router: Router): void {
    this.post({
      router,
      route: ControllerAdapter.handle(container.get('Apps.controllers.CreateSalePostController')),
      middlewares: [
      ],
      url: '/'
    });
  }
}
