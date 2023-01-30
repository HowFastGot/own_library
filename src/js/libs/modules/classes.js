import $ from "../core.js";

$.prototype.addClass = function(...classes) {
	for (let i = 0; i < this.length; i++) {

		if (!this[i].classList) {
			continue;
		}

		this[i].classList.add(...classes);
	}

	return this;
}

$.prototype.removeClass = function(...classes) {
	for (let i = 0; i < this.length; i++) {

		if (!this[i].classList) {
			continue;
		}

		this[i].classList.remove(...classes);
	}

	return this;
}

$.prototype.toggleClass = function(className) {
	for (let i = 0; i < this.length; i++) {

		if (!this[i].classList) {
			continue;
		}

		this[i].classList.toggle(className);
	}

	return this;
}

$.prototype.checkClass = function(className) {
	for (let i = 0; i < this.length; i++) {

		if (!this[i].classList) {
			continue;
		}

		return this[i].classList.contains(className);
	}
}