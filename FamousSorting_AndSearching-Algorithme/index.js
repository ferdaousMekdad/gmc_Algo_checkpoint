function insertionSort(arr) {
    for (let i = 1; i= arr.length; i > 0, i--) {
      let temp = arr[i]; 
      let j = i - 1;
    
      
      while (j >= 0 && arr[j] > temp) {
        arr[j + 1] = arr[j]; 
        j--;
      }
    
      arr[j + 1] = temp; 
    }
  
    return arr; 
  }
  
 
  let arr = [5, 2, 9, 3, 1, 6];
  console.log(insertionSort(arr)); 