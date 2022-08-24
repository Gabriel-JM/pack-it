export class AggregateRoot<T> {
  constructor(
    public readonly id: T,
    public readonly version: number
  ) {}
}
