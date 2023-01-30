import $ from "../core.js";

$.prototype.accordion = function(headerActiveClass = "active", contentActiveClass = "active", padding = "40") {
	for (let i = 0; i < this.length; i++) {

		$(this[i]).click(() => {

			$(this[i]).toggleClass("active");
			$(this[i].nextElementSibling).toggleClass("active");
			console.log(this[i].nextElementSibling.scrollHeight)
			
			if ($(this[i]).checkClass("active")) {
				this[i].nextElementSibling.style.maxHeight = +this[i].nextElementSibling.scrollHeight + +padding  +"px";
			} else {
				this[i].nextElementSibling.style.maxHeight = "0px";
			}
		});
	}
}

$(".accordion__header").accordion()