import {html, PolymerElement} from '@polymer/polymer/polymer-element.js'
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-menu-behavior/iron-menu-behavior.js';
import '@polymer/paper-tabs/paper-tabs.js';
import '@polymer/app-layout/demo/sample-content.js';

class MyCatalog extends PolymerElement {
  static get template(){
    return html`
        <style>
          :host{
              display: block;
          }
          .catalog-header{
              text-align: center;
          }
          .style-catalog-content{
            display: block;
            position: relative;
            max-width: 1200px;
            margin: 0px auto;
          }
          paper-tabs{
            color: #333333;
            --paper-tabs-selection-bar-color: var(--google-blue-500);
            --paper-tab-ink: var(--google-blue-500);
          }
          paper-tabs paper-tab.iron-selected {
            color: var(--google-blue-500);
          }


        </style>
          <div class="style-catalog-content">
            <h1 class="catalog-header">What is can do?</h1>
            <div>
              <paper-tabs selected="0" scrollable>
                <paper-tab>Art & lifestyle</paper-tab>
                <paper-tab>Business & finance</paper-tab>
                <paper-tab>Education & reference</paper-tab>
                <paper-tab>Food & drink</paper-tab>
                <paper-tab>Games & fun</paper-tab>
                <paper-tab>Health & fitness</paper-tab>
                <paper-tab>Home Control</paper-tab>
                <paper-tab>Local</paper-tab>
                <paper-tab>Movies,photo & TV</paper-tab>
                <paper-tab>Music & audio</paper-tab>
                <paper-tab>News & magazines</paper-tab>
                <paper-tab>Productivity</paper-tab>
                <paper-tab>Shopping</paper-tab>
                <paper-tab>Social & communication</paper-tab>
                <paper-tab>Sports</paper-tab>
                <paper-tab>Travel $ transportation</paper-tab>
                <paper-tab>Weather</paper-tab>
              </paper-tabs>
            </div>

            <div>
              <sample-content size="10"></sample-content>
            </div>

          </div>


    `;
  }
}
window.customElements.define('my-catalog', MyCatalog);
