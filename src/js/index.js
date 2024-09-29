// Галерея и лайтбоксы от Fancybox
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

Fancybox.bind('[data-fancybox]', {
	// Your custom options
});

// Мобильная навигация
{
let nav = document.getElementById("nav"),
    button = document.getElementById("open")
    button.addEventListener("click", () => {
      nav.classList.toggle('navbar--active')
    });
};
import bannerSlider from './modules/banner.js';
bannerSlider();