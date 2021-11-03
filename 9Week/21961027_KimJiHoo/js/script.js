console.log("Script Load");
(function($){
    $(document).ready(function() {
        console.log('jQuery Ready');

        const $win = $(window);

        const $gn = $('#global-nav');
        const $gnEl = $gn.find('a');

        const $content = $('.content');
        const $section = $content.children('.section');

        var offset = 0; // 오프셋.
        var currentTarget = 0; // 선택한 섹션의 번호.
        var currentPosition = 0; // 현재 위치.
        var isClick = false; // 현재 클릭되었는지 확인.


        function init(){
            setting();
            addEvent();
            reset();
        }

        function setting(){
            resetOffset();
        }


        function addEvent(){
            $win.on('scroll', handleScrollWindow).trigger('scroll');
            $gnEl.on('click', handleClickMove);
        }


        function handleScrollWindow(){
            const scrollY = $win.scrollTop();
            // console.log('scroll', scrollY);
           
            // $section.map()
            // $section.forEach(); -> 과 같은 방식인
            $.each($section, (idx, el) => {
                // console.log(idx, el);
                const $el = $(el);
                const start = $el.offset().top;
                const end = start + $el.innerHeight(); // padding을 포함한 영역임.

                const add = $win.height() * 0.3; // 섹션의 반쯤을 지나서 트리거 작동하도록!
                if(scrollY >= start - add && scrollY < end - add){ // 스크롤해서 나타나는 영역(의 인덱스)을 표시.
                    console.log(idx);

                    if(!$gnEl.eq(idx).hasClass('active')){ // 클래스가 없을 때만 추가.
                        $gnEl.removeClass('active'); 
                        $gnEl.eq(idx).addClass('active');
                        currentPosition = idx;
                    }                    
                   
                }

            });
        }

        function handleClickMove(e){ // a 태그 클릭 시 페이지 스크롤 이동.
            if(!isClick){
                isClick = true;
        
                currentTarget = $gnEl.index(this);
    
                offset = $section.eq(currentTarget).offset();
                console.log(Math.abs(currentPosition - currentTarget));
                $('html').animate({scrollTop : offset.top - 100}, 400 + Math.abs(currentPosition - currentTarget) * 200, ()=>{
                    isClick = false; 
                    // console.log("애니메이션 끝나면 이동종료");
                });
            }
            else{
                return;
                // console.log('현재 이동중');
            }
            
        }

        function resetOffset(){ // 시작 시 맨 위로 스크롤.
            $('html').animate({scrollTop : 0}, 800);
        }


        function reset(){
            isClick = false;
        }

        init();


    }); 
})(jQuery);