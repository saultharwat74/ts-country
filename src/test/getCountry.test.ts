import { test } from "vitest";
import getCountry from "../getCountry";
import { countries } from "../data";
import getCurrency from "../getCurrency";
import {
  TCountryCode,
  TCountryInfoReturn,
  TCurrencyCodeReturnType,
} from "../types";

test("getCountry: Retrieves country information", ({ expect }) => {
  // Call the getCountry function
  const result = getCountry();

  // Assertions
  expect(result).toMatchObject(
    Object.entries(countries).reduce((acc, [countryCode, country]) => {
      // Call the getCurrency function to obtain currency codes
      const currencyCodes = getCurrency(countryCode as TCountryCode);

      // Create a new object with the country information and currency codes
      const updatedCountryInfo = {
        ...country,
        currency: currencyCodes as TCurrencyCodeReturnType<TCountryCode>,
      };

      // Add the updated country information to the accumulator object
      const updatedAccumulator = {
        ...acc,
        [countryCode as TCountryCode]: updatedCountryInfo,
      } as TCountryInfoReturn;

      return updatedAccumulator;
    }, {})
  );
});
