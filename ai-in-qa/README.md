# AI in QA safe demo pack

This fictional Tallawah Billing workspace lets you complete the AI in QA course without connecting workplace code, customer conversations, or private tickets.

Use the files as the sources your agent is allowed to read:

- `mock-support-thread.md`: the messy conversation where the problem surfaced;
- `mock-ticket.md`: the incomplete ticket that needs evidence;
- `src/cart-retention.js`: the deliberately flawed implementation;
- `tests/cart-retention.test.js`: the test that should expose it;
- `AGENTS.md`: the review and safety fence;
- `prompts.md`: exercises matching the course loop.

The product and people are fictional. No customer information is present.

## Safe working rule

Give the agent access only to this folder. Ask it to explain every proposed write before it changes a file. Review the diff and run the tests yourself before accepting anything.
