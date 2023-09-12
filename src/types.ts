import {
  continents,
  currencies,
  languages,
  countryCode,
  countries,
  geonameId,
  emojis,
} from "./data";
import getCurrency from "./getCurrency";
import getLanguage from "./getLanguage";

export interface ICountry {
  /**
   * The capital city of the country.
   */
  capital: string;

  /**
   * The continent code that the country belongs to.
   */
  continent: TContinentCode;

  /**
   * An optional array of continent codes if the country spans multiple continents.
   */
  continents?: TContinentCode[];

  /**
   * The currency information for the country. This can be an array of currency codes or a dictionary
   * with currency codes as keys and currency names as values.
   */
  currency: TCurrencyCode[] | { [code: string]: string };

  /**
   * An array of language codes used in the country.
   */
  languages: TLanguageCode[];

  /**
   * The official name of the country.
   */
  name: string;

  /**
   * The native name of the country.
   */
  native: string;

  /**
   * An array of phone codes associated with the country.
   */
  phone: number[];

  /**
   * The emoji representation of the country's flag.
   */
  emoji: CountryFlagEmoji;

  /**
   * The timezone of the country.
   */
  timezone: string;

  /**
   * The GMT offset of the country.
   */
  gmtoffset: string;

  /**
   * The unique Geoname ID associated with the country.
   */
  geonameId: TGeonamedId;
}

export interface ILanguage {
  /**
   * The name of the language.
   */
  name: string;

  /**
   * The native name of the language.
   */
  native: string;

  /**
   * Indicates whether the language is written right-to-left (RTL).
   *
   * Optional property. It can have one of two values:
   * - `0` if the language is not written right-to-left.
   * - `1` if the language is written right-to-left.
   */
  rtl?: 0 | 1;
}

/**
 * Represents a code identifying a continent.
 */
export type TContinentCode = keyof typeof continents;

/**
 * Represents a code identifying a country.
 */
export type TCountryCode = keyof typeof countryCode;

/**
 * Represents a code identifying a language.
 */
export type TLanguageCode = keyof typeof languages;

/**
 * Represents a code identifying a currency.
 */
export type TCurrencyCode = keyof typeof currencies;
export type TCountries = typeof countries;

/**
 * Represents an object where keys are country codes and values are objects conforming to the ICountry interface.
 */
export type TCountryInfo = {
  [key in TCountryCode]: ICountry;
};

/**
 * Represents a utility type that extracts the type of values from a given object type.
 * For example, if T is { a: string; b: number; }, ValueOf<T> will be string | number.
 */
export type ValueOf<T> = T[keyof T];

/**
 * Represents the type of Geoname IDs used in the application.
 */
export type TGeonamedId = ValueOf<typeof geonameId>;

/**
 * Represents the emoji strings for country flags.
 */
export type CountryFlagEmoji = ValueOf<typeof emojis>;

/**
 * Represents the return type of the getCurrency function, where T is a valid country code.
 * For example, if T is 'US', TCurrencyCodeReturnType<'US'> will be the return type of getCurrency('US').
 */
export type TCurrencyCodeReturnType<T extends TCountryCode> = ReturnType<
  typeof getCurrency<T>
>;

export type TLanguageCodeReturnType<T extends TCountryCode> = ReturnType<
  typeof getLanguage<T>
>;
/**
 * Represents a mapping of country codes to detailed country information.
 */
export type TCountryInfoReturn = {
  [key in TCountryCode]: Omit<ICountry, "currency" | "languages"> & {
    currency: TCurrencyCodeReturnType<key>;
    languages: TLanguageCodeReturnType<key>;
  };
};
/**
 * Represents a mapping of language codes to their corresponding ILanguage objects.
 * T is a key from the countries object (a country code).
 */
export type LanguageMapping<T extends keyof typeof countries> = {
  [K in (typeof countries)[T]["languages"][number]]: ILanguage;
};

/**
 * Represents a type that extracts the language codes from the languages array of a specific country.
 * T is a key from the countries object (a country code).
 */
export type LanguageCode<T extends keyof typeof countries> =
  (typeof countries)[T]["languages"][number];

/**
 * Represents a mapping of currency codes to their corresponding keys (likely country codes).
 * T is a key from the countries object (a country code).
 */
export type CurrencyMapping<T extends keyof typeof countries> = {
  [K in (typeof countries)[T]["currency"][number]]: K;
};

/**
 * Represents a type that extracts the currency codes from the currencies array of a specific country.
 * T is a key from the countries object (a country code).
 */
export type CurrencyCode<T extends keyof typeof countries> =
  (typeof countries)[T]["currency"][number];
