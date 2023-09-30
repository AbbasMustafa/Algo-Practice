export function twoNumberSum(array: number[], targetSum: number) {
    const numMap: Record<number, boolean> = {};
  
    for (let index = 0; index < array.length; index++) {
      const x = targetSum - array[index];
      
      if (numMap[x]) {
        return [array[index], x];
      }
  
      numMap[array[index]] = true;
    }
  
    return [];
  }
  