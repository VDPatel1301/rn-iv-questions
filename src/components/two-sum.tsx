import React, { useEffect } from 'react';

function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1]; // Return 1-based index
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [];
}

const TwoSumTest = () => {
  useEffect(() => {
    console.log('Test Case 1:', twoSum([4, 11, 17, 25], 21));    
    console.log('Test Case 2:', twoSum([0, 1, 2, 2, 3, 5], 4));    
    console.log('Test Case 3:', twoSum([-1, 0], -1));              
  }, []);

  return null;
};

export default TwoSumTest;
