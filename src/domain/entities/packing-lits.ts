import { PackingListName } from '@/domain/value-objects/mod.js'

export class PackingList {
  #id: string
  #name: PackingListName
  #localization: string

  constructor(
    id: string,
    name: PackingListName,
    localization: string
  ) {
    this.#id = id
    this.#name = name
    this.#localization = localization
  }

  get id() {
    return this.#id
  }
}
