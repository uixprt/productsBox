import {ProductionDescriptionService} from "./products-description-service";
import {EePopup} from "./ee-popup";

const service = new ProductionDescriptionService();
const popup = new EePopup();

document.addEventListener("DOMContentLoaded",
  () => {
    const productsWrapper$ = document.querySelector('#eeProducts');
    productsWrapper$.addEventListener('click',
      (event) => {
        const productId = event.target.getAttribute('data-product-id');

        if (!productId && typeof productId !== 'number') {
          return;
        }

        event.preventDefault();
        const serviceResult = service.getDescriptionByProductId(productId);
        serviceResult.then(({title, description}) => popup.open(title, description));
      }
    )
  }
);
