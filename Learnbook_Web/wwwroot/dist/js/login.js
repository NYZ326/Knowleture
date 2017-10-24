(function ($) {
    'use strict';

    var form = $('#learnbook-login-form'),
        submitButton = $('#learnbook-login-submit'),
        validationContainer = $('.validation-summary-errors');

    form.attr('action', form.attr('action') + window.location.hash);

    submitButton.on('click', function (event) {
        event.preventDefault();

        if (form.valid()) {
            var tl = new TimelineMax({
                onComplete: submitForm
            });

            tl.add(TweenMax.to(['.form-horizontal', validationContainer], 0.4, { autoAlpha: 0 }));
            tl.add(TweenMax.to('.logo-wrap', 0.5, { yPercent: 50, ease: Expo.easeOut }));
            tl.add(TweenMax.to('#login-loading', 0.5, { autoAlpha: 1, yPercent: -100, ease: Expo.easeOut }), 0.4);
        }

        function submitForm() {
            setTimeout(function () {
                form.submit();
            }, 500);
        }
    });

})(window.jQuery);