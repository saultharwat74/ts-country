import { countries } from "./data";

// Create a cache object
const cache: Record<string, object> = {};

/**
 * Retrieves the currency codes for a given country.
 * @param {keyof typeof countries} country_code - The country code.
 * @returns {Object} An object with the currency codes as keys.
 */
export default function getCurrency<T extends keyof typeof countries>(
  country_code: T
): { [K in (typeof countries)[T]["currency"][number]]: K } {
  // Check if the result is already in the cache
  if (cache[country_code]) {
    return cache[country_code] as {
      [K in (typeof countries)[T]["currency"][number]]: K;
    };
  }

  // Retrieve country data from the 'countries' object
  const country = countries[country_code];
  const currency = country.currency;

  // Initialize an empty object to hold currency codes
  const currencyObject: {
    [K in (typeof countries)[T]["currency"][number]]: K;
  } = {} as any;

  // Populate the 'currencyObject' with currency codes
  for (const code of currency) {
    currencyObject[code as (typeof countries)[T]["currency"][number]] = code;
  }

  // Store the result in the cache for future use
  cache[country_code] = currencyObject;

  return currencyObject as {
    [K in (typeof countries)[T]["currency"][number]]: K;
  };
}
