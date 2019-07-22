var sidebarMenu = {
  isOpen: false,
  open: function(){
    $( '#sidebar' ).addClass('show');
    this.isOpen = true;
  },

  close: function(){
    $( '#sidebar' ).removeClass('show');
    this.isOpen = false;
  }
}

$( document ).ready(function(){
  $(".menu-toggler").on('click', function(){

    if ( sidebarMenu.isOpen ) {
      sidebarMenu.close();
      $(this).removeClass( "active" );
    }

    else {
      sidebarMenu.open();
      $(this).addClass( "active" );
    }

  });
});
