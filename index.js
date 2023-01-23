window.addEventListener('scroll', function(){
    // select all headings
    const headings = document.querySelectorAll('h2');
  
    // check if heading is in viewport
    function isInViewport(el) {
      const rect = el.getBoundingClientRect();
      return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
    }
  
    //loop through all headings
    headings.forEach(heading => {
      if (isInViewport(heading)) {
         heading.classList.add('animated');
      } else {
         heading.classList.remove('animated');
      }
    });
  });


  