/*/Participant Agreement
    //1. step 1
    $('#step1').click(function() {
        $('#step1-div').removeClass('alert-primary').addClass('alert-success');
        $('#step2').removeClass('alert-light').addClass('alert-primary');
        $('#do-not-auth').prop('disabled', false);
    });

    //2. step 2
    $('#do-not-auth').click(function() {
        if ($(this).is(':checked')) {
            $('#step3').removeClass('alert-light').addClass('alert-primary');
            $('#step2').removeClass('alert-primary').addClass('alert-success');
            $('#saveform').prop('disabled', false);
        } else {
            $('#step3').removeClass('alert-success').addClass('alert-light');
            $('#step2').removeClass('alert-success').addClass('alert-primary');
            $('#saveform').prop('disabled', true);
            $('#formSubmit').prop('disabled', true);
        }
    });

    //3. Step 3.
    $('#saveform').click(function() {
        window.print();
        $('#formSubmit').prop('disabled', false);
        $('#step3').removeClass('alert-light').addClass('alert-success');

    });
*/
