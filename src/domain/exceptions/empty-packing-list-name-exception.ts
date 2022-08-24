import { PackItException } from '@/shared/exceptions/index.js'

export class EmptyPackingListNameException extends PackItException {
  name = 'EmptyPackingListNameException'
  
  constructor() {
    super('Packing list name cannot be empty.')
  }
}
