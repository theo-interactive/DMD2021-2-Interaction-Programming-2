console.log("Script Load");
(function($) {
    $(document).ready(function() {
        console.log('jQuery Ready');
        const $btn = $('button');
        const $box = $('.box');
        // let count = 0;
        // const colors = [
        //     '#ff0000',
        //     '#0000ff',
        //     '#00ff00',
        //     '#0f0f0f'
        // ]
        const handleClickBtn = (e) => {
            e.preventDefault();
            const $el = $(e.currentTarget);
            // const name = $el.attr('class');
            const name = $el.attr('class').replace('btn-', '');
            // console.log(name);
            switch(name) {
                case 'play':
                    boxPlay();
                    break;
                case 'stop':
                    boxStop();
                    break;
                case 'force-play':
                    boxForcePlay();
                    break;
                case 'reset':
                    boxReset();
                    break;
                default:
                    break;
            }
            // console.log($el);
        }
        const boxPlay = () => {
            // console.log(colors[count]);
            $box.animate({
                'left': '+=100px',
                'width': '+=10px',
                'height': '+=10px'
                // 'background-color': colors[count]
            }, 800);
            // { duration: 800, easing: //// }
            // count++;
        }
        const boxStop = () => {
            $box.stop(true);
        }
        const boxForcePlay = () => {
            boxStop();
            boxPlay();
            // $box.stop(true).animate({
            //     'left': '+=100px',
            //     'width': '+=10px',
            //     'height': '+=10px'
            //     // 'backgroundColor': colors[count]
            // }, 800);
        }
        const boxReset = () => {
            boxStop();
            $box
                // .stop(true)
                .css({
                    'left': 0,
                    'width': '100px',
                    'height': '100px'
                });
        }
        $btn.on('click', handleClickBtn);
    });
})(jQuery);