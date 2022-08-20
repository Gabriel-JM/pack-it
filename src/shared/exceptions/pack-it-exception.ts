export abstract class PackItException extends Error {
  name = 'PackItException'

  constructor(message: string) {
    super(message)
  }
}
