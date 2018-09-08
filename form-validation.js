$(document).ready(function() {
    //Enable Bootstrap tooltip
    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    });

    //Enable jquery datepicker for only Safari; otherwise, use default datepicker
    $(function() {
        if ($('[type="date"]').prop('type') != 'date') {
            $('[type="date"]').datepicker({
                changeYear: true,
                yearRange: "-99:+99",
                changeMonth: true
            });
        }
    });


    $('#debugON').click(function() {
        if ($(this).is(':checked')) {
            //			alert("Debug: ON");
            //			$('#ewcUsers').removeClass('required').removeAttr('required');
            //			$('#FamilyName').removeClass('required').removeAttr('required');
            $('#ewcUsers').prop('required', false);
        } else {
            //			alert("Debug: OFF");
            $('#ewcUsers').prop('required', true);
        }

    });

    // Check if the participant is student
    $('#student-yes').click(function() {
        if ($('#ewcActivity').val() != "") {
            selectedEWCActivity = $('#ewcActivity option:selected').text();
        } else {
            selectedEWCActivity = "";
        };
        $('#student-section').css('display', 'block');
        $('.nameOfEWCStudentProgram, #fieldOfStudy-list, #degreeType, #ins-opt-ewc').prop('required', true);
        $('#student-section input[type=radio]').prop('checked', false);
        $('.EWCStudentProgram, .fieldOfStudy, #degreeType, #fieldOfStudy-list, #fieldOfStudy-other, #health-ins-company').val('');
        $('#div-health-ins-company').css('display', 'none');
        $('.nameOfEWCStudentProgram').val(selectedEWCActivity);
    });

    $('#student-no').click(function() {
        $('#student-section').css('display', 'none');
        $('.nameOfEWCStudentProgram, #fieldOfStudy-list, #fieldOfStudy-other, .fieldOfStudy, #degreeType, #ins-opt-ewc, #health-ins-company').prop('required', false);
        $('#student-section input[type=radio]').prop('checked', false);
        $('.nameOfEWCStudentProgram, .EWCStudentProgram, .fieldOfStudy, #fieldOfStudy-list, #degreeType, #fieldOfStudy-other, #health-ins-company').val('');
    });

    //check Preferred email address entered
    $('#confirmpreferredEmail').change(function() {
        var firstEmail = $('.preferredEmailInput').val();
        var secondEmail = $('#confirmpreferredEmail').val();
        if (secondEmail === firstEmail) {
            $('.match-text').css('display', 'inline-block');
            $('.unmatch-text').css('display', 'none');
        } else {
            $('.match-text').css('display', 'none');
            $('.unmatch-text').css('display', 'inline-block');
        };
    });
    $('.preferredEmailInput').change(function() {
        var firstEmail = $('.preferredEmailInput').val();
        var secondEmail = $('#confirmpreferredEmail').val();
        if (secondEmail === firstEmail && secondEmail != "") {
            $('.match-text').css('display', 'inline-block');
            $('.unmatch-text').css('display', 'none');
        } else if (secondEmail !== firstEmail && secondEmail != "") {
            $('.match-text').css('display', 'none');
            $('.unmatch-text').css('display', 'inline-block');
        };
    });

    //Check if country of citizenship 1 is US
    $('#countryOfCitizenship').change(function() {
        //		alert("Country " + $('#countryOfCitizenship').val() + "selected!");
        if ($('#countryOfCitizenship').val() == 'US' || $('#countryOfCitizenship2').val() == 'US') {
            $('#homeStateUS').css('display', 'inline-block');
            $('.personalInfohomeStateUS').prop('required', true);
        } else {
            $('#homeStateUS').css('display', 'none');
            $('.personalInfohomeStateUS').prop('required', false);
            $('.personalInfohomeStateUS').val('');
        }
    });

		//Check if country of citizenship 2 is US
    $('#countryOfCitizenship2').change(function() {
        //		alert("Country " + $('#countryOfCitizenship').val() + "selected!");
        if ($('#countryOfCitizenship').val() == 'US' || $('#countryOfCitizenship2').val() == 'US') {
            $('#homeStateUS').css('display', 'inline-block');
            $('.personalInfohomeStateUS').prop('required', true);

        } else {
            $('#homeStateUS').css('display', 'none');
            $('.personalInfohomeStateUS').prop('required', false);
            $('.personalInfohomeStateUS').val('');

        }
    });

		//Check if businessCountry is US
    $('#businessCountry').change(function() {
        if ($('#businessCountry').val() == 'US') {
            $('#div-businessState').css('display', 'inline-block');
            $('#businessState').prop('required', true);
            $('#div-businessProvince').css('display', 'none');
            $('#businessProvince').val('');
            //			$('#businessProvince').prop('required', false);
        } else {
            $('#div-businessProvince').css('display', 'inline-block');
            //			$('#businessProvince').prop('required', true);
            $('#div-businessState').css('display', 'none');
            $('#businessState').prop('required', false);
            $('#businessState').val('');
        }
    });

		//Check if homeCountry is US
    $('#homeCountry').change(function() {
        if ($('#homeCountry').val() == 'US') {
            $('#div-homeState').css('display', 'inline-block');
            $('#homeState').prop('required', true);
            $('#div-homeProvince').css('display', 'none');
            $('#homeProvince').val('');
            //			$('#homeProvince').prop('required', false);
        } else {
            $('#div-homeProvince').css('display', 'inline-block');
            //			$('#homeProvince').prop('required', true);
            $('#div-homeState').css('display', 'none');
            $('#homeState').prop('required', false);
            $('#homeState').val('');
        }
    });

		//Check if prefix is Other
    $('#prefix').change(function() {
        if ($('#prefix').val() == 'Other') {
            $('#div-prefixOther').css('display', 'inline-block');
            $('#prefixOther').prop('required', true);
        } else {
            $('#div-prefixOther').css('display', 'none');
            $('#prefixOther').prop('required', false);
            $('#prefixOther').val('');
        }
    });

		//Check if dual citizen
    $('#dual-yes').click(function() {
        $('#country2').css('display', 'inline-block');
        $('#countryOfCitizenship2').prop('required', true);
    });
    $('#dual-no').click(function() {
        $('#country2').css('display', 'none');
        $('#countryOfCitizenship2').prop('required', false);
        $('#countryOfCitizenship2').val('');
    });

		//Check if emergencyContacts speak English
    $('#english-no').click(function() {
        $('#contactLanguage').css('display', 'inline-block');
        $('#emergencyContactsLang').prop('required', true);
    });
    $('#english-yes').click(function() {
        $('#contactLanguage').css('display', 'none');
        $('#emergencyContactsLang').prop('required', false);
        $('#emergencyContactsLang').val('');
    });

		//Check if airCountry is US, then make state required
    $('.airCountry').change(function() {
        if ($('.airCountry').val() == 'US') {
            $('.airState').prop('required', true);
        } else {
            $('.airState').prop('required', false);
            $('.airState').val('');
        }
    });

		//What happens when Visa residing in US is checked
    $('#residingUS').click(function() {
        if ($(this).is(':checked')) {
            $('#div-visaStatus').css('display', 'inline-block');
            $('#visaStatus').prop('required', true);
        } else {
            $('#div-visaStatus').css('display', 'none');
            $('#visaStatus').prop('required', false);
            $('#visaStatus').val('');
            $('#div-visaOther').css('display', 'none');
            $('#visaOther').prop('required', false);
            $('#visaOther').val('');
        }
    });

	//What happens when Visa status changes
    $('#visaStatus').change(function() {
        if ($('#visaStatus').val() == 'Other') {
            $('#div-visaOther').css('display', 'inline-block');
            $('#visaOther').prop('required', true);
        } else {
            $('#div-visaOther').css('display', 'none');
            $('#visaOther').prop('required', false);
            $('#visaOther').val('');
        }
    });

	//What happens when Visa J1 visitor is checked
    $('#j1-visitor').click(function() {
        if ($(this).is(':checked')) {
            $('#div-j1-start-date').css('display', 'inline-block');
            $('#j1-start-date-show').prop('required', true);

            $('#div-j1-end-date').css('display', 'inline-block');
            $('#j1-end-date-show').prop('required', true);

            $('#div-j1-category').css('display', 'inline-block');
            $('#j1-category').prop('required', true);
        } else {
            $('#div-j1-start-date').css('display', 'none');
            $('#j1-start-date-show').prop('required', false);
            $('#j1-start-date-show').val('');

            $('#div-j1-end-date').css('display', 'none');
            $('#j1-end-date-show').prop('required', false);
            $('#j1-end-date-show').val('');

            $('#div-j1-category').css('display', 'none');
            $('#j1-category').prop('required', false);
            $('#j1-category').val('');

            $('#div-j1-category-other').css('display', 'none');
            $('#j1-category-other').prop('required', false);
            $('#j1-category-other').val('');
        }
    });
		//What happens when Visa J1 category is Other
    $('#j1-category').change(function() {
        if ($('#j1-category').val() == 'Other') {
            $('#div-j1-category-other').css('display', 'inline-block');
            $('#j1-category-other').prop('required', true);
        } else {
            $('#div-j1-category-other').css('display', 'none');
            $('#j1-category-other').prop('required', false);
            $('#j1-category-other').val('');
        }
    });

		//What happens when health insurance options are selected
    $('#ins-opt-current').click(function() {
        $('#div-health-ins-company').css('display', 'inline-block');
        $('#health-ins-company').prop('required', true);
    });
    $('#ins-opt-ewc').click(function() {
        $('#div-health-ins-company').css('display', 'none');
        $('#health-ins-company').prop('required', false);
        $('#health-ins-company').val('');
    });
    $('#ins-opt-own').click(function() {
        $('#div-health-ins-company').css('display', 'none');
        $('#health-ins-company').prop('required', false);
        $('#health-ins-company').val('');
    });

		//What happens when Gender "other" is selected
    $('#genderOther').click(function() {
        $('#div-genderOtherComment').css('display', 'inline-block');
        $('#genderOtherComment').prop('required', true);
    });
		//What happens when Gender "male" is selected
    $('#male').click(function() {
        $('#genderOtherComment').val('');
        $('#genderOtherComment').prop('required', false);
        $('#div-genderOtherComment').css('display', 'none');
        //   		console.log('*** Male option selected!');
    });
		//What happens when Gender "female" is selected
    $('#female').click(function() {
        $('#genderOtherComment').val('');
        $('#genderOtherComment').prop('required', false);
        $('#div-genderOtherComment').css('display', 'none');
    });

    //Set the Name of EWC Student Program
    $('.nameOfEWCStudentProgram').change(function() { //when visible name of EWC Student Program is changed
        var degreeType = $('#degreeType').val();
        var programName = $('.nameOfEWCStudentProgram').val();
        $('.EWCStudentProgram').val(degreeType + "-" + programName); // add Master's-Arts to hidden EWC Program Name
    });
    $('#degreeType').change(function() { //when visible DegreeType is changed
        var degreeType = $('#degreeType').val();
        var programName = $('.nameOfEWCStudentProgram').val();
        $('.EWCStudentProgram').val(degreeType + "-" + programName); // add Master's-Arts to hidden EWC Program Name
    });
    $('#ewcActivity').change(function() { //when EWC Activity in the first section is changed
        $('input[name=student-check]').prop('checked', false); //force the user to tell if they're student again.
    });

    // Field of Study: copy value from drop-down to hidden field; if "other", display "other" box
    $('#fieldOfStudy-list').change(function() {
        if ($('#fieldOfStudy-list').val() == 'Other') {
            $('#div-fieldOfStudy-other').css('display', 'inline-block');
            $('#fieldOfStudy-other').prop('required', true);
            $('.fieldOfStudy').val($('#fieldOfStudy-other').val());
        } else {
            $('#div-fieldOfStudy-other').css('display', 'none');
            $('#fieldOfStudy-other').prop('required', false);
            $('#fieldOfStudy-other').val('');
            $('.fieldOfStudy').val($('#fieldOfStudy-list').val());
        }
    });

    $('#fieldOfStudy-other').change(function() { //when other field of study is entered
        $('.fieldOfStudy').val($('#fieldOfStudy-other').val()); //copy value to the hidden field instead.
    });

    //Make sure the hidden fields are programmaticaly displayed when users click on the back button after form submitted
    $(function() {
        var hiddenFieldDiv = ['#div-prefixOther', '#div-genderOtherComment', '#country2', '#homeStateUS', '#div-businessProvince', '#div-businessState', '#div-homeProvince', '#div-homeState', '#contactLanguage', '#div-visaStatus', '#div-visaOther', '#div-j1-start-date', '#div-j1-end-date', '#div-j1-category', '#div-j1-category-other', '#div-health-ins-company', '#div-fieldOfStudy-other'];

        var hiddenField = ['#prefixOther', '#genderOtherComment', '#countryOfCitizenship2', '.personalInfohomeStateUS', '#businessProvince', '#businessState', '#homeProvince', '#homeState', '#emergencyContactsLang', '#visaStatus', '#visaOther', '#j1-start-date-show', '#j1-end-date-show', '#j1-category', '#j1-category-other', '#health-ins-company', '#fieldOfStudy-other'];

        for (i = 0; i < hiddenField.length; i++) {
            if ($(hiddenField[i]).val() == '') {
                $(hiddenFieldDiv[i]).css('display', 'none');
                $(hiddenField[i]).prop('required', false);
            } else {
                $(hiddenFieldDiv[i]).css('display', 'inline-block');
                $(hiddenField[i]).prop('required', true);
            }
        }

    });

