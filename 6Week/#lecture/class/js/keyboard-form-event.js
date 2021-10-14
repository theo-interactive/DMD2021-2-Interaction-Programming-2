console.log("Script Load");
(function($) {
    $(document).ready(function() {
        console.log('jQuery Ready');
        // keyboard event

        // keypress
        // keydown
        // keyup
        const $window = $(window);
        const $body = $('body');
        const handleKeyPressWindow = (e) => {
            // console.log('keypress');
            // console.log(e.key);
            // console.log(e.keyCode);
            // console.log(e.which)
        }
        let isBlack = false;
        const handleKeyDownWindow = (e) => {
            // console.log(e.keyCode);
            if (e.keyCode === 13) {
                e.preventDefault();
                // if (!isBlack) {
                //     isBlack = true;
                // } else {
                //     isBlack = false;
                // }
                isBlack = !isBlack;
                console.log('Enter', isBlack);
                // if (isBlack) {
                //     $body.addClass('black');
                // } else {
                //     $body.removeClass('black');
                // }
                isBlack ? $body.addClass('black') : $body.removeClass('black');
            }
            // 13
            // 특수키까지 사용 가능 (Enter, Shift, Control, Alt...)
        }
        // $window.on('keypress', handleKeyPressWindow);
        $window.on('keydown', handleKeyDownWindow);

        const handleKeyUpWindow = (e) => {
            console.log('key up');
        }
        $window.on('keyup', handleKeyUpWindow);

        const $textInput = $('input[type=text]');
        const handleKeyDownTextInput = (e) => {
            console.log('text input', e.keyCode);
        }
        $textInput.on('keydown', handleKeyDownTextInput);

        // form event

        // focusin
        // focusout
        const handleFocusIn = (e) => {
            const $el = $(e.currentTarget);
            $el.addClass('focus');
            console.log('focus in', $el);
        }
        const handleFocusOut = (e) => {
            const $el = $(e.currentTarget);
            $el.removeClass('focus');
            console.log('focus out', $el);
        }
        $textInput.on('focusin', handleFocusIn);
        $textInput.on('focusout', handleFocusOut);

        // select
        // change
        const $select = $('select');
        const $textArea = $('textarea');
        const handleChange = (e) => {
            // console.log(e.target.value);
            // const { value } = e.target;
            const { value: chagedValue } = e.target;
            console.log(chagedValue);
        }
        $select.on('change', handleChange);
        $textArea.on('change', handleChange);
        // submit
    });
})(jQuery);