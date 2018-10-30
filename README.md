# Jest Empty Coverage Bug

This repo is to demonstarte a bug of jest empty coverage.

## Steps

1. Use `yarn` to install dependencies

```
yarn install
```

2. Generate the coverage report.

```
yarn cover:jest
```

3. Check the file `coverage/coverage-final.json`. The coverage data for `BrandTable.jsx` is incorrect. Some value is `null` and `-1`.

```
    "statementMap": {
      "0": {
        "start": { "line": 1, "column": 0 },
        "end": { "line": null, "column": -1 }
      },
      "1": {
        "start": { "line": 4, "column": 22 },
        "end": { "line": null, "column": -1 }
      },
      "2": {
        "start": { "line": 9, "column": 4 },
        "end": { "line": null, "column": -1 }
      },
      "3": {
        "start": { "line": 13, "column": 0 },
        "end": { "line": null, "column": -1 }
      }
    },
```

4. Add a unit test to `BrandTable.jsx` by renaming the `src/__tests__/BrandTable-spec` to `src/__tests__/BrandTable-spec.js`. Now the report data for `BrandTable.jsx` is not generate through empty report.

5. Generate coverage report

```
yarn cover:jest
```

6. Check the file `coverage/coverage-final.json`. Now the coverage data for `BrandTable.jsx` is correct. 

```
    "statementMap": {
      "0": {
        "start": { "line": 5, "column": 4 },
        "end": { "line": 5, "column": 16 }
      },
      "1": {
        "start": { "line": 9, "column": 4 },
        "end": { "line": 9, "column": 33 }
      },
      "2": {
        "start": { "line": 13, "column": 0 },
        "end": { "line": 13, "column": 37 }
      }
    },
```
