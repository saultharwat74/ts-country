import { countries, languages } from "./data";
import { LanguageCode, LanguageMapping } from "./types";

// Create a cache to store language data
export const cache: Record<string, object> = {};

/**
 * Retrieves language data for a given country code.
 * @param country_code - The country code.
 * @returns Language data mapped by language code.
 */
export default function getLanguage<T extends keyof typeof countries>(
  country_code: T
): LanguageMapping<T> {
  // Check if data is already cached
  if (cache[country_code]) {
    return cache[country_code] as LanguageMapping<T>;
  }

  // Retrieve country information
  const country = countries[country_code];
  const countryLanguages = country.languages;

  // Create an object to store language data
  const languagesObject: LanguageMapping<T> = {} as LanguageMapping<T>;

  // Populate language data based on language codes
  for (const language of countryLanguages) {
    languagesObject[language as LanguageCode<T>] = languages[language];
  }

  // Cache the language data
  cache[country_code] = languagesObject;

  return languagesObject as LanguageMapping<T>;
}