//Notes for Date fields: date fields with type=date have been added to each date field (type=text) for better validation. Value from type=date is transfered to hidden type=text which then push to PCS when form is submitted.
    //Validate personal date of birth
    $('#dob-personal-show').change(function() {
        var dateValue = $('#dob-personal-show').val();
        var dateSplit = dateValue.split("-");
        var year = dateSplit[0];
        var month = dateSplit[1];
        var day = dateSplit[2];
        if ($('#dob-personal-show').prop('type') != 'date') {
            $('#dob-personal').val(dateValue); //safari
        } else {
            $('#dob-personal').val(month + "/" + day + "/" + year); //non-safari
        }
    });

    //Validate flight date of Birth
    $('#dob-air-travel-show').change(function() {
        var dateValue = $('#dob-air-travel-show').val();
        var dateSplit = dateValue.split("-");
        var year = dateSplit[0];
        var month = dateSplit[1];
        var day = dateSplit[2];
        if ($('#dob-air-travel-show').prop('type') != 'date') {
            $('#dob-air-travel').val(dateValue); //safari
        } else {
            $('#dob-air-travel').val(month + "/" + day + "/" + year); //non-safari
        }
    });

    //j1 start date
    $('#j1-start-date-show').change(function() {
        var dateValue = $('#j1-start-date-show').val();
        var dateSplit = dateValue.split("-");
        var year = dateSplit[0];
        var month = dateSplit[1];
        var day = dateSplit[2];
        if ($('#j1-start-date-show').prop('type') != 'date') {
            $('#j1-start-date').val(dateValue); //safari
        } else {
            $('#j1-start-date').val(month + "/" + day + "/" + year); //non-safari
        }
    });

    //j1 end date
    $('#j1-end-date-show').change(function() {
        var dateValue = $('#j1-end-date-show').val();
        var dateSplit = dateValue.split("-");
        var year = dateSplit[0];
        var month = dateSplit[1];
        var day = dateSplit[2];
        if ($('#j1-end-date-show').prop('type') != 'date') {
            $('#j1-end-date').val(dateValue);
        } else {
            $('#j1-end-date').val(month + "/" + day + "/" + year);
        }
    });

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
});
