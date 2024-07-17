/**
 * Splits a string into an array of substrings of a specified width.
 *
 * If the `width` parameter is less than or equal to 0, an error is thrown.
 *
 * @param {number} width - The width of each substring.
 * @return {Array<string>} The array of substrings, each with the specified width.
 */
interface String {
  splitWidth(width: number): Array<string>;
}
