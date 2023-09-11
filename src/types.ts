import {
  continents,
  currencies,
  languages,
  countryCode,
  countries,
} from "./data";
import getCurrency from "./getCurrency";

export interface ICountry {
  capital: string;
  continent: TContinentCode;
  continents?: TContinentCode[];
  currency: TCurrencyCode[] | { [code: string]: string };
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
export type TCountryInfo = {
  [key in TCountryCode]: ICountry;
};

export type TCurrencyCodeReturnType<T extends TCountryCode> = ReturnType<
  typeof getCurrency<T>
>;

export type TCountryInfoReturn = {
  [key in TCountryCode]: {
    capital: string;
    continent: TContinentCode;
    continents?: TContinentCode[];
    languages: TLanguageCode[];
    name: string;
    native: string;
    phone: number[];
    currency: TCurrencyCodeReturnType<key>;
  };
};

export type LanguageMapping<T extends keyof typeof countries> = {
  [K in (typeof countries)[T]["languages"][number]]: ILanguage;
};

export type LanguageCode<T extends keyof typeof countries> =
  (typeof countries)[T]["languages"][number];

export type CurrencyMapping<T extends keyof typeof countries> = {
  [K in (typeof countries)[T]["currency"][number]]: K;
};

export type CurrencyCode<T extends keyof typeof countries> =
  (typeof countries)[T]["currency"][number];
