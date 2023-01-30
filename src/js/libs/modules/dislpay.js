import $ from "../core.js";

$.prototype.showItems = function () {
	for(let i = 0; i < this.length; i++) {

		if (!this[i].style) {
			continue;
		}

		this[i].style.display = "";
	}

	return this;
};

$.prototype.hideItems = function () {
	for(let i = 0; i < this.length; i++) {

		if (!this[i].style) {
			continue;
		}

		this[i].style.display = "none";
	}

	return this;
};

$.prototype.toggle = function () {
	for(let i = 0; i < this.length; i++) {

		if (!this[i].style) {
			continue;
		}

		if (this[i].style.display === "none") {
			this[i].style.display = "";
			console.log("show")
		} else {
			this[i].style.display = "none";
			console.log("hide")
		}
	}
	return this;
};