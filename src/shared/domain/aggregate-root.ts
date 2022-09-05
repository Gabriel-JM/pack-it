export class AggregateRoot<T> {
  #id: T
  #versionIncremented = false
  
  constructor(
    id: T,
    public version: number
  ) {
    this.#id = id
  }

  protected get id() {
    return this.#id
  }

  protected incrementVersion() {
    if (this.#versionIncremented) return

    this.version++
    this.#versionIncremented = true
  }
}
