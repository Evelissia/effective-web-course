class Slider {

    constructor(slideIndex, options) {
    this.options = options || {}
    this.interval = null
    this.slideIndex = slideIndex
    this.sliderItems = document.getElementsByClassName('slider-item')
    this.controlItems = document.getElementsByClassName('slider__control-item')
    this.dotContainer = document.querySelector('.slider__dots')
    
    this.initControls()
    options.autoPlay
      ? this.runAutoPlay()
      : this.renderSlider()

    this.renderSlider.bind(this);

    if (!this.options.fade)
      this.setupResizeListener() 
    
  }

  setupResizeListener() {
    const { throttle } = this
    window.addEventListener('resize', () => {
      throttle()
    })
  }

  getSliderContent() {
    return document.querySelector('.slider__container .content')
  }

  runAutoPlay() {
    const {
      options: { delay },
      changeSlideIndex
    } = this
    this.renderSlider()
    this.interval = setInterval(() => {
      changeSlideIndex.call(this, 1)()
    }, delay || 3000)
    document
      .querySelector('.slider__container')
      .addEventListener('mouseover', () => {
        clearInterval(this.interval)
      })
  }

  renderSlider() {
    const {
      slideIndex,
      sliderItems,
      dotContainer,
      options: { fade = true }
    } = this
    // first, hide all slides

    if (slideIndex === -1)
      this.slideIndex = sliderItems.length - 1
    if (slideIndex > sliderItems.length - 1)
      this.slideIndex = 0

    localStorage.setItem('startIndexSlider', slideIndex);
    
    

    if (fade) {
      for (let i = 0; i < sliderItems.length; i++)
        sliderItems[i].style.opacity = '0'

      sliderItems[this.slideIndex]
        .style.opacity = '1'
    } else {

      const contentBlock = this.getSliderContent()

      contentBlock.classList.add('fade-off')

      for (let i = 0; i < sliderItems.length; i++) {
        sliderItems[i].classList.add('fade-off')
      }

      const step = contentBlock.clientWidth

      contentBlock.style.left = `-${step * this.slideIndex}px`
    }

    const dotItems = dotContainer.childNodes

    for (let i = 0; i < dotItems.length; i++)
      dotItems[i].classList.remove('active')

    dotItems[this.slideIndex].classList.add('active')
  }


  /*Обработчик события для кнопок и точек */
  initControls() {
    const { controlItems, sliderItems, changeSlideIndex } = this /*деструкторизация */
    /*пробигаемся по стрелкам*/
    for (let i = 0; i < controlItems.length; i++) {
      controlItems[i].addEventListener('click', changeSlideIndex.call(this, i)) 
      
    }

    for (let i = 0; i < sliderItems.length; i++) {
      this.renderDot(i)
    }

  }

  renderDot(index) {
    const { changeSlideIndex } = this
    const dotItem = document.createElement('div')
    dotItem.classList.add('slider__dots-item')

    dotItem.addEventListener('click', changeSlideIndex.call(this, null, index))

    this.dotContainer.appendChild(dotItem)
  }

  changeSlideIndex = (controlIndex, slideIndex) => {
    
    return () => {
      if (slideIndex !== undefined) {
        this.slideIndex = slideIndex
      } else {
        switch (controlIndex) {
          case 0:
            this.slideIndex = this.slideIndex - 1
            break;
          case 1:
            this.slideIndex = this.slideIndex + 1
            break;
        }

      this.renderSlider()
      }
    }
  }

  scrollForward(){
    const { changeSlideIndex } = this
    
    changeSlideIndex.call(this, 1)()
  }

  scrollBack(){
    const { changeSlideIndex } = this
    
    changeSlideIndex.call(this, 0)()
  }
}

slideIndex = parseInt(localStorage.getItem('startIndexSlider') || 0);
const sliderObj = new Slider(slideIndex, { autoPlay: true, fade: true });

document.body.onkeyup = function(e){
  if(e.keyCode == 32 || e.keyCode == 39){
      sliderObj.scrollForward();
  } else if ( e.keyCode == 37 ) {
    sliderObj.scrollBack();
  }
}