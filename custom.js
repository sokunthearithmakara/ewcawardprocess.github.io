$(document).ready(function() {
    $("#homeSecondEmailType").attr('disabled', true);
    $("#businessSecondEmailType").attr('disabled', true);
    $("#personal2").attr('disabled', true);
    $("#business2").attr('disabled', true);
    $("[name='contactInfo.secondEmail']").change(function() {
        if ($(this).val() != "") {
            $("#homeSecondEmailType").attr('disabled', false).prop('required', true);
            $("#businessSecondEmailType").attr('disabled', false);
        } else {
            $("#homeSecondEmailType").attr('disabled', true).prop('required', false).prop('checked', false);
            $("#businessSecondEmailType").attr('disabled', true).prop('checked', false);
        }
    });
    $("[name='emergencyContactInfo.secondaryTelephone']").change(function() {
        if ($(this).val() != "") {
            $("#personal2").attr('disabled', false).prop('required', true);
            $("#business2").attr('disabled', false);
        } else {
            $("#personal2").attr('disabled', true).prop('required', false).prop('checked', false);
            $("#business2").attr('disabled', true).prop('checked', false);
        }
    });
});
