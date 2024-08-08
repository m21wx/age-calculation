
	
			let selectYear = document.querySelector('#year')
			let selectMonth = document.querySelector('#month')
			let selectDay = document.querySelector('#day')
			console.log(selectDay)
			for(let i = 1 ; i <=31; i++){
				
			    selectDay.innerHTML+=`<option value='${i}'> ${i}</option>`;
			
			}
			for(let i = 0 ; i <12; i++){
				
				 
			    selectMonth.innerHTML+=`<option value='${i}'> ${i+1}</option>`;
			
			}

			function myFunctionYear(start , and){
						for(let i = start ; i >= and; i--){
				
			    selectYear.innerHTML+=`<option value='${i}'> ${i}</option>`;
			
			}	
			}
		
			myFunctionYear(new Date().getFullYear() ,1970 )
			let old = document.querySelector('.textOld');
			console.log(old)
		function age(){
			let yv = selectYear.value;
			let mv = selectMonth.value;
			let dv = selectDay.value;
			
			let date1 = new Date()
			let date2 = new Date(yv,mv,dv)
			let d1 = date1.getDate()
			let m1 = date1.getMonth() ;
			let y1 = date1.getFullYear()
			// ===========
			let d2 = date2.getDate()
			let m2 = date2.getMonth();
			let y2 = date2.getFullYear()
			
			
			
		
			
				console.log(m1)
				let age = y1 - y2; 
				let m = m1 - m2; 
				let d = d1 - d2; 
				let arrMonth =[31,29,31,30,31,30,31,31,30,31,30,31]	;
				
				console.log( arrMonth[m1])
				if(d1 < d2){
					d = (d1 + 31) - d2;
					
				}
				if(m1 <= m2){
					m = (m1 + 12 ) - m2;
					m--;
					age--;
				}
				//<p>  العمر: 29 سنة و 11 شهر و 29 يوم </p>
			old.innerHTML=`
				<p> العمر :${age} سنة و ${m} شهر و ${d} يوم </p>
			`;
						
					
			

		}

		
		
		document.querySelector('button')
		.addEventListener('click', age)



		
		



