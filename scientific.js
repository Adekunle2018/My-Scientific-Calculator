
	var fval = "";
	var sval = "";
	var arith = "";
	state = false



function OnAndOff()
 {

			if (state) {
				    scren.innerHTML = ""; 
					state = false
					keystart.innerHTML = "ON"
					
				}
				else{
					scren.innerHTML = "0";
					state = true;
					keystart.innerHTML = "OFF"
				}
}

	function b(y){

		if(state){
			if (scren.innerHTML == "0") {
				scren.innerHTML = y;
			}
			else{
				scren.innerHTML+= y;
			}
		}
	}

		function del(){

		  var a = scren.innerHTML;
		  var b = a.length;
		  if (b==1) {
		  	scren.innerHTML =0;
		  }
		  else{
		  	scren.innerHTML = a.slice(0,b-1)
		  }
		}

		function dele(){
			if (state) {
			if (scren.innerHTML = scren.innerHTML.length) {
				scren.innerHTML = 0;
			}
		}
		}
		function operator(x){
			               fval = scren.innerHTML;
			              scren.innerHTML  += x;
			              arith = x;


			 }

			 function equal()
			 {
			 	if (state) 
			 	{
			 		scren.innerHTML = eval(scren.innerHTML);
			 	 
				 	// sval = scren.innerHTML;
				 	// if (arith == 'minus') {

				 	// 	scren.innerHTML = parseFloat(fval)-parseFloat(sval);
				 	// }
				 	//  if (arith == 'plus') {
				 	// 	scren.innerHTML = parseFloat(fval) + parseFloat(sval);
				 	// }

				 	// if (arith == 'mul') {
				 	// 	scren.innerHTML = parseFloat(fval) * parseFloat(sval);
				 	// }
				 	// if (arith == 'div') {
				 	// 	scren.innerHTML = parseFloat(fval)/ parseFloat(sval);
				 	// }

				 	// 
			 	}	

			 }  


			 function scientific(z)
			 {
	
			 	if (z == 'squarr')
			 	 {
				 	 scren.innerHTML = Math.sqrt(scren.innerHTML);
				 	
				 }	
				 	else if (z  == 'exp')
				 {
				 		scren.innerHTML = Math.exp(scren.innerHTML);
				 }	

				 	else if (z  == 'log')
				 {
				 		scren.innerHTML = Math.log10(scren.innerHTML);
				 }	
				 	else if (z  == 'in') 
				 {
				 		scren.innerHTML = Math.log(scren.innerHTML);
				 }
				 	else if (z  == 'cos') 
				 {
				 		scren.innerHTML = Math.cos(scren.innerHTML);
				 }		
				 	else if (z  == 'tan')
				 {
				 		scren.innerHTML = Math.tan(scren.innerHTML);
				 }	
				 	else if (z  == 'sin') 
				 {
				 		scren.innerHTML = Math.sin(scren.innerHTML);
				 }	
				 	else if (z  == 'sqr') 
				 {
				 		scren.innerHTML = Math.pow(scren.innerHTML,2);
				 }	
				 	else if (z  == 'pi') 
				 {
				 		scren.innerHTML = Math.PI;
			 	 }
			 }