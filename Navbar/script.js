$(document).ready(() => {
    $('#toggleMenuBtn').click(() => {
        $('#primaryNav').slideToggle('slow');
        $('.blurBg').toggleClass('show');
    });
    $('.blurBg').click(() => {
        $('#primaryNav').slideToggle('slow');
        $('.blurBg').toggleClass('show');
    });
});