import { TCountryCodes } from "./types";
import { countries } from "./data";

/**
 * Retrieves the capital city for each country.
 * @returns An object where the keys are the country codes and the values are the capital city names.
 */
export default function getCapital(): {
  [key in TCountryCodes]: string;
} {
  // Create an empty object to store the capital cities
  const capitals = {} as {
    [key in TCountryCodes]: string;
  };

  // Loop through each country in the countries object
  for (const country in countries) {
    // Assign the capital city of the country to the corresponding key in the capitals object
    capitals[country as TCountryCodes] =
      countries[country as TCountryCodes].capital;
  }

  // Return the object containing the capital cities
  return capitals;
}
