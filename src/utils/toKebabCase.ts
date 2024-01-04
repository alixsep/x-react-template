// https://www.geeksforgeeks.org/how-to-convert-a-string-into-kebab-case-using-javascript/

/**
 * Converts the input string into kebab-case.
 *
 * @param str Input string
 * @returns kebab-case string
 *
 * @example
 * const str = 'Happy day';
 *
 * const result = toKebabCase(str);
 * console.log(result); // 'happy-day'
 */
const toKebabCase = (str: string): string =>
  str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase()

export default toKebabCase
