(function() {
   $('#show-menu-btn').on('click',  function(e){
      e.preventDefault();
      $('ul.menu').toggleClass('menu-show');
  });
})();