# Fictional support thread: saved carts disappear

**Marcia, Support:** Three free-plan shoppers said their saved carts were empty when they returned this morning. Paid accounts look normal.

**Dwayne, Engineering:** I can reproduce in Safari, but not on my paid test account. The cart API answers 200 with an empty items array.

**Alicia, Product:** Free shoppers should keep a saved cart for 30 days. The account cleanup window is 7 days, but that is not the cart rule.

**Dwayne:** Release 1.42 changed the cleanup job. I suspect it is using the account retention timestamp for both records.

**Marcia:** Can someone file this with exact steps and the evidence? These shoppers were building large weekend orders.
