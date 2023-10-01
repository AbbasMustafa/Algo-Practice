export function isValidSubsequence(array: number[], sequence: number[]) {
    let seqIndex = 0
    const SEQUENCE_LENGHT = sequence.length
    
    for (let index = 0; index < array.length; index++) {
      if(SEQUENCE_LENGHT === seqIndex) return true;
  
      if(array[index] === sequence[seqIndex]){
        seqIndex+=1
      }
    }
    
    return SEQUENCE_LENGHT === seqIndex;
  }
  