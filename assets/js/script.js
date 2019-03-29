        var squares = $(".work-tab")
        $.each(squares, function (index, value) {
            $(squares).bind('mouseenter mouseleave', function (event) {
                if (event.type == 'mouseenter') {
                    $(this).addClass('partner-show')
                    if($('.work-tab').hasClass('partner-show')){
                        $('.work-tab').removeClass('partner-show');
                        $(this).addClass('partner-show');
                    };
                } else if (event.type == 'mouseleave') {
                    $(this).removeClass('partner-show');
                }
            });
        });
        
        
        function scrollToAnchor(aid){
            var aTag = $("section[name='"+ aid +"']");
            $('html,body').animate({scrollTop: aTag.offset().top -1},'slow');
            
        }

        $("#checkbox").click(function(){ 
            if($(this).hasClass('show')){
                $(this).removeClass('show')
                $('#menu').fadeOut()
            }else{
                $(this).addClass("show")
                $('#menu').fadeIn()
            }
        });

        $(document).ready(function(){
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
        })

        

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
                    $('#first-section, #second-section, #third-section, #fourth-section, header, footer').css('pointer-events','none')
                }
            });
        }

        $('.goback').click(function(){
            $('#first-section, #second-section, #third-section, #fourth-section, header, footer').css('pointer-events','all')
        })