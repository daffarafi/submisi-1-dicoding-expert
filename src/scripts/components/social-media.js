class SocialMedia extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
            <div class="twitter">
                <a href="https://www.twitter.com/DaffaTGI">
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M44 8.4234C42.3819 9.15838 40.6437 9.65499 38.8164 9.87946C40.7018 8.72294 42.1125 6.90272 42.785 4.75843C41.0135 5.83704 39.0748 6.59627 37.0529 7.0031C35.6933 5.51499 33.8925 4.52865 31.93 4.19721C29.9675 3.86577 27.9532 4.20777 26.1997 5.17012C24.4463 6.13247 23.0518 7.66133 22.2328 9.51933C21.4139 11.3773 21.2162 13.4605 21.6706 15.4455C18.0811 15.2607 14.5697 14.3043 11.3642 12.6384C8.15862 10.9725 5.33062 8.63429 3.06368 5.77548C2.28856 7.14613 1.84286 8.73527 1.84286 10.4277C1.842 11.9513 2.20801 13.4516 2.90842 14.7954C3.60884 16.1392 4.622 17.285 5.85801 18.1311C4.42456 18.0844 3.02274 17.6873 1.76922 16.973V17.0922C1.76908 19.2291 2.49015 21.3002 3.8101 22.9542C5.13004 24.6081 6.96755 25.743 9.01083 26.1662C7.68107 26.5352 6.28692 26.5895 4.93367 26.3252C5.51017 28.1638 6.63313 29.7717 8.14534 30.9236C9.65756 32.0755 11.4833 32.7139 13.367 32.7493C10.1693 35.3225 6.22016 36.7184 2.15485 36.7122C1.43472 36.7124 0.715201 36.6693 0 36.5831C4.12653 39.3029 8.93011 40.7463 13.836 40.7407C30.4431 40.7407 39.5217 26.641 39.5217 14.4125C39.5217 14.0152 39.512 13.614 39.4946 13.2167C41.2605 11.9076 42.7848 10.2865 43.9961 8.42936L44 8.4234V8.4234Z" fill="#494949"/>
                </svg>                        
                </a>                  
            </div>
            <div class="instagram">
                <a href="https://www.instagram.com/daffa.tgi/">
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_21_43)">
                <path d="M22 0C16.0297 0 15.279 0.0275 12.9333 0.132C10.5875 0.242 8.98975 0.6105 7.59 1.155C6.12176 1.70725 4.79185 2.57352 3.69325 3.69325C2.57421 4.79241 1.70804 6.12216 1.155 7.59C0.6105 8.987 0.23925 10.5875 0.132 12.925C0.0275 15.2762 0 16.0243 0 22.0028C0 27.9758 0.0275 28.7238 0.132 31.0695C0.242 33.4125 0.6105 35.0102 1.155 36.41C1.71875 37.8565 2.4695 39.083 3.69325 40.3067C4.91425 41.5305 6.14075 42.284 7.58725 42.845C8.98975 43.3895 10.5848 43.7607 12.9278 43.868C15.2763 43.9725 16.0242 44 22 44C27.9758 44 28.721 43.9725 31.0695 43.868C33.4098 43.758 35.013 43.3895 36.4128 42.845C37.88 42.2925 39.209 41.4262 40.3067 40.3067C41.5305 39.083 42.2812 37.8565 42.845 36.41C43.3867 35.0102 43.758 33.4125 43.868 31.0695C43.9725 28.7238 44 27.9758 44 22C44 16.0242 43.9725 15.2763 43.868 12.9278C43.758 10.5875 43.3867 8.987 42.845 7.59C42.292 6.12212 41.4259 4.79236 40.3067 3.69325C39.2085 2.57311 37.8785 1.70677 36.41 1.155C35.0075 0.6105 33.407 0.23925 31.0667 0.132C28.7182 0.0275 27.973 0 21.9945 0H22.0028H22ZM20.0282 3.9655H22.0028C27.8768 3.9655 28.5725 3.98475 30.8907 4.092C33.0357 4.18825 34.2017 4.5485 34.9772 4.84825C36.003 5.247 36.7372 5.7255 37.5072 6.4955C38.2772 7.2655 38.753 7.997 39.1518 9.0255C39.4543 9.79825 39.8118 10.9643 39.908 13.1093C40.0153 15.4275 40.0373 16.1233 40.0373 21.9945C40.0373 27.8658 40.0153 28.5642 39.908 30.8825C39.8118 33.0275 39.4515 34.1908 39.1518 34.9663C38.799 35.9215 38.2361 36.7852 37.5045 37.4935C36.7345 38.2635 36.003 38.7393 34.9745 39.138C34.2045 39.4405 33.0385 39.798 30.8907 39.897C28.5725 40.0015 27.8768 40.0263 22.0028 40.0263C16.1288 40.0263 15.4303 40.0015 13.112 39.897C10.967 39.798 9.80375 39.4405 9.02825 39.138C8.07262 38.7858 7.2081 38.2238 6.49825 37.4935C5.76606 36.7841 5.20224 35.9196 4.84825 34.9635C4.5485 34.1907 4.18825 33.0248 4.092 30.8798C3.9875 28.5615 3.9655 27.8657 3.9655 21.989C3.9655 16.115 3.9875 15.422 4.092 13.1037C4.191 10.9587 4.5485 9.79275 4.851 9.01725C5.24975 7.9915 5.72825 7.25725 6.49825 6.48725C7.26825 5.71725 7.99975 5.2415 9.02825 4.84275C9.80375 4.54025 10.967 4.18275 13.112 4.08375C15.1415 3.99025 15.928 3.96275 20.0282 3.96V3.9655V3.9655ZM33.7452 7.6175C33.3986 7.6175 33.0553 7.68579 32.735 7.81846C32.4147 7.95113 32.1236 8.14559 31.8785 8.39074C31.6333 8.63588 31.4389 8.92692 31.3062 9.24722C31.1735 9.56752 31.1052 9.91081 31.1052 10.2575C31.1052 10.6042 31.1735 10.9475 31.3062 11.2678C31.4389 11.5881 31.6333 11.8791 31.8785 12.1243C32.1236 12.3694 32.4147 12.5639 32.735 12.6965C33.0553 12.8292 33.3986 12.8975 33.7452 12.8975C34.4454 12.8975 35.1169 12.6194 35.612 12.1243C36.1071 11.6292 36.3852 10.9577 36.3852 10.2575C36.3852 9.55733 36.1071 8.88583 35.612 8.39074C35.1169 7.89564 34.4454 7.6175 33.7452 7.6175V7.6175ZM22.0028 10.703C20.5042 10.6796 19.016 10.9546 17.6247 11.5119C16.2334 12.0692 14.9669 12.8977 13.8989 13.9492C12.8309 15.0006 11.9828 16.2541 11.4038 17.6365C10.8249 19.0189 10.5267 20.5026 10.5267 22.0014C10.5267 23.5001 10.8249 24.9839 11.4038 26.3663C11.9828 27.7487 12.8309 29.0021 13.8989 30.0536C14.9669 31.1051 16.2334 31.9336 17.6247 32.4909C19.016 33.0482 20.5042 33.3231 22.0028 33.2998C24.9687 33.2535 27.7976 32.0428 29.8787 29.9289C31.9598 27.8151 33.1262 24.9677 33.1262 22.0014C33.1262 19.035 31.9598 16.1876 29.8787 14.0738C27.7976 11.96 24.9687 10.7493 22.0028 10.703V10.703ZM22.0028 14.6658C23.9479 14.6658 25.8134 15.4385 27.1888 16.8139C28.5643 18.1893 29.337 20.0548 29.337 22C29.337 23.9452 28.5643 25.8107 27.1888 27.1861C25.8134 28.5615 23.9479 29.3342 22.0028 29.3342C20.0576 29.3342 18.1921 28.5615 16.8167 27.1861C15.4412 25.8107 14.6685 23.9452 14.6685 22C14.6685 20.0548 15.4412 18.1893 16.8167 16.8139C18.1921 15.4385 20.0576 14.6658 22.0028 14.6658V14.6658Z" fill="#494949"/>
                </g>
                <defs>
                <clipPath id="clip0_21_43">
                <rect width="44" height="44" fill="white"/>
                </clipPath>
                </defs>
                </svg>                        
                </a>                
            </div>
            <div class="github">
                <a href="https://www.github.com/daffarafi">
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M22 0C9.845 0 0 9.845 0 22C0 31.735 6.2975 39.9575 15.0425 42.8725C16.1425 43.065 16.555 42.405 16.555 41.8275C16.555 41.305 16.5275 39.5725 16.5275 37.73C11 38.7475 9.57 36.3825 9.13 35.145C8.8825 34.5125 7.81 32.56 6.875 32.0375C6.105 31.625 5.005 30.6075 6.8475 30.58C8.58 30.5525 9.8175 32.175 10.23 32.835C12.21 36.1625 15.3725 35.2275 16.6375 34.65C16.83 33.22 17.4075 32.2575 18.04 31.7075C13.145 31.1575 8.03 29.26 8.03 20.845C8.03 18.4525 8.8825 16.4725 10.285 14.9325C10.065 14.3825 9.295 12.1275 10.505 9.1025C10.505 9.1025 12.3475 8.525 16.555 11.3575C18.315 10.8625 20.185 10.615 22.055 10.615C23.925 10.615 25.795 10.8625 27.555 11.3575C31.7625 8.4975 33.605 9.1025 33.605 9.1025C34.815 12.1275 34.045 14.3825 33.825 14.9325C35.2275 16.4725 36.08 18.425 36.08 20.845C36.08 29.2875 30.9375 31.1575 26.0425 31.7075C26.84 32.395 27.5275 33.715 27.5275 35.7775C27.5275 38.72 27.5 41.085 27.5 41.8275C27.5 42.405 27.9125 43.0925 29.0125 42.8725C33.3798 41.398 37.1748 38.5911 39.8634 34.8468C42.5519 31.1026 43.9987 26.6095 44 22C44 9.845 34.155 0 22 0Z" fill="#494949"/>
                </svg>
                
                </a> 
            </div>
            <div class="linkedin">
                <a href="https://www.linkedin.com/in/daffa-rafi/">
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.83334 5.20301C1.83334 4.30932 2.18836 3.45224 2.8203 2.8203C3.45223 2.18837 4.30932 1.83335 5.20301 1.83335H38.7933C39.2362 1.83262 39.6749 1.91926 40.0843 2.0883C40.4936 2.25734 40.8656 2.50547 41.179 2.81846C41.4923 3.13146 41.7408 3.50319 41.9103 3.91237C42.0798 4.32154 42.1669 4.76013 42.1667 5.20301V38.7933C42.1672 39.2363 42.0803 39.675 41.9111 40.0844C41.7418 40.4938 41.4935 40.8658 41.1804 41.1791C40.8672 41.4924 40.4954 41.7409 40.0861 41.9104C39.6768 42.0798 39.2381 42.1669 38.7952 42.1667H5.20301C4.76035 42.1667 4.32202 42.0795 3.91307 41.91C3.50412 41.7405 3.13257 41.4922 2.81965 41.1791C2.50672 40.866 2.25855 40.4943 2.08932 40.0853C1.92008 39.6762 1.8331 39.2378 1.83334 38.7952V5.20301ZM17.798 17.2113H23.2595V19.954C24.0478 18.3773 26.0645 16.9583 29.095 16.9583C34.9048 16.9583 36.2817 20.0988 36.2817 25.861V36.5347H30.4022V27.1737C30.4022 23.892 29.6138 22.0403 27.6118 22.0403C24.8343 22.0403 23.6793 24.0368 23.6793 27.1737V36.5347H17.798V17.2113ZM7.71468 36.2835H13.596V16.9583H7.71468V36.2817V36.2835ZM14.4375 10.6553C14.4486 11.1589 14.359 11.6596 14.1739 12.1281C13.9889 12.5966 13.7122 13.0233 13.3599 13.3834C13.0077 13.7435 12.5871 14.0295 12.1228 14.2249C11.6586 14.4202 11.1599 14.5208 10.6563 14.5208C10.1526 14.5208 9.65396 14.4202 9.18968 14.2249C8.7254 14.0295 8.30481 13.7435 7.95259 13.3834C7.60037 13.0233 7.32361 12.5966 7.13857 12.1281C6.95353 11.6596 6.86392 11.1589 6.87501 10.6553C6.89678 9.66691 7.30472 8.7263 8.01147 8.03494C8.71822 7.34358 9.66759 6.95645 10.6563 6.95645C11.6449 6.95645 12.5943 7.34358 13.3011 8.03494C14.0078 8.7263 14.4157 9.66691 14.4375 10.6553V10.6553Z" fill="#494949"/>
                </svg>                        
                </a>
            </div>
        `;
	}
}

customElements.define('social-media', SocialMedia);
