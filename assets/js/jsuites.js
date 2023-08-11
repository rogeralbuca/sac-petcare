var jsuites = jSuites.calendar(document.getElementById('jsuitesCalendar'), {
    // Define the months in portuguese
    months: ['Jan', 'Fev', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    // Define the months in portuguese
    monthsFull: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'April',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ],
    // Define the weekdays
    weekdays: [
        'Domingo',
        'Segunda',
        'Terça',
        'Quarta',
        'Quinta',
        'Sexta',
        'Sábado'
    ],
    // Labels
    textDone: 'Feito',
    textReset: 'Limpar',
    textUpdate: 'Atualizar',
    // Weekday to start - Starts on Monday
    startingDay: 1,
    // Format
    format: 'YYYY-MM-DD',
    onupdate: function(a,b) {
    },
});

var reagendamentoCalendar = jSuites.calendar(document.getElementById('reagendamentoCalendar'), {
    // Define the months in portuguese
    months: ['Jan', 'Fev', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    // Define the months in portuguese
    monthsFull: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'April',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ],
    // Define the weekdays
    weekdays: [
        'Domingo',
        'Segunda',
        'Terça',
        'Quarta',
        'Quinta',
        'Sexta',
        'Sábado'
    ],
    // Labels
    textDone: 'Feito',
    textReset: 'Limpar',
    textUpdate: 'Atualizar',
    // Weekday to start - Starts on Monday
    startingDay: 1,
    // Format
    format: 'YYYY-MM-DD',
    onupdate: function(a,b) {
    },
});

/*--------------------------------------------------------------
# Set Fullcalendar ChangeView TimeGridDay
--------------------------------------------------------------*/
$(document).ready(function() {
    $('.jcalendar-set-day').click(function() {
        var date = moment(jsuites.getValue()).format('YYYY-MM-DD');
        changeView(date);
    });
});

/*--------------------------------------------------------------
# Custom CSS 
--------------------------------------------------------------*/

// Set day 13
$('.jcalendar-set-day:contains("13"):last').css('background-color', 'red');
$('.jcalendar-set-day:contains("13"):last').css('color', 'white');

// Set day 25
$('.jcalendar-set-day:contains("25"):last').css('background-color', 'green');
$('.jcalendar-set-day:contains("25"):last').css('color', 'white');

// Remove controls
$('.jcalendar-controls').css('display', 'none');
$('.jcalendar-backdrop').css('display', 'none');

// Set font-size
$('.jcalendar-inline').css('font-size', '12px')
