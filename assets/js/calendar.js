document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        themeSystem: 'bootstrap5',
        locale: 'pt-br',
        initialView: 'timeGridWeek',
        navLinks: true,
        dayMaxEvents: true,
        weekends: true,
        allDaySlot: false,
        slotDuration: '00:30:00',
        snapDuration: '00:30:00',
        scrollTime: '08:00:00',
        slotMinTime: '08:00:00',
        slotMaxTime: '19:00:00',
        selectable: true,
        editable: true,
        customButtons: {
            sidebar: {
                click: function () {
                    sidebarCollapse();
                }
            },
            search: {
                click: function () {
                    $('#pesquisaModal').modal('show');
                }
            }
        },
        buttonIcons: {
            sidebar: 'bi bi-filter',
            search: 'bi bi-search',
        },
        viewDidMount: function (info) {
            $(".fc-sidebar-button").tooltip({
                title: "Unidate: SP – Ibirapuera Especialidade: Cardiologia Veterinário: Dra. Maria Socorro Alencar ",
                placement: 'right',
                trigger: 'hover',
                container: 'body'
            });
        },
        headerToolbar:
        {
            left: 'sidebar search prev,next',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        slotLabelFormat:
        {
            hour: '2-digit',
            minute: '2-digit',
            omitZeroMinute: false,
        },
        buttonText: {
            today: "Hoje",
            month: "Mês",
            week: "Semana",
            day: "Dia",
            list: 'Lista'
        },
        eventSources: [
            {
                url: 'assets/resource/resource-one.json',
                failure: function () {
                    showAlert("Houve um erro ao buscar eventos!", "alert-danger", "bi-exclamation-octagon");
                },
                color: '#008000',
                textColor: '#FFFFFF'
            },
            {
                url: 'assets/resource/resource-two.json',
                failure: function () {
                    showAlert("Houve um erro ao buscar eventos!", "alert-danger", "bi-exclamation-octagon");
                },
                color: '#0000FF',
                textColor: '#FFFFFF'
            },
            {
                url: 'assets/resource/resource-three.json',
                failure: function () {
                    showAlert("Houve um erro ao buscar eventos!", "alert-danger", "bi-exclamation-octagon");
                },
                color: '#FF0000',
                textColor: '#FFFFFF'
            }
        ],
        select: function (info) {
            clearForm();

            $('#calendarModal').modal('show');

            var date = moment(info.start).format('DD/MM/YYYY');

            $("#modalTitle").text(`Novo Agendamento - ${date}`);

            const timeStart = padTo2Digits(info.start.getHours()) + ':' + padTo2Digits(info.start.getMinutes());

            $("#timeStart").val(timeStart);

            const timeEnd = padTo2Digits(info.end.getHours()) + ':' + padTo2Digits(info.end.getMinutes());

            $("#timeEnd").val(timeEnd);

            $('#submitButton').on('click', function () {
                calendar.addEvent({
                    title: $("#titulo").val(),
                    start: info.start,
                    end: info.end,
                    description: $("#observacao").val()
                });

                $('#submitButton').unbind('click');
                $('#calendarModal').modal('hide');
            });
        },
        eventClick: function (info) {
            clearForm();

            $('#calendarModal').modal('show');

            var date = moment(info.event.start).format('DD/MM/YYYY');

            $("#modalTitle").text(`Editar Agendamento - ${date}`);

            $("#titulo").val(info.event.title);

            const timeStart = padTo2Digits(info.event.start.getHours()) + ':' + padTo2Digits(info.event.start.getMinutes());

            $("#timeStart").val(timeStart);

            const timeEnd = padTo2Digits(info.event.end.getHours()) + ':' + padTo2Digits(info.event.end.getMinutes());

            $("#timeEnd").val(timeEnd);

            $("#observacao").val(info.event.extendedProps.description);
        },
    });

    function padTo2Digits(num) {
        return String(num).padStart(2, '0');
    }

    function clearForm() {
        $("#modalTitle").text("");
        $("#titulo").val("");
        $("#status").val([]);
        $("#tutor").val("");
        $("#animal").val([]);
        $("#procedimento").val([]);
        $("#veterinario").val([]);
        $("#observacao").val("");
    }

    calendar.render();
    
    changeView = function changeView(date) {
        console.log(date);
        calendar.changeView('timeGridDay', date);
    }
});



