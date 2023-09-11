# ts-country

`ts-country` is a TypeScript package that offers seamless access to comprehensive information about countries.


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


### Using `getCountry`

```typescript
import { getCountry } from "ts-country";

const {
   US: {
    capital,
    currency: { USD, USN, USS },
    continent,
    languages,
    name,
    native,
    phone,
    continents,
  },
} = getCountry();
```
### Using `getCurrency`

```typescript
import { getCurrency } from "ts-country";

// Replace "US" with the desired country code
const { USD, USN, USS } = getCurrency("US");
```

### Using `getLanguage`

```typescript
import { getLanguage } from "ts-country";

// Replace "US" with the desired country code
const { en: { name, native } } = getLanguage("US");
```


# Contributing

If you'd like to contribute, please fork the repository and create a pull request. We welcome improvements and bug fixes.

