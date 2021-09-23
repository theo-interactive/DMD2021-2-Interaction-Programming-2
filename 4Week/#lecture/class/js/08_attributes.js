console.log("Script Load");
(function($) {
    $(document).ready(function() {
        console.log('jQuery Ready');
        
        const $inputCheck = $('#checkbox-1');
        // 속성 값 받아오기.
        // console.log($inputCheck.attr('checked'));
        // console.log($inputCheck.prop('checked'));

        $inputCheck.change((e) => {
            //console.log(e);
            // const $el = $(e.currentTarget);
            const $el = $(e.target);
            //console.log($el);
            //console.log($el.attr('checked'));
            console.log($el.prop('checked'));
            console.log($el.is(':checked'));
        });

        const $em = $('em');
        const title = $em.attr('title');
        console.log(title);
        
        $('p').eq(2).children('span').text(title);

        const imgTitle = $('img').attr('title');
        $('img').attr('src', `/img/${imgTitle}`);

        $('input').removeAttr('placeholder');

        $('input:last').change((e) => {
            const $el = $(e.target);
            console.log($el.val());
        })

    });
})(jQuery);