/**
 * 
 * @param {string} prefix 
 * @returns 
 */
export default function definePrefix(prefix) {
  /**
   * @param {string} path 
   */
  return function (path) {
    return prefix + path;
  };
}
