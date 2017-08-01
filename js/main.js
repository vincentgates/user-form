
(function () {
    var form = $('#user-form');
    form.children('div').steps({
        headerTag: 'h3',
        bodyTag: 'section',
        transitionEffect: 'slideLeft',
      
        /* Labels */
        labels: {
            cancel: 'Cancel?',
            current: 'current step:',
            pagination: 'Pagination',
            finish: 'Submit',
            next: 'Next >',
            previous: '< Previous',
            loading: 'Loading ...'
        },
        onStepChanging: function (event, currentIndex, newIndex)
        {
            return true;
        },
        onFinishing: function (event, currentIndex)
        {
            return true;
        },
        onFinished: function (event, currentIndex)
        {
            form.submit();
        }
    });
}());

$(document).ready(function() {
    $('select').material_select();
    $('.wizard > .steps .current a').addClass( 'waves-effect waves-light' );
    $('.wizard > .actions a').addClass( 'btn btn-large waves-effect waves-light' );

    $("#user-form").validate({
        rules: {
            uname: {
                required: true,
                minlength: 5
            },
            password: {
                required: true,
                minlength: 5
            },
            cpassword: {
                required: true,
                minlength: 5,
                equalTo: '#password'
            },
            crole:'required',
            fname:'required',
            lname:'required',
            cemail: {
                required: true,
                email:true
            },
            ctel:'required',
            ccomment: {
                required: true,
                minlength: 15
            },
            cgender:'required',
        },
        //For custom messages
        messages: {
            uname:{
                required: 'Enter a username',
                minlength: 'Enter at least 5 characters'
            },
            curl: 'Enter your website',
        },
        errorElement : 'div',
        errorPlacement: function(error, element) {
            var placement = $(element).data('error');
            if (placement) {
                $(placement).append(error)
            } else {
                error.insertAfter(element);
            }
        }
    });

});