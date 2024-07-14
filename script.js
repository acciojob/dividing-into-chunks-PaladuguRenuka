const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	for(let i=0; i<arr.length; i++){
      sum = sum + arr[i]
      //console.log("0")
      if(sum <= n){
        subArray.push(arr[i])
      }
      else{
          i--
          sum=0
          array.push(subArray)
          subArray = []
        }
      
  }
 array.push(subArray)
return(array)
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
