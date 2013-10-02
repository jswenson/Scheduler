(function(){
    function getTotalDays(year, month) { //get total day in month
        return new Date(year, month, 0).getDate();
    }    
    function getAppts(day, month, year) {
        return "Appointments for " + month + "/" + day + "/" + year;
    }
    function whichDayOfWeek(year, month, day){
        var date = new Date(year, month, day);
        var weekday = date.getDay();
        return weekday;
    }
    function addClickHandlers() {
        next = document.getElementById('next');
        prev = document.getElementById('prev');
        next.onclick = function(){
            month = month+1;
            insertCalendar();   
        }           
        prev.onclick = function(){
            month = month-1;
            insertCalendar();   
        }
        if (month <12 && month >= 1) {
            prev.style.display = 'block';
            next.style.display = 'block';
        } else if (month >= 12) {            
            next.style.display = 'none';               
        } else if (month === 0) {
            prev.style.display = 'none';                
        }             
    }
    function insertCalendar() {
        if(calendar){
            calendar.innerHTML = getDays(days, month, year);
        }
        addClickHandlers();
    }
    var date = new Date();
    var mday = date.getDay();
    var wday = date.getDate();
    var month = date.getMonth(); 
    var year = date.getFullYear();
    var days = getTotalDays(year, month);    

    function getDays(days, month, year) { //generate calendar body
        var daysStr = '<div id="prev">Previous Month</div><div id="next">Next Month</div><table cellpadding="0" cellspacing="0" class="calTbl"><thead>';        
        daysStr += '<tr class="calHeader">';
        daysStr += '<th class="calDay">Sunday</th>';
        daysStr += '<th class="calDay">Monday</th>';
        daysStr += '<th class="calDay">Tuesday</th>';
        daysStr += '<th class="calDay">Wednesday</th>';
        daysStr += '<th class="calDay">Thursday</th>';
        daysStr += '<th class="calDay">Friday</th>';
        daysStr += '<th class="calDay">Saturday</th>';
        daysStr += '</tr></thead><tbody><tr>';        
        var weekday = whichDayOfWeek(year, month, 1); 
        for (var d=1; d<weekday; d++) { // empty cells before
            daysStr += '<td class="dayBoxEmpty"></td>'; 
        }
        for (var i=1; i<=days; i++) {            
            daysStr += '<td class="dayBox"><div class="dateLg">' + i + '</div>' + getAppts(i, month, year) + '</td>';
            var w = weekday - 1 + i;
            if (w%7 === 0) {
                daysStr += '</tr><tr>';
            }
        }
        var endEmptyD = (weekday + days)%7;
        for (var d=0; d<endEmptyD; d++) { // empty cells after
            daysStr += '<td class="dayBoxEmpty"></td>'; 
        }
        daysStr += '</tr></tbody></table>';
        return daysStr;
    }
    var calendar = document.getElementById('calendar');
    insertCalendar();    
    
})();