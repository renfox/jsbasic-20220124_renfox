import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    
   this.render();
   
  }
  render() {
    this.elem = createElement(`
      <div class="modal">
        <div class="modal__overlay"></div>
        <div class="modal__inner">
          <div class="modal__header">
            <button type="button" class="modal__close">
              <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
            </button>
            <h3 class="modal__title"></h3>
          </div>
          <div class="modal__body"></div>
        </div>
      </div>
    `);
    this.elem.querySelector('.modal__close').addEventListener('click', (event) => {
      this.close();
      });
      
        
      this.closeKeyDown();
      
}
  
    open() {
      document.body.classList.add('is-modal-open');
      document.body.append(this.elem);
    };
    setTitle(title) {
      this.elem.querySelector('.modal__title').textContent = title;
  }
  setBody(node) {
    this.elem.querySelector('.modal__body').innerHTML = node.outerHTML;
  }
  close() {    
    document.body.classList.remove('is-modal-open');    
    this.elem.remove(); 
  }
// скрытие при нажатии кнопки ESC
  closeKeyDown(event) {
    document.onkeydown = (event) => {
      if (event.code === "Escape") {
       this.close();
        
      }
    };
  }
  
}
