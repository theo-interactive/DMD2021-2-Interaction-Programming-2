console.log("Script Load");
(function($) {
    $(document).ready(function() {
        console.log('jQuery Ready');
        const $menu1 = $('#menu-1');
        $menu1.click(function(e) {
            e.preventDefault();
            console.log('click');
        });
        const $menu2 = $('#menu-2');
        // $menu2.on('click', function(e) {
        //     e.preventDefault();
        //     console.log('click');
        // });
        // event handler
        const handleClickMenu2 = function(e) {
            e.preventDefault();
            console.log('click');
        }
        // event listener.
        $menu2.on('click', handleClickMenu2);
        $menu2.off('click');
        // remove listener
        $menu2.off('click', handleClickMenu2);

        // 한번만 발생되는 이벤트.
        const $menu3 = $('#menu-3');
        $menu3.one('click', handleClickMenu2);

        // mouseenter
        // mouseleave

        // mouseover
        // mouseout

        // mousedown
        // mousemove
        // mouseup
    });
})(jQuery);