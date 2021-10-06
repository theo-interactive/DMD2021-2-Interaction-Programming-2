console.log("Script Load");
(function($) {
    $(document).ready(function() {
        console.log('jQuery Ready');
        // const $pClone = $('p').clone();
        let firstCount = 0;
        $('button.btn-first').click(() => {
            firstCount++;
            const $clone = $('p:first').clone().text(`Hello ${firstCount}`)
            $('p:first').before($clone);
        });
        let lastCount = 0;
        $('button.btn-last').click(() => {
            lastCount++;
            const $clone = $('p:last').clone().text(`Hello ${lastCount}`);
            $('p:last').after($clone);
        });
        // console.log($pClone);
        // $('p').last().after($pClone);
    });
})(jQuery);