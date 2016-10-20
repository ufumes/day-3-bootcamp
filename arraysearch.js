
function findMissing(arr1, arr2){
	//check the length. If they are equal.
	if (arr1.length===arr2.length){
		return 0
	}else if (arr1.length>arr2.length){
		for(i=0; i< arr1.length;i++){
			if (arr2.indexOf(arr1[i])==-1){
				return arr1[i]
			} 
		}
	}else{
		for(b=0; b< arr2.length;b++){
			if (arr1.indexOf(arr2[b])==-1){
				return arr2[b]
			} 
	}
	}
}