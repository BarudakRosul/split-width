/**
 * Splits a string into an array of substrings of a specified width.
 *
 * If the `width` parameter is less than or equal to 0, an error is thrown.
 *
 * @param {number} width - The width of each substring.
 * @return {Array<string>} The array of substrings, each with the specified width.
 */
String.prototype.splitWidth = function (width) {
  if (width <= 0) {
    throw new Error("Width must be greater than 0");
  }

  let result = [];
  for (let i = 0; i < this.length; i += width) {
    result.push(this.slice(i, i + width));
  }

  return result;
}
