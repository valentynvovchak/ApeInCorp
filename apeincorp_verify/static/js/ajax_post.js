function sendAjax(){

    let serial = $('#verify_input').val();
    $.ajax({
    async: true,
    dataType: 'json',
    type: 'POST',
    url: `${document.location}`,
    data: {
      'serial': serial,
      'csrfmiddlewaretoken': $('input[name="csrfmiddlewaretoken"]').val() // from index.html
    },
    beforeSend: function() {
        $('#verify__submit_button').css('pointer-events', 'none');
    },
    success: function(data, status, xhr) {
        // alert(data['serial']);
        let result;
        if (data['first_verified'] && data['found']){
            result = `<span style="color: #f8ba00;font-size: 18px;">Your product has already been verified. It Was First Verified On</span>  <br>&nbsp; <span style="color: #69727b;">${data['first_verified']}</span>. <br> <span style="color: #f8ba00;">And has been verified &nbsp;<span><span ${data['status'] === 'DANGER' ? 'style="color: #69727b;"' : 'style="color: #69727b;"'}><br>${data['verifications']}</span> <br> <span style="color: #f8ba00;">Times.<span${data['status'] === 'DANGER' ? '' : ''}<br><br>`
        } else if(!data['found']){
            result = `<span style="color: red;font-size: 18px;">Your Serial Code Is Invalid</span><br><br>`
        } else {
            result = `<span style="color: #f8ba00;font-size: 18px;">Your product has not been verified yet. You are the first.<br> You can be sure that your product is original.</span> <br><br>`
        }
        let sp = "";
        if (data['found']){
            sp = "<span style=\"font-size: 18px;;line-height: 0.3; color: #f8ba00;\">If this is your first time checking the authenticity of your product and the result is showing greater than 1 there is a chance your product may not be authentic.<br> Please contact the retailer where you purchased your product for further information.</span>";
        }

        $('#report').html(`
            <div class="report_item">
                <p style="width: 100%;font-size: 18px;" class="report_item__content">${result} ${sp}</p>
            </div>
        `);
        $('#verify__submit_button').css('pointer-events', 'unset');
    },
    error: function(xhr, status, error) {
        $('#verify__submit_button').css('pointer-events', 'unset');
      alert('Internal Server Error. Please try again later.');
    }
});
}


(function($) {
    $(document).ready(function() {
        sendAjax();
    });


    $(`#verify__submit_button`).on('click', function(event) {
        event.preventDefault();
        sendAjax();
    });
}(jQuery));