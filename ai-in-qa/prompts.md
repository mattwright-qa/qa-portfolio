# Evidence-first prompts

## 1. Prove the context

List the files you can read in this demo folder. For each one, name one specific fact from the file. If you cannot read a source, say so. Do not edit anything.

## 2. Turn the thread into a bug

Read `mock-support-thread.md`, `mock-ticket.md`, and the cart-retention code. Rewrite the ticket with the affected user, exact reproduction, expected versus actual, severity, and the concrete evidence to attach. Do not invent facts that are absent from the sources.

## 3. Propose the smallest fix

Explain the confirmed cause. Propose the smallest code change that makes cart retention depend on the cart timestamp and keeps the 30-day free-plan promise. Name the test that proves the old behavior fails. Wait for approval before editing.

## 4. Review the output

After the proposed change, show the diff, run the test, and answer: what failed before, what passes now, what user promise this proves, and what remains untested? Stop before any merge or release action.
