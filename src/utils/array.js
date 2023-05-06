export const findLargestArray = arr => {
  let largestArray = arr
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]
    if (Array.isArray(element)) {
      const largestSubArray = findLargestArray(element)
      if (largestSubArray.length > largestArray.length) {
        largestArray = largestSubArray
      }
    }
  }
  return largestArray
}
