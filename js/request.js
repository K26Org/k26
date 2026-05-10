var API_URL = "https://k26api.runasp.net/api/";
var countries = [];
var courses = [];
function loadCountries() {
    $.ajax({
        url: API_URL + "Country/GetAll",
        method: "GET",
        success: function (res) {
            countries = res.data;
            renderCountries();
        },
        error: function (err) {
            console.error(err);
        }
    });
}
function renderCountries() {    
    const $countrySelect = $('#countryId');
    $countrySelect.empty();
    $countrySelect.append('<option value="">Select a country…</option>');
    countries.forEach(country => {
        let text = country.code + " " + country.phoneCode;
        $countrySelect.append(`<option value="${country.id}">${text} </option>`);
    });
}

function loadCourses() {
    $.ajax({
        url: API_URL + "Course/GetAll",
        method: "GET",
        success: function (res) {
            courses = res.data;
            renderCourses();
        },
        error: function (err) {
            console.error(err);
        }
    });
}

function renderCourses() {
    const $courseSelect = $('#courseId');
    $courseSelect.empty();
    $courseSelect.append('<option value="">Select a course…</option>');
    courses.forEach(course => {
        $courseSelect.append(`<option value="${course.id}">${course.name}</option>`);
    });
}

$(document).ready(function () {

    loadCountries();
    loadCourses();
    /* CURSOR */
    let mx = 0, my = 0, rx = 0, ry = 0;
    $(document).on('mousemove', function (e) {
        mx = e.clientX; my = e.clientY;
        $('#cursor').css({ left: mx, top: my });
    });
    function animateRing() {
        rx += (mx - rx) * 0.12;
        ry += (my - ry) * 0.12;
        $('#cursorRing').css({ left: rx, top: ry });
        requestAnimationFrame(animateRing);
    }
    animateRing();
    $('a, button, .course-card, .mode-card').on('mouseenter', function () {
        $('#cursor').css({ transform: 'translate(-50%,-50%) scale(2)', background: 'var(--green)' });
        $('#cursorRing').css({ transform: 'translate(-50%,-50%) scale(0.5)', borderColor: 'rgba(57,255,20,0.5)' });
    }).on('mouseleave', function () {
        $('#cursor').css({ transform: 'translate(-50%,-50%) scale(1)', background: 'var(--cyan)' });
        $('#cursorRing').css({ transform: 'translate(-50%,-50%) scale(1)', borderColor: 'rgba(0,229,255,0.5)' });
    });

    /* NAVBAR SCROLL */
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 60) {
            $('#navbar').addClass('scrolled');
        } else {
            $('#navbar').removeClass('scrolled');
        }
    });

    /* SCROLL ANIMATIONS */
    function checkVisible() {
        $('.fade-up').each(function () {
            const top = $(this)[0].getBoundingClientRect().top;
            if (top < window.innerHeight - 80) {
                $(this).addClass('visible');
            }
        });
    }
    $(window).on('scroll', checkVisible);
    checkVisible();

    /* SMOOTH SCROLL */
    $('a[href^="#"]').on('click', function (e) {
        const target = $($(this).attr('href'));
        if (target.length) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: target.offset().top - 80 }, 600, 'swing');
        }
    });

    /* NOTIFY FORM */
    $('#notifyBtn').on('click', function () {
        const email = $('#notifyEmail').val().trim();
        if (email && email.includes('@')) {
            $('#notifySuccess').fadeIn();
            $('#notifyEmail').val('');
            setTimeout(() => $('#notifySuccess').fadeOut(), 4000);
        } else {
            $('#notifyEmail').css('border-color', 'var(--orange)');
            setTimeout(() => $('#notifyEmail').css('border-color', ''), 2000);
        }
    });

    /* ENROLLMENT FORM */
    $('#submitBtn').on('click', function () {
        const name = $('#fname').val().trim();
        const phone = $('#fphone').val().trim();
        const email = $('#femail').val().trim();
        const countryId = $('#countryId').val().trim();
        const courseId = $('#courseId').val().trim();
        const message = $('#fmsg').val().trim();

        if (!validate(email)) {
            alert("Invalid email format");
            return;
        }

        const row = countries.find(x => x.id === parseInt(countryId));

        var phoneNumber = libphonenumber.parsePhoneNumberFromString(phone, row.code);

        if (phoneNumber && phoneNumber.isValid()) {
            //valid
        } else {
            alert("Invalid phone format.");
            return;
        }       

        if (name && phone) {
            $.ajax({
                url: API_URL + "Request/Create",
                method: "POST",                
                contentType: "application/json",
                data: JSON.stringify({
                    countryId: parseInt(countryId),
                    name: name,
                    phone: phone,
                    email: email,
                    courseId: parseInt(courseId),
                    message: message
                }),
                success: function (res) {
                    alert("Saved successfully!");
                    $('#formSuccess').fadeIn();
                    $('#fname, #fphone, #femail, #courseId, #countryId, #fmsg').val('');
                    setTimeout(() => $('#formSuccess').fadeOut(), 5000);
                },
                error: function (err) {
                    console.error(err);
                    alert("Error saving data");
                }
            });

        } else {
            if (!name) $('#fname').css('border-color', 'var(--cyan)');
            if (!phone) $('#fphone').css('border-color', 'var(--cyan)');
            setTimeout(() => {
                $('#fname, #fphone').css('border-color', '');
            }, 2000);
        }
    });

});