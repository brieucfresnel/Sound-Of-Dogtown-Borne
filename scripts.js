$(document).ready(function(){
    $('.button').click(function(){
        var clickBtnValue = $(this).val();
        var ajaxurl = 'ajax.php',
        data =  {'action': clickBtnValue};
        $.post(ajaxurl, data, function (response) {
            document.getElementById('table-slot').innerHTML = response;
        });
    });

    $('#search').keyup(function() {
      console.log("ok");
    });

});
