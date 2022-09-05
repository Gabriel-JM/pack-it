import { EmptyPackingListIdException } from '@/domain/exceptions/index.js'

export class PackingListId {
  #value: string

  constructor(value: string) {
    if (!value) {
      throw new EmptyPackingListIdException()
    }

    this.#value = value
  }

  get value() {
    return this.#value
  }
}
