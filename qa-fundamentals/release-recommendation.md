# Release recommendation

# QA Release Summary: feature/bug001-IRIE20-discount

- **Decision:** Hold release
- **Build / commit:** N/A
- **Environment:** Chrome Version 151.0.7922.71 · Windows 11 · /practice/tumble-kitchen/
- **QA owner:** Matthew Wright
- **Date:** 2026-08-15

## What this release should prove

The release should prove that the IRIE20 discount is correctly applied when the cart total is exactly 10,000 JMD.

## Scope tested

The scope of testing includes verifying the correct application of the IRIE20 discount for cart totals of exactly 10,000 JMD.

## Not tested / out of scope

The following areas are not tested in this release:
- Mobile device compatibility
- Integration with third-party payment gateways

## Test data used

The test data used includes cart totals of exactly 10,000 JMD with the IRIE20 discount code applied.

## Execution summary

The testing was executed on 2026-08-15 and the results indicate that the IRIE20 discount is not correctly applied when the cart total is exactly 10,000 JMD.

## Evidence links

- [Bug Report: IRIE20 discount does not apply when cart total is exactly 10,000 JMD](../qa-fundamentals/bug001-report-IRIE20.md)
- [Cart total calculation bug](../evidence/irie20-cart-error.png)


## Accepted risks

The risk of releasing a version with this bug is low, as it only affects a specific scenario and does not impact the overall functionality of the application.

## Post-release watch

Monitor the application after release to ensure the bug is not reintroduced and that users are not experiencing any issues related to the IRIE20 discount.

## Next steps

Continue to monitor the application and gather feedback from users to ensure the bug is resolved and does not reoccur.


---

## Recommendation

Based on the evidence and testing results, it is recommended to hold the release until the IRIE20 discount bug is resolved.
