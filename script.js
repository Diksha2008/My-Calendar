var calendarLibarary = function() {
		var prevYear = document.getElementById('prevYear');
		var prevMonth = document.getElementById('prevMonth');
		var nextYear = document.getElementById('nextYear');
		var nextMonth = document.getElementById('nextMonth');
		var todayButton = document.getElementById('today');

		var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		
		var today = new Date();
		var todayDate = today.getDate();
		var todayMonth = today.getMonth();
		var todayYear = today.getFullYear();
		var year;
		var month;


		function printCalendar(year, month) {
			var cols = 6;
			var currentDate = new Date(year, month, 1);
			
			var currentDateDay = currentDate.getDay();

			//start from last monday of previous month
			currentDate.setDate(currentDate.getDate()- currentDateDay);
			
			var cells = document.querySelectorAll('tbody tr td');

			for(var i = 0; i < 7; i++){
				var head = document.getElementById('head')
				head.innerText = months[month] + ', ' + year;
				for(var j = 0; j < cols; j++){
					if(currentDate.getMonth() == todayMonth && currentDate.getFullYear() == todayYear && currentDate.getDate() == todayDate){
						cells[(i * cols) + j].style['font-weight'] = 'bold';
						cells[(i * cols) + j].style['border'] = '1px solid black';
						cells[(i * cols) + j].style['background-color'] = '#fcf8e3';
					}

					//default values
					else{
						cells[(i * cols) + j].style.color = '';
						cells[(i * cols) + j].style['border'] = '';
						cells[(i * cols) + j].style['font-weight'] = '';
						cells[(i * cols) + j].style['background-color'] = '';
					}

					if (currentDate.getMonth() != month) {
						cells[(i * cols) + j].style.color = 'lightgrey';
					}
				
					cells[(i * cols) + j].innerText = currentDate.getDate();
					currentDate.setDate(currentDate.getDate() + 1);
				}
			}
		}
		

		function prevMonthHelper(){
			today.setMonth(today.getMonth() - 1);
			month = today.getMonth();
			year = today.getFullYear()
			printCalendar(year, month);
		}

		function prevYearHelper(){
			today.setYear(today.getFullYear() - 1);
			console.log(today.getMonth());
			month = today.getMonth();
			year = today.getFullYear()
			printCalendar(year, month);
		}

		function nextMonthHelper(){
			today.setMonth(today.getMonth() + 1);
			month = today.getMonth();
			year = today.getFullYear()
			printCalendar(year, month);
		}

		function nextYearHelper(){
			today.setYear(today.getFullYear() + 1);
			month = today.getMonth();
			year = today.getFullYear();
			printCalendar(year, month);
		}

		function todayHelper(){
			printCalendar(todayYear, todayMonth);
		}
		printCalendar(today.getFullYear(), today.getMonth());
		prevMonth.addEventListener('click', prevMonthHelper);
		nextMonth.addEventListener('click', nextMonthHelper);
		prevYear.addEventListener('click', prevYearHelper);
		nextYear.addEventListener('click', nextYearHelper);
		todayButton.addEventListener('click', todayHelper);
	}
	calendarLibarary();