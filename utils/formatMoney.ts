/**
 * Helper for formatting money into letters
 * Downloaded from: https://stackoverflow.com/a/32638472/11450301
 */

export const formatMoney = (value: number, fixed = 0) => {
  if (!parseInt((value as unknown) as string)) return null;
  if (value === null) {
    return null;
  } // terminate early
  if (value === 0) {
    return "0";
  } // terminate early
  fixed = !fixed || fixed < 0 ? 0 : fixed; // valueber of decimal places to show
  const b = value.toPrecision(2).split("e"), // get power
    k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3), // floor at decimals, ceiling at trillions
    c = k < 1 ? value.toFixed(0 + fixed) : (value / Math.pow(10, k * 3)).toFixed(1 + fixed), // divide by power
    d = c < 0 ? c : Math.abs(c), // enforce -0 is 0
    e = d + ["", "K", "M", "B", "T"][k]; // append power
  return e;
};
