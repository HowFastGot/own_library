import $ from "../core.js";

$.prototype.slider = function(boolean) {
	for (let i = 0; i < this.length; i++) {
		const width = window.getComputedStyle(this[i].querySelector(".carousel__inner")).width;
		let slides = this[i].querySelectorAll(".carousel__item");
		const slidesField = this[i].querySelector(".carousel__slides");
		const dots = this[i].querySelectorAll(".pagination-btns__btn");

		this[i].querySelector(".carousel__slides").style.width = 100 * slides.length + "%";
		slides.forEach(slide => {
			slide.style.width = width;
		});

		let offset = 0;
		let slideIndex = 0;

		$("[data-slide]").click(function(e) {
			e.preventDefault();

			if (e.target.parentElement.getAttribute("data-slide") === "next") {

				if (offset == parseInt(width) * (slides.length - 1)) {
					offset = 0;
					slideIndex = 0;
				} else {
					offset +=  parseInt(width);
					slideIndex++;
				}

				slidesField.style.transform = `translateX(-${offset}px)`;

			} else {

				if (offset == 0) {
					offset = parseInt(width) * (slides.length - 1);
					slideIndex = slides.length - 1;
				} else {
					offset -= parseInt(width);
					slideIndex--;
				}

				slidesField.style.transform = `translateX(-${offset}px)`;
			}

			if (offset == parseInt(width) ) {
				dots.forEach(item => {
					item.classList.remove("pagination-btns__btn_active");
				});

				dots[slideIndex].classList.add("pagination-btns__btn_active");
			} else if (offset == parseInt(width) * (slides.length - 1)) {
				dots.forEach(item => {
					item.classList.remove("pagination-btns__btn_active");
				});

				dots[slideIndex].classList.add("pagination-btns__btn_active");
			} else {
				dots.forEach(item => {
					item.classList.remove("pagination-btns__btn_active");
				});

				dots[slideIndex].classList.add("pagination-btns__btn_active");
			}
		});

		if (boolean) {
			$(".pagination-btns__btn").click(function(e) {
				e.preventDefault();

				const slideTo = e.target.getAttribute("data-slide-to");

				slideIndex = slideTo;
				offset = parseInt(width) * slideTo;

				slidesField.style.transform = `translateX(-${offset}px)`;

				dots.forEach(item => {
						item.classList.remove("pagination-btns__btn_active");
					});
				dots[slideIndex].classList.add("pagination-btns__btn_active");
			});
		}

		if (boolean) {
			setInterval(() => document.querySelector('.carousel__next-icon').click(), 2500);
		}
	}
};


$.prototype.createSlider = function() {
	for (let i = 0; i < this.length; i++) {

		let wrapper = document.createElement("div");
		wrapper.classList.add("slider-genereted");

		wrapper.innerHTML = `
			<ol class="carousel__pagination pagination-btns">
					<li class="pagination-btns__btn pagination-btns__btn_active" data-slide-to="0"></li>
					<li class="pagination-btns__btn" data-slide-to="1"></li>
					<li class="pagination-btns__btn" data-slide-to="2"></li>
				</ol>
				<div class="carousel__inner">
					<div class="carousel__slides">
						<div class="carousel__item">
							<img src="https://iso.500px.com/wp-content/uploads/2019/07/stock-photo-maderas-312058103.jpg" alt="photo">
						</div>
						<div class="carousel__item">
							<img src="https://www.pandasecurity.com/en/mediacenter/
							src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg"alt="photo">
						</div>
						<div class="carousel__item">
							<img src="https://photolemur.com/uploads/blog/unnamed.jpg" alt="photo">
						</div>
					</div>
				</div>
				<a href="#" class="carousel__next" data-slide="next">
					<span class="carousel__next-icon">&gt;</span>
				</a>
				<a href="#" class="carousel__prev" data-slide="prev">
					<span class="carousel__prev-icon">&lt;</span>
				</a>
			</div>
		`;

		this[i].append(wrapper);
	}
};

$(".carousel").createSlider();

$(".carousel").slider(false);