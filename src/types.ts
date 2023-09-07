import { continents, currencies, languages, countryCode, countries } from "./data";

export interface ICountry {
  capital: string;
  continent: TContinentCode;
  continents?: TContinentCode[];
  currency: TCurrencyCode[];
  languages: TLanguageCode[];
  name: string;
  native: string;
  phone: number[];
}

export interface ILanguage {
  name: string;
  native: string;
  rtl?: 0 | 1;
}

export type TContinentCode = keyof typeof continents;
export type TCountryCode = keyof typeof countryCode;
export type TLanguageCode = keyof typeof languages;
export type TCurrencyCode = keyof typeof currencies;
export type TCountries = typeof countries;