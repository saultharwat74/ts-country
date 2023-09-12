import { countries } from "./data";
import getCurrency from "./getCurrency";
import getLanguage from "./getLanguage";
import {
  TCountryCode,
  TCountryInfoReturn,
  TCurrencyCodeReturnType,
} from "./types";

/**
 * Retrieves country information.
 * @returns An object containing country information indexed by country code.
 */

export default function getCountry(): TCountryInfoReturn {
  // Initialize an empty object to store country information
  const countryInfo: TCountryInfoReturn = {} as TCountryInfoReturn;

  // Iterate through each country code
  for (const countryCode in countries) {
    // Get country information for the current country code
    const country = countries[countryCode as TCountryCode];
    // Get currency codes for the current country code
    const currencyCodes = getCurrency(countryCode as TCountryCode);
    // Get laguages for the current country code
    const languages = getLanguage(countryCode as TCountryCode);
    
    countryInfo[countryCode as TCountryCode] = {
      ...country,
      currency: currencyCodes as TCurrencyCodeReturnType<TCountryCode>,
      languages,
    };
  }

  return countryInfo;
}
