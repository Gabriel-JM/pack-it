import { EmptyPackingListItemNameException } from '@/domain/exceptions/index.js'

export class PackingItem {
  constructor(
    public readonly name: string,
    public readonly quantity: number,
    public readonly isPacked: boolean
  ) {
    if (!name) {
      throw new EmptyPackingListItemNameException()
    }
  }
}
