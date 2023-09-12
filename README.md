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


`getCountry`

> Retrieves detailed information about a specific country.

```typescript
import { getCountry } from "ts-country";

const countryInfo = getCountry();

// Accessing capital of the United States
const capital = countryInfo.US.capital; // Returns "Washington, D.C."
```

Returned Values

- `capital`: Washington, D.C.
- `currency`: { USD: "USD" }
- `continent`: North America
- `languages`: { en: { name: "English", native: "English" } }
- `name`: United States
- `native`: United States
- `phone`: [1]
- `continents`: [North America]
- `emoji`: 🇺🇸
- `timezone`: America/New_York
- `gmtoffset`: UTC-05:00
- `geonameId`: 6252001
  
`getCurrency`

> Provides currency codes for a given country code.

```typescript
import { getCurrency } from "ts-country";

const currencyCodes = getCurrency("US");

// Accessing USD currency code
const usdCode = currencyCodes.USD; // Returns "United States Dollar (USD)"
```

Returned Values

- `USD`: United States Dollar (USD)

`getLanguage`

> Retrieves detailed language information for a specific country code.

```typescript
import { getLanguage } from "ts-country";

const languageInfo = getLanguage("US");

// Accessing English language information
const englishInfo = languageInfo.en; // Returns { name: "English", native: "English" }
```

#### Returned Values

- `name`: English
- `native`: English

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE)

# Contributing

If you'd like to contribute, please fork the repository and create a pull request. We welcome improvements and bug fixes.