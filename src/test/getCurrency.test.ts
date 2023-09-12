import { test } from "vitest";
import getCurrency from "../getCurrency";

test("getCurrency: Retrieves currency code based on country code", ({
  expect,
}) => {
  // Test case 1: Testing currency for USA
  const resultUS = getCurrency("US");
  expect(resultUS).toEqual({ USD: "USD"});

  // Test case 2: Testing currency for Canada
  const resultCA = getCurrency("CA");
  expect(resultCA).toEqual({ CAD: "CAD" });

  // Test case 3: Testing currency for Germany
  const resultDE = getCurrency("DE");
  expect(resultDE).toEqual({ EUR: "EUR" });

  // Test case 4: Testing currency for Japan
  const resultJP = getCurrency("JP");
  expect(resultJP).toEqual({ JPY: "JPY" });

  // Test case 5: Testing currency for Australia
  const resultAU = getCurrency("AU");
  expect(resultAU).toEqual({ AUD: "AUD" });
});
