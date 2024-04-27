<<<<<<< HEAD
; (function ($) { 
    const doc = $(document);
    
    class AmanaCloth {
        constructor() {
            this.headerTickerSlider();
            this.searchToggleBox();
            this.quantityCounter();
            this.minicartToggler();
            this.closeMinicart();
            this.responsiveMobileMenu();
            this.responsiveSlideSubmenu();
            
        }

        // header ticker slider
        headerTickerSlider() {
            $('#header-ticker-slider').owlCarousel({
                items: 1,
                loop: true,
                center: true,
                dots: false,
                lazyLoad: true,
                nav: true,
                navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>']
            });
        }

        searchToggleBox(){
            $('#search-toggle-button').on('click', function(e){
                e.preventDefault();
                let windowWidth = $(window).width();
                let _this       = $(this);
                let icon        = _this.children('i');
                let searchbox   = _this.closest('.menu-flex').siblings('.search-box');

                if( windowWidth < 992 ){
                    if( icon.hasClass('fa-magnifying-glass') ){
                        icon.removeClass('fa-magnifying-glass').addClass('fa-xmark');
                        searchbox.stop().slideDown();

                    }else{
                        icon.addClass('fa-magnifying-glass').removeClass('fa-xmark');
                        searchbox.stop().slideUp();
                    }
                }else{
                    if( icon.hasClass('fa-magnifying-glass') ){
                        icon.removeClass('fa-magnifying-glass').addClass('fa-xmark');
                        searchbox.addClass('show');

                    }else{
                        icon.addClass('fa-magnifying-glass').removeClass('fa-xmark');
                        searchbox.removeClass('show');
                    }
                }
            });

            $('.search-box').on('click', '#close-search-box', function(e){
                e.preventDefault();
                let windowWidth = $(window).width();
                let _this       = $(this);
                let iconClass   = _this.closest('.search-box').siblings('.menu-flex').find('#search-toggle-button').children('i');

                if( windowWidth > 992 ){
                    iconClass.addClass('fa-magnifying-glass').removeClass('fa-xmark');
                    _this.closest('.search-box').removeClass('show');
                }
            });
        }

        quantityCounter(){
            $('.quentity-counter').on('click', 'button', function(e){
                e.preventDefault();
                let _this    = $(this);
                let getValue = parseInt(_this.siblings('input[type="number"]').val());
                let step     = parseInt(_this.siblings('input[type="number"]').attr('step'));
                let min      = parseInt(_this.siblings('input[type="number"]').attr('min'));
                let max      = parseInt(_this.siblings('input[type="number"]').attr('max'));


                if( _this.hasClass('increment') ){
                    if( getValue < max ){
                        _this.siblings('input[type="number"]').val( getValue + step )
                    }
                }
                if( _this.hasClass('decrement') ){
                    if( getValue > min ){
                        _this.siblings('input[type="number"]').val( getValue - step )
                    }
                }
            })    
        }

        minicartToggler(){
            $('#minicart-toggler').on('click', function(e){
                e.preventDefault();
                let minicart = $('.mini-cart-parent');
                minicart.toggleClass('show');
            })
        }

        closeMinicart(){
            $('#close-minicart').on('click', function(e){
                e.preventDefault();
                $(this).closest('.mini-cart-parent').removeClass('show');
            });

            // destroy minicart
            $('.mini-cart-parent').on('click', function(e){
                console.log(e.target.className)
                let cssClass = e.target.className;
                if( cssClass == 'mini-cart-parent show' ){
                    $(this).removeClass('show');
                }
            })
        }
        responsiveMobileMenu(){
            $('.menu-toggler').on('click', function(e){
                e.preventDefault();
                let icon = $(this).children('i');
                if( icon.hasClass('fa-bars-staggered')){
                    icon.removeClass('fa-bars-staggered').addClass('fa-xmark')
                }else{
                    icon.removeClass('fa-xmark').addClass('fa-bars-staggered');
                }
                $('.mobile-menu').stop().slideToggle();
            })
        }

        responsiveSlideSubmenu(){
            $('.responsive-slide-menu').on('click', function(e){
                e.preventDefault();
                $(this).siblings('ul.responsive-submenu').addClass('show');
            });

            $('.responsive-slide-close').on('click', function(e){
                e.preventDefault();
                $(this).closest('ul.responsive-submenu').removeClass('show');
            });
        }
        
    }

    doc.ready(function () { new AmanaCloth; });
    
=======
; (function ($) { 
    const doc = $(document);
    
    class AmanaCloth {
        constructor() {
            this.headerTickerSlider();
            this.searchToggleBox();
            this.quantityCounter();
            this.minicartToggler();
            this.closeMinicart();
            this.responsiveMobileMenu();
            this.responsiveSlideSubmenu();
            
        }

        // header ticker slider
        headerTickerSlider() {
            $('#header-ticker-slider').owlCarousel({
                items: 1,
                loop: true,
                center: true,
                dots: false,
                lazyLoad: true,
                nav: true,
                navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>']
            });
        }

        searchToggleBox(){
            $('#search-toggle-button').on('click', function(e){
                e.preventDefault();
                let windowWidth = $(window).width();
                let _this       = $(this);
                let icon        = _this.children('i');
                let searchbox   = _this.closest('.menu-flex').siblings('.search-box');

                if( windowWidth < 992 ){
                    if( icon.hasClass('fa-magnifying-glass') ){
                        icon.removeClass('fa-magnifying-glass').addClass('fa-xmark');
                        searchbox.stop().slideDown();

                    }else{
                        icon.addClass('fa-magnifying-glass').removeClass('fa-xmark');
                        searchbox.stop().slideUp();
                    }
                }else{
                    if( icon.hasClass('fa-magnifying-glass') ){
                        icon.removeClass('fa-magnifying-glass').addClass('fa-xmark');
                        searchbox.addClass('show');

                    }else{
                        icon.addClass('fa-magnifying-glass').removeClass('fa-xmark');
                        searchbox.removeClass('show');
                    }
                }
            });

            $('.search-box').on('click', '#close-search-box', function(e){
                e.preventDefault();
                let windowWidth = $(window).width();
                let _this       = $(this);
                let iconClass   = _this.closest('.search-box').siblings('.menu-flex').find('#search-toggle-button').children('i');

                if( windowWidth > 992 ){
                    iconClass.addClass('fa-magnifying-glass').removeClass('fa-xmark');
                    _this.closest('.search-box').removeClass('show');
                }
            });
        }

        quantityCounter(){
            $('.quentity-counter').on('click', 'button', function(e){
                e.preventDefault();
                let _this    = $(this);
                let getValue = parseInt(_this.siblings('input[type="number"]').val());
                let step     = parseInt(_this.siblings('input[type="number"]').attr('step'));
                let min      = parseInt(_this.siblings('input[type="number"]').attr('min'));
                let max      = parseInt(_this.siblings('input[type="number"]').attr('max'));


                if( _this.hasClass('increment') ){
                    if( getValue < max ){
                        _this.siblings('input[type="number"]').val( getValue + step )
                    }
                }
                if( _this.hasClass('decrement') ){
                    if( getValue > min ){
                        _this.siblings('input[type="number"]').val( getValue - step )
                    }
                }
            })    
        }

        minicartToggler(){
            $('#minicart-toggler').on('click', function(e){
                e.preventDefault();
                let minicart = $('.mini-cart-parent');
                minicart.toggleClass('show');
            })
        }

        closeMinicart(){
            $('#close-minicart').on('click', function(e){
                e.preventDefault();
                $(this).closest('.mini-cart-parent').removeClass('show');
            });

            // destroy minicart
            $('.mini-cart-parent').on('click', function(e){
                console.log(e.target.className)
                let cssClass = e.target.className;
                if( cssClass == 'mini-cart-parent show' ){
                    $(this).removeClass('show');
                }
            })
        }
        responsiveMobileMenu(){
            $('.menu-toggler').on('click', function(e){
                e.preventDefault();
                let icon = $(this).children('i');
                if( icon.hasClass('fa-bars-staggered')){
                    icon.removeClass('fa-bars-staggered').addClass('fa-xmark')
                }else{
                    icon.removeClass('fa-xmark').addClass('fa-bars-staggered');
                }
                $('.mobile-menu').stop().slideToggle();
            })
        }

        responsiveSlideSubmenu(){
            $('.responsive-slide-menu').on('click', function(e){
                e.preventDefault();
                $(this).siblings('ul.responsive-submenu').addClass('show');
            });

            $('.responsive-slide-close').on('click', function(e){
                e.preventDefault();
                $(this).closest('ul.responsive-submenu').removeClass('show');
            });
        }
        
    }

    doc.ready(function () { new AmanaCloth; });
    
>>>>>>> 1353c804286708e891b02f1a279f6eb97f3e7c9f
})(jQuery);