export abstract class AggregateRoot {

  constructor() {}

  abstract toPrimitives(): Record<string, any>;
}
