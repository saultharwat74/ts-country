import { countries } from "./data";
import getCurrency from "./getCurrency";
import getLanguage from "./getLanguage";
import {
  TCountryCodes,
  TCountryInfoReturn,
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
    const country = countries[countryCode as TCountryCodes];
    // Get currency codes for the current country code
    const currency = getCurrency(countryCode as TCountryCodes);
    // Get laguages for the current country code
    const languages = getLanguage(countryCode as TCountryCodes);

    countryInfo[countryCode as TCountryCodes] = {
      ...country,
      currency,
      languages,
    } as any;
  }

  return countryInfo;
}
