Array.prototype.toTwenty = function () {
  var myarr=[];
	 for (i=1; i<21;i++ ){
    	myarr.push(i);
  	}
 	return myarr;
};
Array.prototype.toForty = function () {
  var myarr=[];
	 for (i=2; i<41;i+=2 ){
    	myarr.push(i);
  	}
 	return myarr;
};
Array.prototype.toOneThousand = function () {
  var myarr=[];
	 for (i=10; i<1001;i+=10 ){
    	myarr.push(i);
  	}
 	return myarr;
};

Array.prototype.search = function (num) {

	var ArrayToSearch= this
	var stepcounter=0; //increment at the end of every step
	var ArrayDict=decidemidpointIndex(0,ArrayToSearch.length-1)

	

	for (i=0;i<ArrayToSearch.length;i++){
		//special cases
		if(ArrayDict.start===ArrayDict.end ){
			if (ArrayToSearch[ArrayDict.start]===num){
				return {"count":stepcounter, "index":ArrayDict.start, "length":ArrayToSearch.length};
			}else{
				return {"count":stepcounter, "index":-1, "length":ArrayToSearch.length};
			}	
		}

		if(ArrayToSearch[ArrayDict.midpoint]===num ){
			return {"count":stepcounter, "index":ArrayDict.midpoint, "length":ArrayToSearch.length}
		}else if (ArrayToSearch[0]===num){
			return {"count":stepcounter, "index":0, "length":ArrayToSearch.length}
		}else if(ArrayToSearch[ArrayToSearch.length-1]===num){
			return {"count":stepcounter, "index":ArrayToSearch.length-1, "length":ArrayToSearch.length-1}
		}else if(ArrayToSearch[ArrayDict.midpoint]>num){
			//Scenario A
			
			ArrayDict=decidemidpointIndex(ArrayDict.start,ArrayDict.midpoint-1)
			
		}
		else{
			//Scenario B
			//alert("Before B " + ArrayDict.start + '\n' + ArrayDict.midpoint  + '\n' + ArrayDict.end)
			ArrayDict=decidemidpointIndex(ArrayDict.midpoint+1,ArrayDict.end)
			//alert("After B " + ArrayDict.start + '\n' + ArrayDict.midpoint  + '\n' + ArrayDict.end)
		} 
		stepcounter=stepcounter +1;  //start counting
	
	}




			//start should always be more than end, and endindex should not be 0
			//decide the start and the end indices before calling the array. dont include what has been called before
			function decidemidpointIndex(startindex0,endindex0){
				if (endindex0===0){
					return {'start':endindex0, 'end':endindex0, 'midpoint':endindex0 };
				}

				var arraylength=(endindex0-startindex0)+1

				if (arraylength===1){
					return {'start':startindex0, 'end':endindex0, 'midpoint':startindex0 };
				}else if(arraylength<1){
					return {'start':startindex0, 'end':startindex0, 'midpoint':startindex0 }; //may be dangerous
				}

			    if ((arraylength%2)===0){
			    	
					return {'start':startindex0, 'end':endindex0, 'midpoint':((arraylength/2)-1) + startindex0 };
				}else{

					return {'start':startindex0, 'end':endindex0, 'midpoint':(parseInt(arraylength/2))+ startindex0  };

				}
			}
};






