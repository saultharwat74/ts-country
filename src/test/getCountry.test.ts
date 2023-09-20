import { test } from "vitest";
import getCountry from "../getCountry";
import { countries } from "../data";
import getCurrency from "../getCurrency";
import {
  TCountryCodes,
  TCountryInfoReturn,
  TCurrencyCodeReturnType,
} from "../types";
import getLanguage from "../getLanguage";

test("getCountry: Retrieves country information", ({ expect }) => {
  // Call the getCountry function
  const result = getCountry();

  // Assertions
  expect(result).toMatchObject(
    Object.entries(countries).reduce((acc, [countryCode, country]) => {
      // Call the getCurrency function to obtain currency codes
      const currencyCodes = getCurrency(countryCode as TCountryCodes);
      // Call the getLanguage function to obtain language codes
      const languages = getLanguage(countryCode as TCountryCodes);
      // Create a new object with the country information and currency codes
      const updatedCountryInfo = {
        ...country,
        currency: currencyCodes as TCurrencyCodeReturnType<TCountryCodes>,
        languages,
      };

      // Add the updated country information to the accumulator object
      const updatedAccumulator = {
        ...acc,
        [countryCode as TCountryCodes]: updatedCountryInfo,
      } as TCountryInfoReturn;

      return updatedAccumulator;
    }, {})
  );

  // Verify that the capital city object for the United States matches the expected values
  expect(result.US).toMatchObject({
    name: "United States",
    native: "United States",
    phone: [1],
    continent: "NA",
    capital: "Washington, D.C.",
    currency: { USD: "USD" },
    languages: {
      en: { name: "English", native: "English" },
    },
    emoji: "🇺🇸",
    timezone: "America/New_York",
    gmtoffset: "UTC-05:00",
    geonameId: 6252001,
    fipsCode: "US",
    isoNumeric: "840",
    currencySymbol: "$",
    area: 9372610,
    governmentType: "Federal republic",
    costline: 19.924,
  });
});
