import $ from "../core.js";

$.prototype.dropdown = function() {
	for (let i = 0; i < this.length; i++) {
		const id = this[i].getAttribute("id");
		
		$(this[i]).click(function() {
			$(`[ data-toggle-id="${id}"]`).fadeToggle(300);
		})
	}
}
