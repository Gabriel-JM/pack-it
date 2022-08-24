import { PackingItemAlreadyExistsException } from '@/domain/exceptions/packing-item-already-exists-exception.js'
import { Localization, PackingItem, PackingListName } from '@/domain/value-objects/index.js'

export class PackingList {
  #id: string
  #name: PackingListName
  #localization: Localization
  #items: Array<PackingItem>

  constructor(
    id: string,
    name: PackingListName,
    localization: Localization,
    items: PackingItem[]
  ) {
    this.#id = id
    this.#name = name
    this.#localization = localization
    this.#items = items
  }

  get id() {
    return this.#id
  }

  addItem(item: PackingItem) {
    const alreadyExists = this.#items.some(it => it.name === item.name)

    if (alreadyExists) {
      throw new PackingItemAlreadyExistsException(
        this.#name.value,
        item.name
      )
    }

    this.#items.push(item)
  }
}
