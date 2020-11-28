var sliderItems = document.getElementById("slider-items");

data.slideshow.forEach((element, index) => {
     const newDiv = document.createElement("div");
     newDiv.id = `div${index+1}`;
     newDiv.classList.add("item");
     if (index == 0) {
          newDiv.classList.add("active");
     }

 
     var img = document.createElement('img');
     img.src = `images/${element.image}`;
     newDiv.appendChild(img);
     const childDiv = document.createElement("div");
     childDiv.classList.add("caption");

     

     var one = document.createElement('p');
     var node = document.createTextNode(element.title);
     one.appendChild(node);
     newDiv.appendChild(one);
     sliderItems.appendChild(newDiv);
     one.style.color = "black";
     one.style.fontSize = "50px";
     one.style.position = "absolute";
     one.style.bottom = "400px";
     one.style.fontWeight = "bold";
     one.style.fontFamily = "calibre";



     var two = document.createElement('p');
     var node = document.createTextNode(element.description1);
     two.appendChild(node);
     newDiv.appendChild(two);
     sliderItems.appendChild(newDiv);
     two.style.color = "cyan";
     two.style.fontSize = "30px";
     two.style.position = "absolute";
     two.style.bottom = "250px";
     two.style.fontFamily = "calibre";

});

var slides=document.querySelector('.slider-items').children;
var nextSlide=document.querySelector(".right-slide");
var prevSlide=document.querySelector(".left-slide");
var totalSlides=slides.length;
var index=0;

nextSlide.onclick=function () {
     next("next");
}
prevSlide.onclick=function () {
     next("prev");
}

function next(direction){

   if(direction=="next"){
      index++;
       if(index==totalSlides){
        index=0;
       }
   } 
   else{
           if(index==0){
            index=totalSlides-1;
           }
           else{
            index--;
           }
    }

  for(i=0;i<slides.length;i++){
          slides[i].classList.remove("active");
  }
  slides[index].classList.add("active");

}

































