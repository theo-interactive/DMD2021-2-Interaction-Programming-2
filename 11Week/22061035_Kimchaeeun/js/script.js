console.log("Script Load");
(function($){
    $(document).ready(function() {
        console.log('jQuery Ready');

        let horizontalMax = 0;
        // let scrollY = 0;

        const $win = $(window);
        const $wrap = $('#wrap');

        const $section = $('.section');
        const $sectionImage = $section.find('.image-area');
        const $sectionTitle = $section.find('.title');
        const $sectionDesc = $section.find('.desc');

        const $sticky = $('.section-sticky');
        const $horizontal = $('.section-horizontal');
        const $horizontalWrap = $horizontal.children('.section-wrap');
        const $horizontalItem = $horizontalWrap.children('.section-item');


        function init() {
            setting();
            addEvent();
            reset();
        }

        function setting() {
            horizontalMax = $horizontalItem.length;
        }

        function addEvent() {
            $win.on('resize', handleResizeWindow).on('scroll', handleScrollWindow);
        }

        function handleResizeWindow() {
            // 변수 선언을 객체 단위로
            // window.innerWidth -> width
            // window.innerHeight -> height
            const { innerWidth: width, innerHeight: height } = window;
            
            $horizontal.outerHeight(horizontalMax * height);
            $horizontalWrap.outerWidth(horizontalMax * width);
            $horizontalItem.outerWidth(width);
        }

        function handleScrollWindow() {
            horizontalScroll();
        }

        function horizontalScroll() {
            const { scrollY, innerWidth: width, innerHeight: height } = window;
            let x = 0;
            const horizontalWidth = horizontalMax * width;
            const horizontalHeight = horizontalMax * height;

            // 요소와 스크롤을 비교하는 방법 1.
            const startY = $horizontal.offset().top;
            const endY = startY + horizontalHeight;

            // 스크롤이 고정되는 시점 ~ 허용 지점까지 (조건)
            if (scrollY >= startY && scrollY < endY) {
                // 스크롤 값에 따라서 가로 영역으로 움직이는 인터랙션.

                if (scrollY < endY - height) {

                   x = (horizontalWidth - width) * (scrollY - startY) / (horizontalHeight - height) * -1;

                    // horizontal이 시작되는 지점 ~ 마지막 섹션이 노출되기 전 지점 까지
                    $horizontal.addClass('fixed');
                    $horizontal.removeClass('fixed-end');

                } else {
                    // 마지막 섹션이 노출되는 지점 ~ horizontal의 영역이 끝나는 지점 까지
                    $horizontal.removeClass('fixed');
                    $horizontal.addClass('fixed-end');

                    x = (horizontalWidth - width) * -1;
                }

            } else {
                $horizontal.removeClass('fixed');
                if (scrollY < startY) {
                    // 최상단 Y ~ 요소의 시작지점 전까지
                    x = 0;
                    $horizontal.removeClass('fixed-end');
                }
            }

            // $horizontalWrap.css({'transform': `translateX(${x}px)`});
            gsap.set($horizontalWrap, { x });
        }

        function reset() {
            $win.trigger('resize').trigger('scroll');
            $wrap.removeClass('inactive');
            animationReset();
            animationStart();
        }

        function animationReset() {
            gsap.set($sectionImage, { y: 1280 });
            gsap.set($sectionTitle, { y: 40, autoAlpha: 0 });
            gsap.set($sectionDesc, { y: 60, autoAlpha: 0 });
        }

        function animationStart() {
            const tl = gsap.timeline();
            // gsap.timeline(); 표기한 순서대로 animation 실행

            tl
                .add('sectionStart')
                .to($sectionImage, { y: 0, duration: 1.2, delay: 0.2, ease: 'power3.inOut' }, 'sectionStart')
                .to($sectionTitle, { y: 0, autoAlpha: 1, duration: 0.5, ease: 'sine.inOut' }, 'sectionStart+=1.4')
                .to($sectionDesc, { y: 0, autoAlpha: 1, duration: 0.5, ease: 'sine.inOut' }, '+=0.4');
                // 뒤에 문자열로 적어놓은 section2Start 실행부터 동시에 시작
        }

        init();
    });
})(jQuery);