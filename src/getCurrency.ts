import { countries } from "./data";
import { CurrencyCode, CurrencyMapping } from "./types";

// Create a cache object
const cache: Record<string, object> = {};

/**
 * Retrieves the currency codes for a given country.
 * @param {keyof typeof countries} country_code - The country code.
 * @returns {Object} An object with the currency codes as keys.
 */
export default function getCurrency<T extends keyof typeof countries>(
  country_code: T
): CurrencyMapping<T> {
  // Check if the result is already in the cache
  if (cache[country_code]) {
    return cache[country_code] as CurrencyMapping<T>;
  }

  // Retrieve country data from the 'countries' object
  const country = countries[country_code];
  const currency = country.currency;

  // Initialize an empty object to hold currency codes
  const currencyObject: CurrencyMapping<T> = {} as CurrencyMapping<T>;

  // Populate the 'currencyObject' with currency codes
  for (const code of currency) {
    currencyObject[code as CurrencyCode<T>] = code;
  }

  // Store the result in the cache for future use
  cache[country_code] = currencyObject;

  return currencyObject as CurrencyMapping<T>;
}
