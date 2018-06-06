import {html, PolymerElement} from '@polymer/polymer/polymer-element.js'
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-icon-button/paper-icon-button.js';

class MyCatalog extends PolymerElement {
  static get template(){
    return html`
        <style>
          :host{
              display: block;
          }
        </style>
        
    `;
  }
}
window.customElements.define('my-catalog', MyCatalog);
