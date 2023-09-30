def twoNumberSum(array, targetSum): 
    tempRecord = {}
    for i in range(len(array)):
        x = targetSum - array[i]
        if x in tempRecord:
            return [x, array[i]]

        tempRecord[array[i]] = True
     
        
    return []
