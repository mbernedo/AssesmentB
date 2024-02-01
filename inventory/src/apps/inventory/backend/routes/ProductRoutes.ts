import { Router } from 'express';
import container from '../config/dependency-injection';
import { BaseRouter } from '../../../../Contexts/Shared/infrastructure/api/BaseRouter';
import { ControllerAdapter } from '../../../../Contexts/Shared/infrastructure/api/ControllerAdapter';

export default class ProductRoutes extends BaseRouter {
  protected BASE_PATH = '/product';

  protected handler(router: Router): void {
    this.get({
      router,
      route: ControllerAdapter.handle(container.get('Apps.controllers.FindProductGetController')),
      middlewares: [
      ],
      url: '/'
    });

    this.get({
      router,
      route: ControllerAdapter.handle(container.get('Apps.controllers.FindProductByIdGetController')),
      middlewares: [
      ],
      url: '/:productId'
    });

    this.post({
      router,
      route: ControllerAdapter.handle(container.get('Apps.controllers.CreateProductPostController')),
      middlewares: [
      ],
      url: '/'
    });

    this.patch({
      router,
      route: ControllerAdapter.handle(container.get('Apps.controllers.UpdateProductNamePatchController')),
      middlewares: [
      ],
      url: '/:productId'
    });

    this.delete({
      router,
      route: ControllerAdapter.handle(container.get('Apps.controllers.RemoveProductDeleteController')),
      middlewares: [
      ],
      url: '/:productId'
    });
  }
}
