import $ from "../core.js";

$.prototype.html = function(content) {
	for (let i = 0; i < this.length; i++) {
		if (content) {
			this[i].innerHTML = content;
		} else {
			return this[i].innerHTML;
		}
	}
}

$.prototype.eq = function(i) {
	const swap = this[i];
	const objLength = Object.keys(this).length;

	for (let i = 0; i < objLength.length; i++) {
		delete this[i];
	}

	this[0] = swap;
	this.length = 1;
	return this;
}

$.prototype.index = function() {
	const parent = this[0].parentElement;
	const childs = [...parent.children];


	return childs.findIndex((item) => item === this[0]);
}

$.prototype.find = function(selector) { //поиск по выбраным эл-там пл селектору
	let numberOfItems = 0,
		 counter = 0;

	let copyObj = Object.assign({}, this);

	for (let i = 0; i < copyObj.length; i++) {
		const arr = copyObj[i].querySelectorAll(selector);

		if (arr.length === 0) continue;

		for (let j = 0; j < arr.length; j++) {
			this[counter] = arr[j];
			counter++;
		}

		numberOfItems += arr.length;
	}

	this.length = numberOfItems;
	const objLength = Object.keys(this).length;

	for (; numberOfItems < objLength; numberOfItems++) {
		delete this[numberOfItems];
	}

	return this;
}

$.prototype.closest = function(selector) {
	let counter = 0;

	for (let i = 0; i < this.length; i++) {
		this[i] = this[i].closest(selector);

		if (this[i] === null) {
			this[i] = document.createElement(`div.created${selector}`);
		}

		counter++;
	}

	const objLenght = Object.keys(this).length;
	for (; counter < objLenght; counter++) {
		delete this[counter];
	}

	return this;
}

$.prototype.siblings = function() { //поиск по выбраным эл-там пл селектору
	let numberOfItems = 0,
		 counter = 0;

	let copyObj = Object.assign({}, this);

	for (let i = 0; i < copyObj.length; i++) {
		const arr = copyObj[i].parentElement.children;
		
		for (let j = 0; j < arr.length; j++) {
			if (copyObj[i] === arr[j]) continue;

			this[counter] = arr[j];
			counter++;
		}

		numberOfItems += arr.length - 1;
	}

	this.length = numberOfItems;
	const objLength = Object.keys(this).length;

	for (; numberOfItems < objLength; numberOfItems++) {
		delete this[numberOfItems];
	}

	return this;
}
