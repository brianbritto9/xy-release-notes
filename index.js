    $(function(){

        $('[data-xy-release]').click(function(e){

            var $this = $(this);
            $('[data-xy-release]').removeClass('active');
            $this.addClass('active')
        })
    })