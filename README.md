<div align="center">
<h1>ts-country</h1>

> <p> It's a TypeScript package that offers seamless access to comprehensive information about countries </p>

</div>

# Installation

Using npm:

```bash
npm install ts-country
```

or using yarn:

```bash
yarn add ts-country
```

or using pnpm:

```bash
pnpm add ts-country
```

# Usage

| Function   | Description                                                           |
|------------|-----------------------------------------------------------------------|
| `getCountry`  | Retrieves detailed information about a specific country.                  |
| `getCurrency` | Provides currency codes for a given country code.                          |
| `getLanguage` | Retrieves detailed language information for a specific country code. |
| `getCapital` | Retrieves the capital cities of various countries. |


`getCountry`

> Retrieves detailed information about a specific country.

```typescript
import { getCountry } from "ts-country";

const countryInfo = getCountry() // Returns {
//   capital: "Washington, D.C.",
//   currency: { USD: "USD  -> United States Dollar" },
//   continent: "North America",
//   languages: { en: { name: "English", native: "English" } },
//   name: "United States",
//   native: "United States",
//   phone: [1],
//   continents: ["North America"],
//   emoji: "🇺🇸",
//   timezone: "America/New_York",
//   gmtoffset: "UTC-05:00",
//   geonameId: 6252001
//   fipsCode: "US",
//   isoNumeric: "840",
//   currencySymbol: "$",,
//   area: 9372610,
//   governmentType: Federal republic,
//   coastline: 19.924
// }
```
  
`getCurrency`

> Provides currency codes for a given country code.

```typescript
import { getCurrency } from "ts-country";

const currencyCodes = getCurrency("US");

// Accessing USD currency code
const usdCode = currencyCodes.USD; // Returns "USD  -> United States Dollar"
```

`getLanguage`

> Retrieves detailed language information for a specific country code.

```typescript
import { getLanguage } from "ts-country";

const languageInfo = getLanguage("US");

// Accessing English language information
const englishInfo = languageInfo.en; // Returns { name: "English", native: "English" }
```

`getCapital`

> Retrieves the capital cities of various countries.

```typescript
import { getCapital } from "ts-country";


const capitals = getCapital();
// Accessing capital of the United States
const usCapital = capitals.US.capital; // Returns "Washington, D.C."
```
## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE)

# Contributing

If you'd like to contribute, please fork the repository and create a pull request. We welcome improvements and bug fixes.