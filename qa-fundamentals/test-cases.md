## TC-001 · Verify IRIE20 applies 20% discount on order subtotal of exactly 10,000 JMD
**Priority:** P1  ·  **Type:** Positive  ·  **Status:** Failed
**Platform:** Chrome Version 151 · Windows 11 · /practice/tumble-kitchen/
**Traceability:** AC-1

| Field | Detail |
| --- | --- |
| Preconditions | Signed in as a standard user with an existing cart subtotal of 10,000 JMD. |
| Test data | Promo Code: `IRIE20`<br>Cart Subtotal: 10,000 JMD |
| Steps | 1. Navigate to the Cart / Checkout page.<br>2. Enter `IRIE20` into the promo code input field.<br>3. Click the Apply Promo Code button. |
| Expected result | A 20% discount (2,000 JMD) is applied to the subtotal, updating the calculated order subtotal to 8,000 JMD. |

---
--- 
---

## TC-002 · Verify IRIE20 applies 20% discount on order subtotal exceeding 10,000 JMD
**Priority:** P1  ·  **Type:** Positive  ·  **Status:** Passed
**Platform:** Chrome Version 151 · Windows 11 · /practice/tumble-kitchen/
**Traceability:** AC-1

| Field | Detail |
| --- | --- |
| Preconditions | Signed in as a standard user with an existing cart subtotal greater than 10,000 JMD. |
| Test data | Promo Code: `IRIE20`<br>Cart Subtotal: 15,000 JMD |
| Steps | 1. Navigate to the Cart / Checkout page.<br>2. Enter `IRIE20` into the promo code input field.<br>3. Click the Apply Promo Code button. |
| Expected result | A 20% discount (3,000 JMD) is applied to the subtotal, updating the calculated order subtotal to 12,000 JMD without hit to a discount cap. |

---
---
---

## TC-003 · Verify IRIE20 is rejected when cart subtotal is boundary value 9,999 JMD
**Priority:** P1  ·  **Type:** Negative  ·  **Status:** Passed
**Platform:** Chrome Version 151 · Windows 11 · /practice/tumble-kitchen/
**Traceability:** AC-1

| Field | Detail |
| --- | --- |
| Preconditions | Signed in as a standard user with an existing cart subtotal of 9,999 JMD. |
| Test data | Promo Code: `IRIE20`<br>Cart Subtotal: 9,999 JMD |
| Steps | 1. Navigate to the Cart / Checkout page.<br>2. Enter `IRIE20` into the promo code input field.<br>3. Click the Apply Promo Code button. |
| Expected result | The promo code is rejected with a clear error message indicating minimum order total of 10,000 JMD is required, and no discount is applied. |

---
---
---

## TC-004 · Verify error handling when applying invalid or nonexistent promo code
**Priority:** P2  ·  **Type:** Negative  ·  **Status:** Ready to run
**Platform:** Chrome Version 151 · Windows 11 · /practice/tumble-kitchen/
**Traceability:** AC-1

| Field | Detail |
| --- | --- |
| Preconditions | Signed in as a standard user with an existing cart subtotal of 10,000 JMD. |
| Test data | Promo Code: `INVALID20`<br>Cart Subtotal: 10,000 JMD |
| Steps | 1. Navigate to the Cart / Checkout page.<br>2. Enter `INVALID20` into the promo code input field.<br>3. Click the Apply Promo Code button. |
| Expected result | The system displays a clear error message stating "Invalid promo code", and cart subtotal remains 10,000 JMD. |

---
---
---

## TC-005 · Verify error handling when submitting empty promo code input field
**Priority:** P3  ·  **Type:** Negative  ·  **Status:** Ready to run
**Platform:** Chrome Version 151 · Windows 11 · /practice/tumble-kitchen/
**Traceability:** AC-1

| Field | Detail |
| --- | --- |
| Preconditions | Signed in as a standard user on cart page with 10,000 JMD subtotal. |
| Test data | Promo Code: ` ` (empty/blank)<br>Cart Subtotal: 10,000 JMD |
| Steps | 1. Leave the promo code input field blank.<br>2. Click the Apply Promo Code button. |
| Expected result | The system displays an error message stating "Please enter a promo code", and no calculation change occurs. |

---
---
---

## TC-006 · Verify IRIE20 cannot be applied multiple times to the same order
**Priority:** P2  ·  **Type:** Negative  ·  **Status:** Ready to run
**Platform:** Chrome Version 151 · Windows 11 · /practice/tumble-kitchen/
**Traceability:** AC-1

| Field | Detail |
| --- | --- |
| Preconditions | Signed in as standard user with promo code `IRIE20` already applied to a 10,000 JMD subtotal order. |
| Test data | Promo Code: `IRIE20`<br>Current Cart Subtotal: 8,000 JMD |
| Steps | 1. Attempt to enter `IRIE20` into the promo code input field again.<br>2. Click the Apply Promo Code button. |
| Expected result | The system displays an error message stating "Promo code has already been applied", keeping discount at 2,000 JMD. |

---
---
---

## TC-007 · Verify IRIE20 cannot be stacked with another promotional code
**Priority:** P2  ·  **Type:** Negative  ·  **Status:** Ready to run
**Platform:** Chrome Version 151 · Windows 11 · /practice/tumble-kitchen/
**Traceability:** AC-1

| Field | Detail |
| --- | --- |
| Preconditions | Signed in as standard user with valid active promo code `WELCOME10` already applied to cart. |
| Test data | Promo Code: `IRIE20`<br>Cart Subtotal: 10,000 JMD |
| Steps | 1. Enter promo code `IRIE20` into input field.<br>2. Click the Apply Promo Code button. |
| Expected result | System displays message stating "Promo codes cannot be combined", and `IRIE20` is not applied. |

---
---
---

## TC-008 · Verify discount is revoked if item removal drops subtotal below 10,000 JMD
**Priority:** P1  ·  **Type:** Negative  ·  **Status:** Ready to run
**Platform:** Chrome Version 151 · Windows 11 · /practice/tumble-kitchen/
**Traceability:** AC-1

| Field | Detail |
| --- | --- |
| Preconditions | Signed in as standard user with `IRIE20` successfully applied to a 10,000 JMD subtotal. |
| Test data | Subtotal change: Remove item valued at 2,000 JMD |
| Steps | 1. Remove item(s) from cart reducing initial gross subtotal to 8,000 JMD.<br>2. Observe cart summary. |
| Expected result | System automatically removes the `IRIE20` discount, displays notice "Promo code removed: Order subtotal below 10,000 JMD", subtotal resets to 8,000 JMD. |