# Tumble Kitchen Playwright starter

This is the clean starting project for Julia Pottinger's Test Automation Basics course.

## Run it

```text
npm install
npx playwright install
npm test
```

Then open the report:

```text
npm run report
```

The tests use `https://juliapottinger.com` by default. To run against a local
copy of the site, set `BASE_URL` first:

```text
BASE_URL=http://127.0.0.1:4322 npm test
```

The two starter tests prove the store and search feed are reachable. The course builds the rest: locators, page objects, cart coverage, API contracts, failure diagnosis, CI, and the capstone suite.

Do not turn a genuine product failure green by weakening the expected result. A truthful red belongs in the suite with the bug report it produced.
