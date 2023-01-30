import $ from "../core.js";

// $.prototype.createModal = function({text, btns}) {
// 	for (let i = 0; i < this.length; i++) {
// 		const target = this[i].getAttribute("data-target");

// 		const modal = document.createElement("div");
// 		modal.setAttribute("id", this[i].getAttribute("data-target").slice(1));
// 		modal.classList.add("modal");

// 		const buttons = [];
// 		const {count, settings} = btns;

// 		// btns = {count, settings: [[text, className = [], close, cb]]}
// 		for (let k = 0; k < count; k++) {
// 			let btn = document.createElement("button");
// 			btn.textContent = settings[k][0];
// 			btn.classList.add("btn", ...settings[k][1]);

// 			if (settings[k][2]) {
// 				btn.setAttribute("data-close", "true");
// 			}

// 			if (settings[k][3] && typeof(settings[k][3]) === "function") {
// 				btn.addEventListener("click", settings[k][3]);
// 			}

// 			buttons.push(btn);
// 		}

// 		modal.innerHTML = `
// 			<div class="modal__dialog">
// 				<div class="modal__content">
// 					<button class="close" data-close>
// 						<span>&times;</span> 
// 					</button>
// 					<div class="modal__title">
// 						${text.title}
// 					</div>
// 					<div class="modal__body">
// 						${text.body}
// 					</div>
// 					<div class="modal__footer">
						
// 					</div>
// 				</div>
// 			</div>
// 		`;

// 		document.body.append(modal);
// 		modal.querySelector(".modal__footer").append(...buttons);
// 		$(this[i]).modal(true);
// 		$(this[i].getAttribute("data-target")).fadeIn(5000);
// 	}
// }


$.prototype.modal = function(created) {
	for (let i = 0; i < this.length; i++) {
		const target = this[i].getAttribute("data-target");

		$(this[i]).click(function(e) {
			e.preventDefault();

			$(target).fadeIn(500);
			document.body.style.overflow = "hidden";
		});

		let close = document.querySelectorAll(`${target} [data-close]`);
		close.forEach(item => {
			item.addEventListener("click",function(e) {
				e.preventDefault();

				$(target).fadeOut(500);
				document.body.style.overflow = "";

				if (created) {
					document.querySelector(target).remove();
				}

			});
		});

		$(target).click(function(e) {
			if (e.target.classList.contains("modal")) {
				$(target).fadeOut(500);
				document.body.style.overflow = "";

				if (created) {
					document.querySelector(target).remove();
				}
			}
		});
	}
}

$.prototype.createModal = function({text, btns}) {
	for (let i = 0; i < this.length; i++) {

		const modal = document.createElement("div");
		modal.setAttribute("id", this[i].getAttribute("data-target").slice(1));
		modal.classList.add("modal");

		const buttons = [];
		const {count, settings} = btns;
		console.log(count)
		
		//btns = {count: num, settings: [[text, classNames = [], close, cb]]}
		for (let k = 0; k < count; k++) {
			let btn = document.createElement("button");
			btn.classList.add("btn", ...settings[k][1]);
			btn.textContent = settings[k][0];

			if (settings[k][2]) {
				btn.setAttribute("data-close", "true");
			}

			if (settings[k][3] && typeof settings[k][3] === "function") {
				btn.addEventListener("click", settings[k][3]);
			}

			buttons.push(btn);
		}

		modal.innerHTML = `
			<div class="modal__dialog">
				<div class="modal__content">
					<button class="close" data-close>
						<span>&times;</span> 
					</button>
					<div class="modal__title">
						${text.title}
					</div>
					<div class="modal__body">
						${text.body}
					</div>
					<div class="modal__footer">
						
					</div>
				</div>
			</div>
		`;

		document.body.append(modal);
		modal.querySelector(".modal__footer").append(...buttons);
		$(this[i]).modal(true);
		$(this[i].getAttribute("data-target")).fadeIn(500);
	}
}