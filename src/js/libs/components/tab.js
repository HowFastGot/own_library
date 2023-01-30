import $ from "../core.js";

$.prototype.tab = function() {
	for (let i = 0; i < this.length; i++) {
		$(this[i]).click(() => {
			$(this[i])
				.addClass("tabs__btn_active")
				.siblings()
				.removeClass("tabs__btn_active")
				.closest(".tabs")
				.find(".tabs__content")
				.removeClass("tabs__content_active")
				.eq($(this[i]).index())
				.addClass("tabs__content_active")
		});
	}
}

$("[data-tabpanel] .tabs__btn").tab()

