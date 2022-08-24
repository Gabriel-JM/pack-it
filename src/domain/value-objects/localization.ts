export class Localization {
  constructor(
    public readonly city: string,
    public readonly country: string
  ) {}

  static create(value: string) {
    const [city, country] = value.split(',')

    return new Localization(city, country)
  }

  toString() {
    return `${this.city},${this.country}`
  }
}
