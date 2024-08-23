export class ProductState {

  constructor(private readonly _id: string,
              private readonly _name: string) {
  }

  id(): string {
    return this._id;
  }

  name(): string {
    return this._name;
  }
}
