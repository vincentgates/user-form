$(document).ready(function() {
    $('select').material_select();
    $('.wizard > .steps .current a').addClass( 'waves-effect waves-light' );
    $('.wizard > .actions a').addClass( 'btn btn-large waves-effect waves-light' );


});
    var form = $("#example-form");
    form.children("div").steps({
        headerTag: "h3",
        bodyTag: "section",
        transitionEffect: "slideLeft",
      
        /* Labels */
        labels: {
            cancel: "Cancel?",
            current: "current step:",
            pagination: "Pagination",
            finish: "Finish!!",
            next: "Next >",
            previous: "< Previous",
            loading: "Loading ..."
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
            alert("Submitted!");
        }
    });