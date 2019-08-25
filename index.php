<?php
     include 'header.php';

?>


    <!-- side dots code -->
    
    <ul class="side-nav">
        
        <li class="is-active" data-target="#intro"><span>Intro</span></li>
        <li data-target="#arum-home"><span>Arum Home Automaions</span></li>
        <li data-target="#arum-industrial"><span>Arum Industrial Automations</span></li>
        <li data-target="#arum-automobile"><span>Arum Automobiles</span></li>
        <li data-target="#about"><span>About Us</span></li>
    </ul>
    <div id="intro" data-section-name="intro" class="block intro-block thanks-popup fixed-popup">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 home-banner" >
                    <img class="" src="Images/6.jpeg" width="100%" height="400" alt="">
                </div>
            </div>
        </div>
    </div>
    <div id="arum-home" data-section-name="arum-home" class="block mobile-development-block" >
        <div class="container">
            <div class="row ar-products">
                <div class="col-xs-12 col-sm-6 col-ssm-push-6 padd" style="display:flex;justify-content:center;">
                    <img src="images/1.png" alt="" height="350" width="350">
                </div>
                <div class="col-xs-12 col-sm-6 col-ssm-pull-6 ">
                    <div class="content-wrap">
                        <h3>Arum Home Automation</h3>
                        <p>A home automation system will control lighting, climate, entertainment systems, and appliances. 
                            It may also include home security such as access control and alarm systems. 
                            When connected with the Internet, home devices are an important constituent of the internet of things. 
                            automatic centralized control of a building's heating, ventilation and air conditioning, 
                            lighting and other systems through a building management system or building automation system (BAS). 
                            The objectives of building automation are improved occupant comfort, efficient operation of building systems, 
                            reduction in energy consumption and operating costs, and improved life cycle of utilities.</p>
                        <a href="Hproduct.php" class="read-more">View More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="arum-industrial" data-section-name="arum-industrial" class="block web-development-block">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-sm-6 col-sx-12 padd" style="display:flex;justify-content:center;">
                    <img src="images/2.png" alt="" height="350" width="430">
                </div>
                <div class="col-md-6 col-sm-6 col-sx-12 col-sm-offset-1">
                    <div class="content-wrap">
                        <h3>Arum Industrial Automation</h3>
                        <p>To operate machinery, industrial Automation companies use control systems, 
                            which help to finish a particular process. Using automation machines, labor usage will be reduced. 
                            On the other hand, it also helps to enhance the quality, precision, and accuracy of systems. 
                            Industries such as mechanical, airplanes, hydraulics, computers and many others have been using the automation.</p>
                        <p>Industrial Automation machines assist to simplify the tasks and they (robots) can be operated in the most 
                            dangerous situations where a man cannot be capable to do. This is the reason why they have gained a prominent 
                            place in the industries.</p>
                        <a href="Iproduct.php" class="read-more">View More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="about" data-section-name="about" class="block about-block">
        <div class="container">
            <div class="row">
                <div class="col-sx-12 col-sm-6 col-md-6  padd" style="display:flex;justify-content:center;">
                <img src="Images/arum_logo.png" alt="" height="300" width="300">

                </div>
                <div class="col-sx-12 col-sm-6 col-md-6  know-us col-sm-offset-1">
                    <div class="content-wrap">
                        <h3>About us</h3>
                        <p>There are a few of companies that do what we do. They share the same <i>Idea</i> and
                            <i>Work</i>, but our approach towards the work is entirely different from others.</p>
                        <p>If you are looking for that, You have hear Arum Innovations Pvt. Ltd., and you're in the right place.</p>
                        <a href="about.php" class="read-more">Get to know us</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    <script src="js/scrollify.js"></script>
    <script type="text/javascript" src="js/jquery.easing.min.js"></script>

    <script>
    $(document).ready(function() {
        $('.nav-page').on("click", function(e) {
            e.preventDefault();
            var target = $(this).attr('data-target');
            $(this).parent('.side-nav').find(".is-active").removeClass('is-active');
            $(this).addClass('is-active');
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 800);
        });
        $('.side-nav').on("click", "li", function(e) {
            e.preventDefault();
            var target = $(this).attr('data-target');
            $(this).parent('.side-nav').find(".is-active").removeClass('is-active');
            $(this).addClass('is-active');
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 800);
        });


        $(window).scroll(function() {
            menuscroll();
        });

        function menuscroll() {
            var windowTop = Math.max($('body').scrollTop(), $('html').scrollTop());
            $('.block').each(function(index) {
                if (windowTop > ($(this).position().top - 300)) {
                    //$('.side-nav li.is-active').removeClass('is-active');
                    $('.side-nav li:eq(' + index + ')').addClass('is-active').siblings().removeClass(
                        'is-active');
                }
            });
        }


        if ($(window).width() > 992) {
            $.scrollify({
                section: ".block",
                sectionName: false,
                interstitialSection: "",
                //easing: "easeOutExpo",
                easing: "easeInOutCubic",
                scrollSpeed: 600,
                offset: 0,
                scrollbars: false,
                standardScrollElements: "",
                setHeights: true,
                overflowScroll: true,
                before: function() {},
                after: function() {},
                afterResize: function() {},
                afterRender: function() {}
            });
        }

    });
    </script>
    
</body>

</html>