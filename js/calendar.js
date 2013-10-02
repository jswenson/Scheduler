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
    var date = new Date();
    var mday = date.getDay();
    var wday = date.getDate();
    var month = date.getMonth(); 
    var year = date.getFullYear();
    var days = getTotalDays(year, month);    

    function getDays(days, month, year) { //generate calendar body
        var daysStr = '<tr>';        
        var weekday = whichDayOfWeek(year, month, 1); 
        for (var d=1; d<weekday; d++) { // empty cells before
            daysStr += '<td class="dayBox"></td>'; 
        }
        for (var i=1; i<=days; i++) {            
            daysStr += '<td class="dayBox"><div class="dateLg">' + i + '</div>' + getAppts(i, month, year) + '</td>';
            var w = weekday - 1 + i;
            if (w%7 === 0) {
                daysStr += '</tr><tr>';
            }
        }
        var endEmptyD = (weekday + days)%7;
        if (endEmptyD !== 0) {
            for (var d=0; d<endEmptyD; d++) { // empty cells after
                daysStr += '<td class="dayBox"></td>'; 
            }
        }
        daysStr += '</tr>';
        return daysStr;
    }
    document.getElementById('calendar').innerHTML = getDays(days, month, year);
  
})();