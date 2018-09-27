$(document).ready(function() {
    //make sure secondary email type and secondary phone type are disabled when the secondary email and secondary phone are empty.
    $("#homeSecondEmailType").attr('disabled', true);
    $("#businessSecondEmailType").attr('disabled', true);
    $("#personal2").attr('disabled', true);
    $("#business2").attr('disabled', true);
    $("#homeSecondEmailType").closest('fieldset').addClass("text-muted");
    $("#personal2").closest('fieldset').addClass("text-muted");
    $("[name='contactInfo.secondEmail']").change(function() {
        if ($(this).val() != "") {
            $("#homeSecondEmailType").attr('disabled', false).prop('required', true);
            $("#businessSecondEmailType").attr('disabled', false);
            $("#homeSecondEmailType").closest('fieldset').removeClass("text-muted");
            var requiredStar = '<span class="required_field">*</span>';
            $(requiredStar).appendTo($("#homeSecondEmailType").closest('fieldset').find("legend"));

        } else {
            $("#homeSecondEmailType").attr('disabled', true).prop('required', false).prop('checked', false);
            $("#businessSecondEmailType").attr('disabled', true).prop('checked', false);
            $("#homeSecondEmailType").closest('fieldset').addClass("text-muted");
            $("#homeSecondEmailType").closest('fieldset').find("legend span").replaceWith("");
        }
    });
    $("[name='emergencyContactInfo.secondaryTelephone']").change(function() {
        if ($(this).val() != "") {
            $("#personal2").attr('disabled', false).prop('required', true);
            $("#business2").attr('disabled', false);
            $("#personal2").closest('fieldset').removeClass("text-muted");
        } else {
            $("#personal2").attr('disabled', true).prop('required', false).prop('checked', false);
            $("#business2").attr('disabled', true).prop('checked', false);
            $("#personal2").closest('fieldset').addClass("text-muted");
        }
    });
    // Limit characters to English characters, numbers, space, and special characters; otherwise, remove the restricted characters as entered.
    $("input[type='text']").bind('keyup blur',function() { 
            $(this).val($(this).val().replace(/[^0-9A-Za-z!;"?_@<>=#$%&'()*+,-./\[\]\ ]/g,''))
        });
});
