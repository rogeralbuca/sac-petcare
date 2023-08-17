(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    if (all) {
      select(el, all).forEach(e => e.addEventListener(type, listener))
    } else {
      select(el, all).addEventListener(type, listener)
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Search bar toggle
   */
  if (select('.search-bar-toggle')) {
    on('click', '.search-bar-toggle', function (e) {
      select('.search-bar').classList.toggle('search-bar-show')
    })
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Initiate tooltips
   */
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })  

  /**
   * Initiate Bootstrap validation check
   */
  var needsValidation = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(needsValidation)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })

})();

/**
 * Show Alert Function
 */
const showAlert = (message, type, icon) => {
  $("#icon-alert").addClass(icon);
  $("#message-alert").text(message);
  $('.alert').addClass(type);
  $('.alert').show();
}

/**
 * Show Modal Function
 */
const showModal = (modal) => {
  $(`#${modal}`).modal('show');
}

/**
 * Toggle FullScreen Function
 */
const toggleFullScreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}

/**
* Button Toogle Fullscreen
*/
$("#toggleBtn").on('click', function () {
  $(this).children('.bi-fullscreen-exit, .bi-fullscreen').toggleClass("bi-fullscreen-exit bi-fullscreen");
});

/**
* Button Toogle Fullscreen
*/
$("#agendaBtn").on('click', function () {
  var calendar = $('.calendar');
  console.log(this)

  if(calendar.css('opacity') === '0') {
    calendar.css({
      'opacity': '0.9',
    });
    $("#agendaBtn").addClass('active');
  } else {
    calendar.css({
      'opacity': '0',
    });
    $("#agendaBtn").removeClass('active');
  }
});

/**
 * Constantes Offcavas Bootstrap
 */
const offcanvas = document.getElementById('offcanvasWithBackdrop')
const bsOffcanvas = new bootstrap.Offcanvas(offcanvas)

/**
 * Show ffcavas Bootstrap
 */
function offcanvasShow() {
    bsOffcanvas.show()
}

/**
 * Hide ffcavas Bootstrap
 */
function offcanvasHide() {
  bsOffcanvas.hide()
}

/**
 * Change Event Status Select
 */
function statusChange(event) {
  if(event.type === "change" && event.target.value === "cancelado") {
    $('#calendarModal').modal('hide')
    $('#tipoCancelamentoModal').modal('show');
  } else if (event.type === "change" && event.target.value === "reagendamento") {
    $('#calendarModal').modal('hide')
    $('#reagendamentoModal').modal('show');
  }
}
