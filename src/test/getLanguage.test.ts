import { test } from "vitest";
import getLanguage, { cache } from "../getLanguage";

test("getLanguage retrieves language data for a given country code", ({
  expect,
}) => {
  // Test case 1: Testing language for USA
  const usLanguageData = getLanguage("US");
  expect(usLanguageData).toEqual({
    en: { name: "English", native: "English" },
  });

  // Test case 2: Testing language for Canada
  const caLanguageData = getLanguage("CA");
  expect(caLanguageData).toEqual({
    en: { name: "English", native: "English" },
    fr: { name: "French", native: "Français" },
  });
});
test("getLanguage returns cached language data if available", ({ expect }) => {
  const cachedData = {
    en: { name: "English", native: "English" },
    es: { name: "Spanish", native: "Español" },
  };

  // Set the cached data
  const country_code = "US";
  cache[country_code] = cachedData;
  // When calling getLanguage with the same country code,
  // it should return the cached data
  const usLanguageData = getLanguage("US");
  expect(usLanguageData).toEqual(cachedData);
});
