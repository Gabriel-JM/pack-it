import { PackItException } from '@/shared/exceptions/pack-it-exception.js'

export class PackingItemAlreadyExistsException extends PackItException {
  name = 'PackingItemAlreadyExistsException'

  constructor(
    public readonly listName: string,
    public readonly itemName: string
  ) {
    super(`Packing list: '${listName}' already defined item '${itemName}'`)
  }
}
