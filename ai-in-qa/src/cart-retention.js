export function shouldDeleteCart({ plan, cartUpdatedDaysAgo, accountUpdatedDaysAgo }) {
  const accountRetentionDays = plan === 'free' ? 7 : 90;
  return accountUpdatedDaysAgo > accountRetentionDays;
}
