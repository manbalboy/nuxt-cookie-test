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
   console.log(".....//////////////////////////////////////")
   console.log(".....//////////////////////////////////////")
   console.log(".....//////////////////////////////////////")
   console.log(".....//////////////////////////////////////")
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",req.headers)
    res.write('Hello World');
    res.end()
  }