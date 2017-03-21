$(function() {
    FastClick.attach(document.body);

    $('.j-select-no').on(clickEvent, function() {
        var self = $(this);

        self.css('opacity', '1').addClass('problem');
        $('.j-select-yes-' + self.data('select')).css('opacity', '0');
        $('.j-feedback-popup-' + self.data('select')).fadeIn();
    });

    $('.j-select-yes').on(clickEvent, function() {
        var self = $(this);

        self.css('opacity', '1');
        $('.j-select-no-' + self.data('select')).css('opacity', '0').removeClass('problem');
    });

    $('.j-btn-close').on(clickEvent, function() {
        $('.j-feedback-popup').fadeOut();
    });

    window.storyCLMNavigation.onSwipeNext = function(direction) {
        var problems = [];

        $('.problem').each(function(index, item) {
            problems.push($(this).data('problem'));
        });

        if (problems.join(', ')) {
            StoryCLM.CustomEvents.Set('problems_information', problems.join(', '));
            console.log('problems_information: ' + problems.join(', '));
        }

        if ($('#feedback-message-1').val()) {
            StoryCLM.CustomEvents.Set('sovet_information', $('#feedback-message-1').val());
            console.log('sovet_information: ' + $('#feedback-message-1').val());
        }

        if ($('#feedback-message-2').val()) {
            StoryCLM.CustomEvents.Set('sovet_information', $('#feedback-message-2').val());
            console.log('sovet_information: ' + $('#feedback-message-2').val());
        }

        if ($('#feedback-message-3').val()) {
            StoryCLM.CustomEvents.Set('sovet_information', $('#feedback-message-3').val());
            console.log('sovet_information: ' + $('#feedback-message-3').val());
        }

        if ($('#feedback-message-4').val()) {
            StoryCLM.CustomEvents.Set('sovet_information', $('#feedback-message-4').val());
            console.log('sovet_information: ' + $('#feedback-message-4').val());
        }

        if (direction) {
            window.location = direction;
        } else {
            return false;
        }
    }


});