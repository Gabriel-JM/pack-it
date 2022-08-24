import { EmptyPackingListNameException } from '@/domain/exceptions/index.js'

export class PackingListName {
  #value: string

  constructor(value: string) {
    if (!value) {
      throw new EmptyPackingListNameException()
    }

    this.#value = value
  }

  get value() {
    return this.#value
  }

  [Symbol.toPrimitive]() {
    return this.#value
  }
}
