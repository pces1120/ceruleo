$(window).on('load', loadXml());

function loadXml(){
	var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };
    
    if($('body').hasClass('en')){
        xhttp.open("GET", "assets/data/land-en.xml", true);
    }else{
        xhttp.open("GET", "assets/data/land-es.xml", true);
    };  
    xhttp.send();
    function myFunction(xml) {
        let xmlDoc = xml.responseXML,

        insta = xmlDoc.getElementsByTagName("insta"),
        behance = xmlDoc.getElementsByTagName("behance"),

        title_page = xmlDoc.getElementsByTagName("title_page"),

        nav_01 = xmlDoc.getElementsByTagName("nav_01"),
        nav_02 = xmlDoc.getElementsByTagName("nav_02"),
        nav_03 = xmlDoc.getElementsByTagName("nav_03"),
        nav_04 = xmlDoc.getElementsByTagName("nav_04"),
        
        portfolio_01_year = xmlDoc.getElementsByTagName("portfolio_01_year"),
        portfolio_01_type = xmlDoc.getElementsByTagName("portfolio_01_type"),
        portfolio_01_name = xmlDoc.getElementsByTagName("portfolio_01_name"),

        portfolio_02_year = xmlDoc.getElementsByTagName("portfolio_02_year"),
        portfolio_02_type = xmlDoc.getElementsByTagName("portfolio_02_type"),
        portfolio_02_name = xmlDoc.getElementsByTagName("portfolio_02_name"),

        portfolio_03_year = xmlDoc.getElementsByTagName("portfolio_03_year"),
        portfolio_03_type = xmlDoc.getElementsByTagName("portfolio_03_type"),
        portfolio_03_name = xmlDoc.getElementsByTagName("portfolio_03_name"),

        portfolio_04_year = xmlDoc.getElementsByTagName("portfolio_04_year"),
        portfolio_04_type = xmlDoc.getElementsByTagName("portfolio_04_type"),
        portfolio_04_name = xmlDoc.getElementsByTagName("portfolio_04_name"),

        portfolio_05_year = xmlDoc.getElementsByTagName("portfolio_05_year"),
        portfolio_05_type = xmlDoc.getElementsByTagName("portfolio_05_type"),
        portfolio_05_name = xmlDoc.getElementsByTagName("portfolio_05_name"),

        portfolio_06_year = xmlDoc.getElementsByTagName("portfolio_06_year"),
        portfolio_06_type = xmlDoc.getElementsByTagName("portfolio_06_type"),
        portfolio_06_name = xmlDoc.getElementsByTagName("portfolio_06_name"),

        portfolio_07_year = xmlDoc.getElementsByTagName("portfolio_07_year"),
        portfolio_07_type = xmlDoc.getElementsByTagName("portfolio_07_type"),
        portfolio_07_name = xmlDoc.getElementsByTagName("portfolio_07_name"),

        portfolio_08_year = xmlDoc.getElementsByTagName("portfolio_08_year"),
        portfolio_08_type = xmlDoc.getElementsByTagName("portfolio_08_type"),
        portfolio_08_name = xmlDoc.getElementsByTagName("portfolio_08_name"),

        portfolio_09_year = xmlDoc.getElementsByTagName("portfolio_09_year"),
        portfolio_09_type = xmlDoc.getElementsByTagName("portfolio_09_type"),
        portfolio_09_name = xmlDoc.getElementsByTagName("portfolio_09_name"),

        portfolio_010_year = xmlDoc.getElementsByTagName("portfolio_010_year"),
        portfolio_010_type = xmlDoc.getElementsByTagName("portfolio_010_type"),
        portfolio_010_name = xmlDoc.getElementsByTagName("portfolio_010_name"),

        portfolio_011_year = xmlDoc.getElementsByTagName("portfolio_011_year"),
        portfolio_011_type = xmlDoc.getElementsByTagName("portfolio_011_type"),
        portfolio_011_name = xmlDoc.getElementsByTagName("portfolio_011_name"),

        portfolio_012_year = xmlDoc.getElementsByTagName("portfolio_012_year"),
        portfolio_012_type = xmlDoc.getElementsByTagName("portfolio_012_type"),
        portfolio_012_name = xmlDoc.getElementsByTagName("portfolio_012_name"),

        portfolio_013_year = xmlDoc.getElementsByTagName("portfolio_013_year"),
        portfolio_013_type = xmlDoc.getElementsByTagName("portfolio_013_type"),
        portfolio_013_name = xmlDoc.getElementsByTagName("portfolio_013_name"),

        portfolio_014_year = xmlDoc.getElementsByTagName("portfolio_014_year"),
        portfolio_014_type = xmlDoc.getElementsByTagName("portfolio_014_type"),
        portfolio_014_name = xmlDoc.getElementsByTagName("portfolio_014_name"),

        portfolio_015_year = xmlDoc.getElementsByTagName("portfolio_015_year"),
        portfolio_015_type = xmlDoc.getElementsByTagName("portfolio_015_type"),
        portfolio_015_name = xmlDoc.getElementsByTagName("portfolio_015_name"),

        portfolio_016_year = xmlDoc.getElementsByTagName("portfolio_016_year"),
        portfolio_016_type = xmlDoc.getElementsByTagName("portfolio_016_type"),
        portfolio_016_name = xmlDoc.getElementsByTagName("portfolio_016_name"),

        portfolio_017_year = xmlDoc.getElementsByTagName("portfolio_017_year"),
        portfolio_017_type = xmlDoc.getElementsByTagName("portfolio_017_type"),
        portfolio_017_name = xmlDoc.getElementsByTagName("portfolio_017_name"),

        portfolio_018_year = xmlDoc.getElementsByTagName("portfolio_018_year"),
        portfolio_018_type = xmlDoc.getElementsByTagName("portfolio_018_type"),
        portfolio_018_name = xmlDoc.getElementsByTagName("portfolio_018_name"),

        portfolio_019_year = xmlDoc.getElementsByTagName("portfolio_019_year"),
        portfolio_019_type = xmlDoc.getElementsByTagName("portfolio_019_type"),
        portfolio_019_name = xmlDoc.getElementsByTagName("portfolio_019_name"),

        portfolio_020_year = xmlDoc.getElementsByTagName("portfolio_020_year"),
        portfolio_020_type = xmlDoc.getElementsByTagName("portfolio_020_type"),
        portfolio_020_name = xmlDoc.getElementsByTagName("portfolio_020_name"),

        portfolio_021_year = xmlDoc.getElementsByTagName("portfolio_021_year"),
        portfolio_021_type = xmlDoc.getElementsByTagName("portfolio_021_type"),
        portfolio_021_name = xmlDoc.getElementsByTagName("portfolio_021_name"),

        portfolio_022_year = xmlDoc.getElementsByTagName("portfolio_022_year"),
        portfolio_022_type = xmlDoc.getElementsByTagName("portfolio_022_type"),
        portfolio_022_name = xmlDoc.getElementsByTagName("portfolio_022_name"),

        portfolio_023_year = xmlDoc.getElementsByTagName("portfolio_023_year"),
        portfolio_023_type = xmlDoc.getElementsByTagName("portfolio_023_type"),
        portfolio_023_name = xmlDoc.getElementsByTagName("portfolio_023_name"),

        portfolio_024_year = xmlDoc.getElementsByTagName("portfolio_024_year"),
        portfolio_024_type = xmlDoc.getElementsByTagName("portfolio_024_type"),
        portfolio_024_name = xmlDoc.getElementsByTagName("portfolio_024_name"),
        
        presentation_text = xmlDoc.getElementsByTagName("presentation_text"),

        presentation_initials_AS = xmlDoc.getElementsByTagName("presentation_initials_AS"),
        presentation_role_AS = xmlDoc.getElementsByTagName("presentation_role_AS"),
        presentation_initials_PA = xmlDoc.getElementsByTagName("presentation_initials_PA"),
        presentation_role_PA = xmlDoc.getElementsByTagName("presentation_role_PA"),
        
        hi = xmlDoc.getElementsByTagName("hi"),
        hi_location = xmlDoc.getElementsByTagName("hi_location"),
        hi_phone = xmlDoc.getElementsByTagName("hi_phone"),
        hi_mail = xmlDoc.getElementsByTagName("hi_mail");
        hi_mailto = xmlDoc.getElementsByTagName("hi_mailto");

        $("[template='insta']").attr('href',insta[0].childNodes[0].nodeValue);
        $("[template='behance']").attr('href',behance[0].childNodes[0].nodeValue);

        $("[template='title_page']").html(title_page[0].childNodes[0].nodeValue);

        $("[template='nav_01']").html(nav_01[0].childNodes[0].nodeValue);
        $("[template='nav_02']").html(nav_02[0].childNodes[0].nodeValue);
        $("[template='nav_03']").html(nav_03[0].childNodes[0].nodeValue);
        $("[template='nav_04']").html(nav_04[0].childNodes[0].nodeValue);

        $("[template='portfolio_01_year']").html(portfolio_01_year[0].childNodes[0].nodeValue);
        $("[template='portfolio_01_type']").html(portfolio_01_type[0].childNodes[0].nodeValue);
        $("[template='portfolio_01_name']").html(portfolio_01_name[0].childNodes[0].nodeValue);

        $("[template='portfolio_02_year']").html(portfolio_02_year[0].childNodes[0].nodeValue);
        $("[template='portfolio_02_type']").html(portfolio_02_type[0].childNodes[0].nodeValue);
        $("[template='portfolio_02_name']").html(portfolio_02_name[0].childNodes[0].nodeValue);

        $("[template='portfolio_03_year']").html(portfolio_03_year[0].childNodes[0].nodeValue);
        $("[template='portfolio_03_type']").html(portfolio_03_type[0].childNodes[0].nodeValue);
        $("[template='portfolio_03_name']").html(portfolio_03_name[0].childNodes[0].nodeValue);
        
        $("[template='portfolio_04_year']").html(portfolio_04_year[0].childNodes[0].nodeValue);
        $("[template='portfolio_04_type']").html(portfolio_04_type[0].childNodes[0].nodeValue);
        $("[template='portfolio_04_name']").html(portfolio_04_name[0].childNodes[0].nodeValue);

        $("[template='portfolio_05_year']").html(portfolio_05_year[0].childNodes[0].nodeValue);
        $("[template='portfolio_05_type']").html(portfolio_05_type[0].childNodes[0].nodeValue);
        $("[template='portfolio_05_name']").html(portfolio_05_name[0].childNodes[0].nodeValue);

        $("[template='portfolio_06_year']").html(portfolio_06_year[0].childNodes[0].nodeValue);
        $("[template='portfolio_06_type']").html(portfolio_06_type[0].childNodes[0].nodeValue);
        $("[template='portfolio_06_name']").html(portfolio_06_name[0].childNodes[0].nodeValue);
        
        $("[template='portfolio_07_year']").html(portfolio_07_year[0].childNodes[0].nodeValue);
        $("[template='portfolio_07_type']").html(portfolio_07_type[0].childNodes[0].nodeValue);
        $("[template='portfolio_07_name']").html(portfolio_07_name[0].childNodes[0].nodeValue);

        $("[template='portfolio_08_year']").html(portfolio_08_year[0].childNodes[0].nodeValue);
        $("[template='portfolio_08_type']").html(portfolio_08_type[0].childNodes[0].nodeValue);
        $("[template='portfolio_08_name']").html(portfolio_08_name[0].childNodes[0].nodeValue);

        $("[template='portfolio_09_year']").html(portfolio_09_year[0].childNodes[0].nodeValue);
        $("[template='portfolio_09_type']").html(portfolio_09_type[0].childNodes[0].nodeValue);
        $("[template='portfolio_09_name']").html(portfolio_09_name[0].childNodes[0].nodeValue);

        $("[template='portfolio_010_year']").html(portfolio_010_year[0].childNodes[0].nodeValue);
        $("[template='portfolio_010_type']").html(portfolio_010_type[0].childNodes[0].nodeValue);
        $("[template='portfolio_010_name']").html(portfolio_010_name[0].childNodes[0].nodeValue);

        $("[template='portfolio_011_year']").html(portfolio_011_year[0].childNodes[0].nodeValue);
        $("[template='portfolio_011_type']").html(portfolio_011_type[0].childNodes[0].nodeValue);
        $("[template='portfolio_011_name']").html(portfolio_011_name[0].childNodes[0].nodeValue);

        $("[template='portfolio_012_year']").html(portfolio_012_year[0].childNodes[0].nodeValue);
        $("[template='portfolio_012_type']").html(portfolio_012_type[0].childNodes[0].nodeValue);
        $("[template='portfolio_012_name']").html(portfolio_012_name[0].childNodes[0].nodeValue);

        $("[template='portfolio_013_year']").html(portfolio_013_year[0].childNodes[0].nodeValue);
        $("[template='portfolio_013_type']").html(portfolio_013_type[0].childNodes[0].nodeValue);
        $("[template='portfolio_013_name']").html(portfolio_013_name[0].childNodes[0].nodeValue);

        $("[template='portfolio_014_year']").html(portfolio_014_year[0].childNodes[0].nodeValue);
        $("[template='portfolio_014_type']").html(portfolio_014_type[0].childNodes[0].nodeValue);
        $("[template='portfolio_014_name']").html(portfolio_014_name[0].childNodes[0].nodeValue);

        $("[template='portfolio_015_year']").html(portfolio_015_year[0].childNodes[0].nodeValue);
        $("[template='portfolio_015_type']").html(portfolio_015_type[0].childNodes[0].nodeValue);
        $("[template='portfolio_015_name']").html(portfolio_015_name[0].childNodes[0].nodeValue);

        $("[template='portfolio_016_year']").html(portfolio_016_year[0].childNodes[0].nodeValue);
        $("[template='portfolio_016_type']").html(portfolio_016_type[0].childNodes[0].nodeValue);
        $("[template='portfolio_016_name']").html(portfolio_016_name[0].childNodes[0].nodeValue);

        $("[template='portfolio_017_year']").html(portfolio_017_year[0].childNodes[0].nodeValue);
        $("[template='portfolio_017_type']").html(portfolio_017_type[0].childNodes[0].nodeValue);
        $("[template='portfolio_017_name']").html(portfolio_017_name[0].childNodes[0].nodeValue);

        $("[template='portfolio_018_year']").html(portfolio_018_year[0].childNodes[0].nodeValue);
        $("[template='portfolio_018_type']").html(portfolio_018_type[0].childNodes[0].nodeValue);
        $("[template='portfolio_018_name']").html(portfolio_018_name[0].childNodes[0].nodeValue);

        $("[template='portfolio_019_year']").html(portfolio_019_year[0].childNodes[0].nodeValue);
        $("[template='portfolio_019_type']").html(portfolio_019_type[0].childNodes[0].nodeValue);
        $("[template='portfolio_019_name']").html(portfolio_019_name[0].childNodes[0].nodeValue);

        $("[template='portfolio_020_year']").html(portfolio_020_year[0].childNodes[0].nodeValue);
        $("[template='portfolio_020_type']").html(portfolio_020_type[0].childNodes[0].nodeValue);
        $("[template='portfolio_020_name']").html(portfolio_020_name[0].childNodes[0].nodeValue);

        $("[template='portfolio_021_year']").html(portfolio_021_year[0].childNodes[0].nodeValue);
        $("[template='portfolio_021_type']").html(portfolio_021_type[0].childNodes[0].nodeValue);
        $("[template='portfolio_021_name']").html(portfolio_021_name[0].childNodes[0].nodeValue);

        $("[template='portfolio_022_year']").html(portfolio_022_year[0].childNodes[0].nodeValue);
        $("[template='portfolio_022_type']").html(portfolio_022_type[0].childNodes[0].nodeValue);
        $("[template='portfolio_022_name']").html(portfolio_022_name[0].childNodes[0].nodeValue);

        $("[template='portfolio_023_year']").html(portfolio_023_year[0].childNodes[0].nodeValue);
        $("[template='portfolio_023_type']").html(portfolio_023_type[0].childNodes[0].nodeValue);
        $("[template='portfolio_023_name']").html(portfolio_023_name[0].childNodes[0].nodeValue);

        $("[template='portfolio_024_year']").html(portfolio_024_year[0].childNodes[0].nodeValue);
        $("[template='portfolio_024_type']").html(portfolio_024_type[0].childNodes[0].nodeValue);
        $("[template='portfolio_024_name']").html(portfolio_024_name[0].childNodes[0].nodeValue);

        $("[template='presentation_text']").html(presentation_text[0].childNodes[0].nodeValue);

        $("[template='presentation_initials_AS']").html(presentation_initials_AS[0].childNodes[0].nodeValue);
        $("[template='presentation_role_AS']").html(presentation_role_AS[0].childNodes[0].nodeValue);
        $("[template='presentation_initials_PA']").html(presentation_initials_PA[0].childNodes[0].nodeValue);
        $("[template='presentation_role_PA']").html(presentation_role_PA[0].childNodes[0].nodeValue);

        $("[template='hi']").html(hi[0].childNodes[0].nodeValue);
        $("[template='hi_location']").html(hi_location[0].childNodes[0].nodeValue);
        $("[template='hi_phone']").html(hi_phone[0].childNodes[0].nodeValue);
        $("[template='hi_mail']").html(hi_mail[0].childNodes[0].nodeValue).attr('href',hi_mailto[0].childNodes[0].nodeValue);
        
        
    }; 
};
        
        function changeLanguage(){
            if($('body').hasClass('en')){
                $('body').removeClass('en');
                loadXml();
            }else{
                $('body').addClass('en');
                loadXml();
            };         
            
        }
              
        /*Hover effect*/
        var squares = $(".work-tab")
        $.each(squares, function (index, value) {
            $(squares).bind('mouseenter mouseleave click touch', function (event) {
                if (event.type == 'mouseenter') {
                    $(this).addClass('partner-show')
                    if($('.work-tab').hasClass('partner-show')){
                        $('.work-tab').removeClass('partner-show');
                        $(this).addClass('partner-show');
                    };
                } else if (event.type == 'mouseleave') {
                    $(this).removeClass('partner-show');
                }else if (event.type == 'click' || event.type == 'touchstart') {
                    $("#exampleModal").modal("show");
                    
                }
            });
        });
        
        /*Scroll to point*/
        function scrollToAnchor(aid){
            var aTag = $("section[name='"+ aid +"']");
            $('html,body').animate({scrollTop: aTag.offset().top -1},'slow');
            
        }

        /*Side menu*/
        $("#checkbox").click(function(){ 
            if($(this).hasClass('show')){
                $(this).removeClass('show')
                $('#menu').fadeOut()
            }else{
                $(this).addClass("show")
                $('#menu').fadeIn()
            }
        });

        /*Open modal*/
        function whatever (index){
            $.ajax({
                url: "modals/modal-" + index + ".html",
                beforeSend: function () {
                    $('#modal').fadeIn();
                },
                success: function (result) {
                    $('#mainModal').html(result);
                    $('#mainModal').fadeIn();
                    $("#modal").toggleClass('show');
                }
            });
        }
        
       /*$(document).ready(function(){
            $(window).scroll(function(){
                var section_pos = $('#second-section').offset().top;
                var section_height = $('#second-section').height();
                var brand_pos = $('#brand-mobile').offset().top;
                var scroll = $(window).scrollTop();

                if(brand_pos > section_pos ) {
                    $('#brand-mobile').css('opacity', '0');
                }
                else {
                    $('#brand-mobile').css('opacity', '1');
                }
            });
        })*/