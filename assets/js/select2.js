$(function () {
    $('#especialistas-multiple-select, #unidades-filtro-multiple-select, #especialidade-filtro-multiple-select, #especialista-filtro-multiple-select, #especialidades-cadastro-multiple-select, #procedimentos-cadastro-multiple-select').select2({
        theme: "bootstrap-5",
        width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
        placeholder: $(this).data('placeholder'),
        closeOnSelect: false,
        tags: true,
        dropdownCssClass: "select2--small",
        selectionCssClass: "select2--small",
    });
});

