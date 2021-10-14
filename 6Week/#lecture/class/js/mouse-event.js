console.log("Script Load");
(function($) {
    $(document).ready(function() {
        console.log('jQuery Ready');
        const $ul = $('ul');
        const $a = $('ul > li > a');
        console.log($a);
        // click
        // dblclick
        // $a.on('click', (e) => {
        //     e.preventDefault();
        //     console.log(e.target)
        // });
        const handleClickMenu = (e) => {
            e.preventDefault();
            console.log('click !');
        }
        // $ul.on('click', 'a', handleClickMenu);
        $ul.append('<li><a id="menu-8" href="#">Menu 8</a></li>');
        $ul.append('<li><a id="menu-9" href="#">Menu 9</a></li>');
        $a.eq(0).on('dblclick', (e) => {
            console.log('Double Click');
        });
        
        // drag 기능
        // mousedown
        // mousemove
        // mouseup
        let isDrag = false;
        let dragState = 'BOX';
        const $box = $('.box');
        const $boxTitle = $box.children('span');
        // handleMouseDown
        const handleDragStart = (e) => {
            console.log(e);
            console.log(e.pageX, e.pageY);
            console.log(e.clientX, e.clientY);
            console.log(e.target);
            console.log(e.currentTarget);
            e.preventDefault();
            e.stopPropagation();
            // console.log(e.keyCode);
            // console.log(e.which);
            isDrag = true;
            if (!$box.hasClass('drag')) {
                $box.addClass('drag');
            }
            // console.log('mouse down');
        }
        // handleMouseMove
        const handleDrag = (e) => {
            if (isDrag) {
                dragState = 'Drag ...';
                $boxTitle.text(dragState);
                // console.log('mouse move');
            }
        }
        // handleMouseUp
        const handleDragEnd = (e) => {
            isDrag = false;
            $box.removeClass('drag');
            dragState = 'BOX';
            $boxTitle.text(dragState);
            // console.log('mouse up');
        }
        $box.on('mousedown', handleDragStart);
        $box.on('mousemove', handleDrag);
        $box.on('mouseup', handleDragEnd);
        const handleMouse = (e) => {
            const { type } = e
            switch(type) {
                case 'mousedown':
                    console.log('1');
                    break;
                case 'mousemove':
                    console.log('2');
                    break;
                case 'mouseup':
                    console.log('3');
                    break;
                default:
                    break;
            }
            // console.log(type);
        }
        $box.on('mousedown mousemove mouseup', handleMouse);

        
        // mouseover
        // mouseout
        const handleMouseOver = (e) => {
            console.log('mouse over');
        }
        const handleMouseOut = (e) => {
            console.log('mouse out');
        }
        // $ul.on('mouseover', handleMouseOver);
        // $ul.on('mouseout', handleMouseOut);

        // mouseenter
        // mouseleave
        const handleMouseEnter = (e) => {
            console.log('mouse enter');
        }
        const handleMouseLeave = (e) => {
            console.log('mouse leave');
        }
        $ul.on('mouseenter', handleMouseEnter);
        $ul.on('mouseleave', handleMouseLeave);

        // hover
        $a.eq(1).hover(function() {
            console.log('1');
        }, function() {
            console.log('2');
        });

        // toggle
        // $a.eq(2).toggle(function() {
        //     console.log('1');
        // }, function() {
        //     console.log('2');
        // });

        // event 속성
        // eventHandler 
        // event

    });
})(jQuery);