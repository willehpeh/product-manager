export class InvalidIdError extends Error {
  constructor() {
    super('Invalid value for ID');
  }
}
