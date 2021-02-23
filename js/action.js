jQuery(function(){
   
// on option change in first select

    $('#sel1').on('change',function(){
        if ($(this).prop('selectedIndex') == 1 && !$('#sel2').hasClass('d-none')) {
            $('#sel2').prop('selectedIndex', 0);
            $('#sel2').addClass('d-none');
        } else if ($(this).prop('selectedIndex') == 2 ) {

            // to exclude duplication of json data, showing only result in else part
            if ($('#sel2 option').length == 1){
                $.getJSON( "return.php", function( data ) {
                    $.each( data, function( key, val ) {
                        $('#sel2').append("<option value='"+key+"'>"+val+ "</option>")
                    });
                    
                $('#sel2').removeClass('d-none');
                });
            }
            else {
                $('#sel2').removeClass('d-none');
            }

        }
    })

// on button click
    $('#submit').on('click',function(){
        if ($('#sel1').prop('selectedIndex') == 0 || (!$('#sel2').hasClass('d-none') && $('#sel2').prop('selectedIndex') == 0) ){
            alert('Форма не заполнена');
        } else {
            $('#submit').prop('disabled',true);
            $.ajax({
                type: 'POST',
                url: 'neverexistedpage.php',
                data: {
                    'select1': $('#sel1 option:selected').val(),
                    'select2': $('#sel2 option:selected').val()
                },
                success: function () {
                    $('#submit').prop('disabled',false);
                    alert('Форма отправлена');
                }
            });
        }
    })
});

//