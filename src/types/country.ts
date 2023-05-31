import { Region } from './regions'

type Currency = {
  [key: string]: {
    name: string
    symbol: string
  }
}

type Language = {
  [key: string]: string
}

export type Country = {
  name: {
    common: string
    official: string
    nativeName: {
      [key: string]: {
        official: string
        common: string
      }
    }
  }
  flags: { png: string; svg: string; alt: string }
  capital: string[]
  population: number
  region: Region
  subregion: string
  tld: string[]
  currencies: Currency
  languages: Language
  borders: string[]
}
export type CountryByName = {
  '0': Country
}
type Info = {
  title: string
  description: string | string[]
}
export type CountryInfo = {
  img: string
  name: string
  info: Info[]
}
