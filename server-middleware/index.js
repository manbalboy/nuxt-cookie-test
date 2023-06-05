// @ts-check

/**
 * 
 * @param {number} testA 
 * @param {number} testB 
 * @returns number
 */
 function test(testA, testB) {
  return testA + testB
}

export default function (req, res, next) {

    res.write('Hello World');
    res.end()
  }