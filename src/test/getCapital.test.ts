import { test } from "vitest";
import getCapital from "../getCapital";

test("getCapital: Retrieves country capital", ({ expect }) => {
    // Call the getCapital function and destructure the results for specific country codes
    const {AU, AS, AD, AE, US} = getCapital();

    // Verify that the capital city for each country matches the expected values
    expect(AU).toEqual("Canberra");
    expect(AS).toEqual("Pago Pago");
    expect(AD).toEqual("Andorra la Vella");
    expect(AE).toEqual("Abu Dhabi");
    expect(US).toEqual("Washington, D.C.");
});