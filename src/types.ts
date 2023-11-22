import {
  continents,
  currencies,
  languages,
  countryCodes,
  countries,
  geonameId,
  emojis,
  fipsCodes,
  isoNumericCodes,
  countryCoastlines,
  governmentTypes,
  countryAreas,
  currencySymbols,
} from "./data";
import getCurrency from "./getCurrency";
import getLanguage from "./getLanguage";

export interface ICountry<T extends TCountryCodes> {
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
  emoji: CountryFlagEmoji<T>;

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
  geonameId: TGeonameId<T>;

  /**
   * The FIPS (Federal Information Processing Standards) code(s) associated with the country.
   */
  fipsCode: TFipsCodes<T>;

  /**
   * The ISO 3166-1 numeric code(s) associated with the country.
   * */
  isoNumeric: TIsoNumericCodes<T>;

  /**
   * The currency symbol of the country.
   * */
  currencySymbol: TCurrencySymbols<T>;

  /**
   * The area of the country.
   * */
  area: TCountryAreas<T>;

  /**
   * The government type of the country.
   * */
  governmentType: TCountryGovernmentTypes<T>;

  /**
   * The coastline of the country.
   * */
  coastline: TCountryCoastlines<T>;
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
export type TCountryCodes = keyof typeof countryCodes;

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
 * Represents a code identifying a coastline.
 */
export type TCountryCoastlines<T extends keyof typeof countryCoastlines> =
  (typeof countryCoastlines)[T];

/**
 * Represents a code identifying a government type.
 */
export type TCountryGovernmentTypes<T extends keyof typeof governmentTypes> =
  (typeof governmentTypes)[T];

/**
 * Represents a code identifying a country area.
 * */
export type TCountryAreas<T extends keyof typeof countryAreas> =
  (typeof countryAreas)[T];

/**
 * Represents a code identifying a currency symbol
 */
export type TCurrencySymbols<T extends keyof typeof currencySymbols> =
  (typeof currencySymbols)[T];
/**
 * Represents an object where keys are country codes and values are objects conforming to the ICountry interface.
 */
export type TCountryInfo = {
  [key in TCountryCodes]: ICountry<key>;
};

/**
 * Represents a utility type that extracts the type of values from a given object type.
 * For example, if T is { a: string; b: number; }, ValueOf<T> will be string | number.
 */
export type ValueOf<T> = T[keyof T];

/**
 * Represents the type of Geoname IDs used in the application.
 */
export type TGeonameId<T extends keyof typeof geonameId> =
  (typeof geonameId)[T];
/**
 * Represents the type of FIPS codes used in the application.
 * For example, if T is 'US', TFipsCode will be 'US'
 * */
export type TFipsCodes<T extends keyof typeof fipsCodes> =
  (typeof fipsCodes)[T];

/**
 * Represents the type of ISO numeric codes used in the application.
 * For example, if T is 'US', TIsoNumeric will be '840'
 * */

export type TIsoNumericCodes<T extends keyof typeof isoNumericCodes> =
  (typeof isoNumericCodes)[T];
/**
 * Represents the emoji strings for country flags.
 */
export type CountryFlagEmoji<T extends keyof typeof emojis> =
  (typeof emojis)[T];

/**
 * Represents the return type of the getCurrency function, where T is a valid country code.
 * For example, if T is 'US', TCurrencyCodeReturnType<'US'> will be the return type of getCurrency('US').
 */
export type TCurrencyCodeReturnType<T extends TCountryCodes> = ReturnType<
  typeof getCurrency<T>
>;

export type TLanguageCodeReturnType<T extends TCountryCodes> = ReturnType<
  typeof getLanguage<T>
>;

/**
 * Represents a mapping of country codes to detailed country information.
 */
export type TCountryInfoReturn = {
  [key in TCountryCodes]: Omit<ICountry<key>, "currency" | "languages"> & {
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

export * from "./data/regions/types";