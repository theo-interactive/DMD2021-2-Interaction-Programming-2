console.log("Script Load");
(function($) {
    $(document).ready(function() {
        console.log('jQuery Ready');

        // detach

        let count = 0;
        // empty
        $('button.btn-2').click((e) => {
            const $el = $(e.currentTarget);
            const $p = $el.next('p');
            if ($p.html() !== '') {
                $p.empty();
                $p.html('');
            } else {
                count++;
                $p.html(`<span>Hello World! (${count})</span>`);
            }
            // console.log($p.html())
            // if ($p.html())
            // $p.empty();
            // console.log($p);
            // console.log($el);
        });

        let count2 = 0;
        // remove
        $('button.btn-3').click((e) => {
            const $el = $(e.currentTarget);
            const $p = $el.next('p');
            if ($p.length > 0) {
                $p.remove();
            } else {
                count2++;
                $el.after(`<p>Hello World! (${count2})</p>`);
            }
        });

    });
})(jQuery);