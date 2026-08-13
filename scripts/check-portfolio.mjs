import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const requiredArtifacts = [
  ['qa-fundamentals/product-promises.md', 'your product promises and risks'],
  ['qa-fundamentals/test-cases.md', 'at least five useful test cases'],
  ['qa-fundamentals/bug-report-irie20.md', 'the IRIE20 boundary bug report'],
  ['qa-fundamentals/release-recommendation.md', 'your release recommendation'],
  ['ai-in-qa/review-notes.md', 'your AI output review notes'],
  ['evidence/README.md', 'a short guide to your screenshots, traces, or reports'],
];

const missing = requiredArtifacts.filter(([file]) => {
  const fullPath = path.join(root, file);
  if (!fs.existsSync(fullPath)) return true;
  const content = fs.readFileSync(fullPath, 'utf8')
    .replace(/<!--([\s\S]*?)-->/g, '')
    .trim();
  return content.length < 120 || /\[write|\[replace|your evidence here/i.test(content);
});

if (missing.length) {
  console.error('Your portfolio is not ready to share yet. Add real evidence for:');
  for (const [, description] of missing) console.error('- ' + description);
  process.exitCode = 1;
} else {
  console.log('Portfolio evidence check passed. Review it once more for private information before sharing.');
}
