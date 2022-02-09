$(document).ready(function() {
    var closeHeight = '6em'; 
   var moreText = 'Read More'; 
   var lessText = 'Read Less';
   var duration = '1000';
    var easing = 'linear'; 
   
   $('.entry').each(function() {
   
   var current = $(this).children('.entry-content');
   current.data('fullHeight', current.height()).css('height', closeHeight);
   
   current.after('<a href="javascript:void(0);" class="more-link closed">' + moreText + '</a>');
   
   });
    
   var openSlider = function() {
   link = $(this);
   var openHeight = link.prev('.entry-content').data('fullHeight') + 'px';
   link.prev('.entry-content').animate({'height': openHeight}, {duration: duration }, easing);
   link.text(lessText).addClass('open').removeClass('closed');
       link.unbind('click', openSlider);
   link.bind('click', closeSlider);
   }
   
   var closeSlider = function() {
   link = $(this);
       link.prev('.entry-content').animate({'height': closeHeight}, {duration: duration }, easing);
   link.text(moreText).addClass('closed').removeClass('open');
   link.unbind('click');
   link.bind('click', openSlider);
   }
    
   $('.more-link').bind('click', openSlider);
    
  });