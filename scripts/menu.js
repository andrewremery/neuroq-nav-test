$(document).ready(function () {

    // Allow for nested sub menus
    $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
        if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
            
        }
        var $subMenu = $(this).next('.dropdown-menu');
        $subMenu.toggleClass('show');
       
        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
            $('.dropdown-submenu .show').removeClass('show');
          
        });

        return false;
    });

    // Toggle mobile menu when hamburger is clicked
    $('#hamburg-icon').on('click', function (e) {
        $('header').toggleClass("nav-is-open");
        $('#navbarNavDropdown').toggleClass("show");
        $('#hamburg-icon i').toggleClass("fa-bars fa-times");
        $('.fa-search , .fa-shopping-bag').toggle();
        e.preventDefault();
    });

    // Make sub menu trigger on mouse in/out on desktop
    if (window.innerWidth > 768) { //if bigger then tablet

        everyitem.addEventListener('mouseleave', function (e) {
            let el_link = this.querySelector('.dropdown-toggle');

            if (el_link != null) {
                let nextEl = el_link.nextElementSibling;
                el_link.classList.remove('show');
                nextEl.classList.remove('show');
            }
        })

        document.querySelectorAll('.navbar .nav-item').forEach(function (everyitem) {

            everyitem.addEventListener('mouseover', function (e) {

                let el_link = this.querySelector('.dropdown-toggle');

                if (el_link != null) {
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.add('show');
                    nextEl.classList.add('show');
                }

            });
            everyitem.addEventListener('mouseleave', function (e) {
                let el_link = this.querySelector('.dropdown-toggle');

                if (el_link != null) {
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.remove('show');
                    nextEl.classList.remove('show');
                }
            })
        });
    } //end innerWidth

}); //end ready