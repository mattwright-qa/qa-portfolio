# Test cases

## TC-001 · Verify invalid email format shows clear error message

**Priority:** P2: High  ·  **Type:** Negative  ·  **Status:** Ready to run
**Platform:** web.chrome
**Traceability:** signin

| Field | Detail |
| --- | --- |
| Preconditions | Given user is on sign in page and has an account |
| Test data | Email: invalid@example<br>Password: TumbleKitchen123! |
| Steps | 1. Navigate to https://juliapottinger.com/practice/tumble-kitchen/<br>2. Enter invalid@email in the email field<br>3. Enter TumbleKitchen123! in the password field<br>4. Click the sign in button |
| Expected result | A clear error message is shown, and the user is not signed in. |

---

## TC-002 · Verify invalid email format does not sign in the shopper

**Priority:** P2: High  ·  **Type:** Negative  ·  **Status:** Ready to run
**Platform:** web.chrome
**Traceability:** signin

| Field | Detail |
| --- | --- |
| Preconditions | Given user is on sign in page and has an account |
| Test data | Email: invalid@example<br>Password: TumbleKitchen123! |
| Steps | 1. Navigate to https://juliapottinger.com/practice/tumble-kitchen/<br>2. Enter invalid@email in the email field<br>3. Enter TumbleKitchen123! in the password field<br>4. Click the sign in button |
| Expected result | A clear error message is shown, and the user is not signed in. |

---

## TC-003 · Verify that boundary values for password length are enforced

**Priority:** P2: High  ·  **Type:** Negative  ·  **Status:** Ready to run
**Platform:** web.chrome
**Traceability:** signin

| Field | Detail |
| --- | --- |
| Preconditions | Given shopper is on sign in page and has an account |
| Test data | Email: demo@tumblekitchen.test<br>Password: Tumble1 |
| Steps | 1. Navigate to https://juliapottinger.com/practice/tumble-kitchen/<br>2. Enter demo@tumblekitchen.test in the email field<br>3. Enter boundary-value in the password field<br>4. Click the sign in button |
| Expected result | A clear error message is shown, and the user is not signed in. |
---

## Boundary & equivalence values: Password Field

9 values cover this input: 5 valid (partitions and edges) and 4 invalid.

| Value | Partition | Expect | Why it earns a test |
| --- | --- | --- | --- |
| 7 | Just below minimum | Reject | Below the allowed minimum of 8. |
| 8 | Minimum boundary | Accept | The smallest accepted value. |
| 9 | Just inside minimum | Accept | One step inside the lower edge. |
| 36 | Typical valid value | Accept | A representative value from the valid range. |
| 63 | Just inside maximum | Accept | One step inside the upper edge. |
| 64 | Maximum boundary | Accept | The largest accepted value. |
| 65 | Just above maximum | Reject | Above the allowed maximum of 64. |
| (empty) | Missing value | Reject | Required field left blank. |
| abc | Wrong type | Reject | Letters where a number is expected. |

---

## TC-004 · Verify shopper name shows after successful sign in

**Priority:** P2: High  ·  **Type:** Positive  ·  **Status:** Ready to run
**Platform:** web.chrome
**Traceability:** signin

| Field | Detail |
| --- | --- |
| Preconditions | Given shopper is on sign in page and has an account |
| Test data | Email: demo@tumblekitchen.test<br>Password: TumbleKitchen123! |
| Steps | 1. Navigate to https://juliapottinger.com/practice/tumble-kitchen/<br>2. Enter demo@tumblekitchen.test in the email field<br>3. Enter TumbleKitchen123! in the password field<br>4. Click the sign in button |
| Expected result | The shopper's name is displayed on the page after a successful sign-in. |

---

## TC-005 · Verify successful sign in after correct credentials

**Priority:** P2: High  ·  **Type:** Positive  ·  **Status:** Ready to run
**Platform:** web.chrome
**Traceability:** signin

| Field | Detail |
| --- | --- |
| Preconditions | Given shopper is on sign in page and has an account |
| Test data | Email: demo@tumblekitchen.test<br>Password: TumbleKitchen123! |
| Steps | 1. Navigate to https://juliapottinger.com/practice/tumble-kitchen/<br>2. Enter demo@tumblekitchen.test in the email field<br>3. Enter TumbleKitchen123! in the password field<br>4. Click the sign in button |
| Expected result | Shopper is signed in successfully. |

---
