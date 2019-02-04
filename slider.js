function Slider(newSlider){
	var that = this;
	    that.pictures 	   = $('.mySlide');
	    that.slider        = $(newSlider);
	    that.arrowPrev     = that.slider.find('.b-preview__arrow_prev');
	    that.arrowNext     = that.slider.find('.b-preview__arrow_next');
	    that.currentSlides = [0, 1]; 
	    // that.currentIndex  = 0;
	    // that.showingPicture = 2;

	// initiate

	for (i = 0; i < that.pictures.length; i++){
		if (i < that.currentSlides.length){
			$(that.pictures[i]).addClass('show')
		} else {
			$(that.pictures[i]).addClass('hide')
		}
	}

	// initiate	
	
	that.slideNext = function(){
		console.log("next");
		that.slideUpdate(2);
	}
	that.slideBack = function(){
		console.log("back")
		that.slideUpdate(-2);
	}


	that.slideUpdate = function(ourStep){

		for(i=0; i < that.currentSlides.length; i ++){
			var nextSlide = that.currentSlides[i] + ourStep;

			if(nextSlide >= that.pictures.length){
				nextSlide -= that.pictures.length;
			} else if(nextSlide < 0){
				nextSlide += that.pictures.length;
			}

			$(that.pictures[that.currentSlides[i]]).toggleClass('hide').toggleClass('show')
			$(that.pictures[nextSlide]).toggleClass('hide').toggleClass('show')
			that.currentSlides[i] = nextSlide;
		}
	};
	
	that.arrowPrev.click(that.slideBack);
	that.arrowNext.click(that.slideNext);
}


// that.slideUpdate = function(ourStep){
// 		var nextSlide1 = that.currentSlide1 + ourStep;
// 		var nextSlide2 = that.currentSlide2 + ourStep;
			
// 		if(nextSlide1 >= that.pictures.length){
// 			nextSlide1 -= that.pictures.length;
// 		} else if(nextSlide1 < 0){
// 			nextSlide1 += that.pictures.length;
// 		}

// 		if(nextSlide2 >= that.pictures.length){
// 			nextSlide2 -= that.pictures.length;
// 		} else if(nextSlide2 < 0){
// 			nextSlide2 += that.pictures.length;
// 		}

// 		$(that.pictures[that.currentSlide1]).hide() //почему надо оборачивать в jQuery 
// 		$(that.pictures[that.currentSlide2]).hide() //почему надо оборачивать в jQuery 

// 		$(that.pictures[nextSlide1]).show()
// 		$(that.pictures[nextSlide2]).show()
// 		that.currentSlide1 = nextSlide1;
// 		that.currentSlide2 = nextSlide2;
// 	};


// that.slideUpdate = function(ourStep){

// 		for(i=0; i < that.currentSlides.length; i ++){
// 			var nextSlide = that.currentSlides[i] + ourStep;

// 			if(nextSlide >= that.pictures.length){
// 				nextSlide -= that.pictures.length;
// 			} else if(nextSlide < 0){
// 				nextSlide += that.pictures.length;
// 			}

// 			$(that.pictures[that.currentSlides[i]]).toggleClass('hide').toggleClass('show')
// 			$(that.pictures[nextSlide]).toggleClass('hide').toggleClass('show')
// 			that.currentSlides[i] = nextSlide;
// 		}


// 	};


// that.slideUpdate = function(ourStep){
// 		for(i=0; i < that.showingPicture; i ++){
// 			var nextSlide = that.currentIndex + i + ourStep;

// 			if(nextSlide >= that.pictures.length){
// 				nextSlide -= that.pictures.length;
// 			} else if(nextSlide < 0){
// 				nextSlide += that.pictures.length;
// 			}
// 			if(i == 0){
// 				currentIndex = nextSlide
// 			}

// 			$(that.pictures[that.currentIndex + i]).toggleClass('hide').toggleClass('show')
// 			$(that.pictures[nextSlide]).toggleClass('hide').toggleClass('show')

// 		}
// 		that.currentIndex = currentIndex;

// 	};


