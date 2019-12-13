class CoolHeading extends HTMLElement {
  constructor() {
      super();
      this.addEventListener('click', () => {
          this.style.color = 'green';
      });
   }
  connectedCallback() {
      console.log('Cool heading connected.');
      const template = document.querySelector('template');
      const clone = document.importNode(template.content, true);
      this.attachShadow({ mode: 'open'});
      this.shadowRoot.appendChild(clone);
  }
}
customElements.define('cool-heading',CoolHeading);