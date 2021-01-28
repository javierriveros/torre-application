/**
 * Helper for formatting money into letters
 * Downloaded from: https://stackoverflow.com/a/10601315/11450301
 */

export const formatMoney = (value: number) => {
  if (!parseInt((value as unknown) as string)) return null;
  const suffixes = ["", "K", "M", "B", "T"];
  const suffixNum = Math.floor(("" + value).length / 3);
  let shortValue: string | number = parseFloat(
    (suffixNum != 0 ? value / Math.pow(1000, suffixNum) : value).toPrecision(2)
  );
  if (shortValue % 1 != 0) {
    shortValue = shortValue.toFixed(1);
  }
  return shortValue + suffixes[suffixNum];
};
