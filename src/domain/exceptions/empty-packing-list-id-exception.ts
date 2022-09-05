import { PackItException } from '@/shared/exceptions/index.js'

export class EmptyPackingListIdException extends PackItException {
  constructor() {
    super('Packing list ID cannot be empty.')
  }
}
