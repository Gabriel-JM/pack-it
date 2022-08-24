import { PackItException } from '@/shared/exceptions/index.js'

export class EmptyPackingListItemNameException extends PackItException {
  name = 'EmptyPackingListItemNameException'
  
  constructor() {
    super('Packing item name cannot be empty.')
  }
}
