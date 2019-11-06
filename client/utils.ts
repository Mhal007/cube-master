export const getAverage = (results: number[]): number => {
  if (!results || results.length === 0) {
    return 0;
  }

  return Math.round(
    results.reduce((sum, result) => sum + result, 0) / results.length
  );
};
