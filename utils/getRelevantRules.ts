import rules from '../data/rules.json';

export function getRelevantRules(query: string): string[] {
  const lowerQuery = query.toLowerCase();
  return rules
    .filter(rule => {
      return (
        rule.title.toLowerCase().includes(lowerQuery) ||
        rule.content.toLowerCase().includes(lowerQuery)
      );
    })
    .map(rule => `■${rule.title}\n${rule.content}`);
}
