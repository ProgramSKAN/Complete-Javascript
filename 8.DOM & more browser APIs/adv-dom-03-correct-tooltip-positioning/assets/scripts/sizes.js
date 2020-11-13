const ul=document.getElementsByTagName('ul');
ul.scrollTo(0,50);//scroll horizantal 0.scroll down to 50px.
ul.scrollTo({top:50,behavior:'smooth'});//for animation

ul.scrollBy(0,50);//it will scroll down to 50px as many times we use this line
ul.scrollBy(0,50);//unlike scrollTo, scrollBy can be used multiple times
ul.scrollBy({top:50,behavior:'smooth'});


// li.scrollIntoView({behavior: 'smooth'})//scrol to a point it is viewable