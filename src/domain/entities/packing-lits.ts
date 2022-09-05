import { PackingItemAlreadyExistsException } from '@/domain/exceptions/index.js'
import {
  Localization,
  PackingItem,
  PackingListId,
  PackingListName
} from '@/domain/value-objects/index.js'
import { AggregateRoot } from '@/shared/domain/aggregate-root.js'

export class PackingList extends AggregateRoot<PackingListId> {
  #id: PackingListId
  #name: PackingListName
  #localization: Localization
  #items: Array<PackingItem>

  constructor(
    id: string,
    name: PackingListName,
    localization: Localization,
    items: PackingItem[]
  ) {
    const packingListId = new PackingListId(id)
    super(packingListId, 1)
    this.#id = packingListId
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
