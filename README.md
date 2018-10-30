# Jest Empty Coverage Bug

This repo is to demonstarte a bug of jest empty coverage.

## Steps

Use `yarn` to install dependencies

```
yarn install
```

Generate the coverage report.

```
yarn cover:jest
```

Check the file `coverage/coverage-final.json`. The coverage data for `BrandTable.jsx` is incorrect. Some value is `null` and `-1`.

Add a unit test to `BrandTable.jsx` by renaming the `src/__tests__/BrandTable-spec` to `src/__tests__/BrandTable-spec.js`. Now the report data for `BrandTable.jsx` is not generate through empty report.

Generate coverage report

```
yarn cover:jest
```

Check the file `coverage/coverage-final.json`. Now the coverage data for `BrandTable.jsx` is correct. 
