const getNavigation = (): string => {
  const [navigationEntry] = performance.getEntriesByType(
    'navigation'
  ) as PerformanceNavigationTiming[];
  console.log('navigationEntry', navigationEntry);
  if (navigationEntry) {
    switch (navigationEntry.type) {
      case 'navigate':
        return 'navigation';
      case 'reload':
        return 'refresh';
      case 'back_forward':
        return 'back-forward';
      case 'prerender':
        return 'prerender';
      default:
        return 'unknown';
    }
  }

  return 'unknown';
};

export { getNavigation };
