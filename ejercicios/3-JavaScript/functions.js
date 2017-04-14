var maxium = function() {
	let args = arguments;
	let max = -Infinity;
	for(var i=0; i<args.length; i++){
        if(typeof(args[i])=='number'){
        	if (args[i]>max){
        		max=args[i];
        	}
        }else {
        	return "error: type of arguments not valid"
        }
    }
    return max;
}

var minium = function() {
	let args = arguments;
	let min = Infinity;
	for(var i=0; i<args.length; i++){
        if(typeof(args[i])=='number'){
        	if (args[i]<min){
        		min=args[i];
        	}
        }else {
        	return "error: type of arguments not valid"
        }
    }
    return min;
}

var fib = function(pos) {
	let a = 0;
	let b = 1;
	let c = 0;
	let result=0;
	for (var i=0;i<pos;i++) {
		result = c;
		a=b;
		b=c;
		c=a+b;
	}
	return result;

}