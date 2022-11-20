import './button-element.js';
import './social-media.js';

class NavBar extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.classList.add('container');
		this.innerHTML = `
            <div class="navigates">
                <div class="cover"></div>
                <div class="navlinks">
                    <social-media></social-media>
                </div>
                <button class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div class="logo">
                <div><span>Go</span>Resto</div>
            </div>
            <div class="lang-container">
                <div  id="lang">
                    <label for="id">
                        ID
                        <input type="radio" name="switchLang" id="id" hidden>
                    </label>
                    <label for="en" >
                        EN
                        <input type="radio" name="switchLang" id="en" hidden>
                    </label>
                </div>
            </div>
        `;
		const navLinks = document.querySelector('.navlinks');
		const ul = document.createElement('ul');
		const socialMedia = document.querySelector('social-media');

		const createLi = (text, link) => {
			const li = document.createElement('li');
			const btn = document.createElement('button-element');
			btn.content = {
				text: text,
				link: link,
				isPrimary: false,
			};
			li.appendChild(btn);
			ul.appendChild(li);
		};

		createLi('Home', '#');
		createLi('Favorite', '#');
		createLi('About us', 'https://daffarafi.netlify.app');

		navLinks.insertBefore(ul, socialMedia);
	}
}

customElements.define('nav-bar', NavBar);
