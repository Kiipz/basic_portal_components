jQuery(function ($) {
  // Dropdown menu
  $('.sidebar-dropdown > a').click(function () {
    $('.sidebar-submenu').slideUp(200);
    if ($(this).parent().hasClass('active')) {
      $('.sidebar-dropdown').removeClass('active');
      $(this).parent().removeClass('active');
    } else {
      $('.sidebar-dropdown').removeClass('active');
      $(this).next('.sidebar-submenu').slideDown(200);
      $(this).parent().addClass('active');
    }
  });

  //toggle sidebar
  $('#toggle-sidebar').click(function () {
    $('.page-wrapper').toggleClass('toggled');
  });


  // small devices - phone
  $('#toggle-sidebar-small').click(function () {
    $('.sidebar-wrapper').toggleClass('show-nav');
  });
  //toggle sidebar X btn
  $('#close').click(function () {
    $('.sidebar-wrapper').toggleClass('show-nav');
  });


  // bind hover if pinned is initially enabled
  if ($('.page-wrapper').hasClass('pinned')) {
    $('#sidebar').hover(
      function () {
        $('.page-wrapper').addClass('sidebar-hovered');
      },
      function () {
        $('.page-wrapper').removeClass('sidebar-hovered');
      }
    );
  }

  //Pin sidebar
  $('#pin-sidebar').click(function () {
    if ($('.page-wrapper').hasClass('pinned')) {
      // unpin sidebar when hovered
      $('.page-wrapper').removeClass('pinned');
      $('#sidebar').unbind('hover');
    } else {
      $('.page-wrapper').addClass('pinned');
      $('#sidebar').hover(
        function () {
          $('.page-wrapper').addClass('sidebar-hovered');
        },
        function () {
          $('.page-wrapper').removeClass('sidebar-hovered');
        }
      );
    }
  });
});
