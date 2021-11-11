console.log("Script Load");
(function($){
    $(document).ready(function() {
        console.log('jQuery Ready');

        let horizontalMax = 0;
        // let scrollY = 0;

        const $win = $(window);
        const $wrap = $('#wrap');
        const $section1 = $('#section-1');
        const $section1Image = $section1.find('img');


        const $section2 = $('#section-2');
        const $section2Image = $section2.find('img');
        const $section2Title = $section2.find('.title');
        const $section2Desc = $section2.find('.desc');

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
            // const width = $win.width();
            // const height = $win.height();
            // window.innerWidth -> width
            // window.innerHeight -> height
            const { innerWidth: width, innerHeight: height } = window
            $horizontal.outerHeight(horizontalMax * height);
            $horizontalWrap.outerWidth(horizontalMax * width);
            $horizontalItem.outerWidth(width);
        }

        function handleScrollWindow() {
            // scrollY = $win.scrollTop();
            // const { scrollY } = window
            // console.log(scrollY);
            horizontalScroll();
        }

        function horizontalScroll() {
            const { scrollY, innerWidth: width, innerHeight: height } = window
            let posX = 0;
            const horizontalWidth = horizontalMax * width
            const horizontalHeight = horizontalMax * height;
            // 요소와 스크롤을 비교하는 방법 1.
            // console.log($horizontal.offset(), $horizontal.offset().top, scrollY);
            const startY = $horizontal.offset().top
            const endY = startY + horizontalHeight;
            // 스크롤이 고정되는 시점 ~ 허용 지점까지 (조건)
            if (scrollY >= startY && scrollY < endY) {
                // 스크롤 값에 따라서 가로 영역으로 움직이는 인터랙션.
                if (scrollY < endY - height) {
                    // x : y = a : b
                    // 현재 x 위치 : (요소가 움직일 수 있는 최대 스크롤(가로) 범위) = (요소의 시작지점부터의 스크롤 위치값) : (요소가 움직일 수 있는 최대 스크롤(세로) 범위)
                    x = (horizontalWidth - width) * (scrollY - startY) / (horizontalHeight - height) * -1;
                    // horizontal 이 시작되는 지점 ~ 마지막 섹션이 노출되기 전 지점 까지
                    $horizontal.addClass('fixed');
                    $horizontal.removeClass('fixed-end');
                } else {
                    // 마지막 섹션이 노출되는 지점 ~ horizontal 의 영역이 끝나는 지점 까지
                    $horizontal.removeClass('fixed');
                    $horizontal.addClass('fixed-end');
                    x = (horizontalWidth - width) * -1;
                }
            } else {
                $horizontal.removeClass('fixed');
                if (scrollY < startY) {
                    // 최상단 Y ~ 요소의 시작지점 전까지.
                    x = 0;
                    $horizontal.removeClass('fixed-end');
                }
            }
            gsap.set($horizontalWrap, { x });
            // set == css 거의 비슷.

            // set()
            // to()
            // fromTo()
            // from()

            // $horizontalWrap.css({'transform': `translateX(${x}px)`});
            // 요소와 스크롤을 비교하는 방법 2.
            // 바닐라JS
            const boundY = $horizontal[0].getBoundingClientRect().top
            if (boundY <= 0 && boundY > $horizontal.outerHeight() * -1) {
                // 스크롤 값에 따라서 가로 영역으로 움직이는 인터랙션.
            }
        }

        function reset() {
            $win.trigger('resize').trigger('scroll');
            $wrap.removeClass('inactive');
            animation();
            animation2Reset();
            animation2Start();
        }

        function animation() {
            
            // gsap.set($section1Image, { autoAlpha: 0, scale: 1.05, y: 20, skewX: 5 });

            // gsap.to($section1Image, { 
            //     autoAlpha: 1, 
            //     scale: 1,
            //     y: 0,
            //     skewX: 0,
            //     duration: 0.6,
            //     delay: 0.2,
            
            //     ease: 'power3.inOut',

            //     onUpdate: function() {
            //     },

            //     onComplete: function() {
            //         console.log('complete');
            //     }
            // });

            gsap.fromTo($section1Image, 
                { autoAlpha: 0, scale: 1.05, y: 20, skewX: 5 },
                { 
                    autoAlpha: 1, 
                    scale: 1,
                    y: 0,
                    skewX: 0,
                    duration: 0.6,
                    delay: 0.2,
                
                    ease: 'power3.inOut',
                    onUpdate: function() {
                    },
                    onComplete: function() {
                        console.log('complete');
                    }
                }
            );
        }

        function animation2Reset() {
            gsap.set($section2Image, { y: 20, autoAlpha: 0, scale: 1.05 });
            gsap.set($section2Title, { y: 40, autoAlpha: 0 });
            gsap.set($section2Desc, { y: 60, autoAlpha: 0 });
        }

        function animation2Start() {
            console.log($section2Image);
            console.log($section2Title);
            console.log($section2Desc);

            const tl = gsap.timeline();
            // tl.fromTo($section2Image, { y: 100}, { y: 0, duration: 0.3, delay: 0.5});
            // tl
            //     .to($section2Image, { y: 0, autoAlpha: 1, scale: 1, duration: 0.3, delay: 0.5 })
            //     .to($section2Title, { y: 0, autoAlpha: 1, duration: 0.5, ease: 'sine.inOut' }, '-=0.3')
            //     .to($section2Desc, { y: 0, autoAlpha: 1, duration: 0.5, ease: 'sine.inOut' }, '+=1')

            tl
                .add('section2Start')
                .to($section2Image, { y: 0, autoAlpha: 1, scale: 1, duration: 0.3, delay: 0.5 }, 'section2Start')
                .to($section2Title, { y: 0, autoAlpha: 1, duration: 0.5, ease: 'sine.inOut' }, 'section2Start+=0.5')
                .to($section2Desc, { y: 0, autoAlpha: 1, duration: 0.5, ease: 'sine.inOut' }, 'section2Start+=0.8')
        }

        init();
    });
})(jQuery);