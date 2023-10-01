def isValidSubsequence(array, sequence):   
    indexSeq = 0
    seqLenght = len(sequence)
    for number in array:
        if(indexSeq == seqLenght):
            return True
            
        if(number == sequence[indexSeq]):
            indexSeq+=1


    return indexSeq == seqLenght
