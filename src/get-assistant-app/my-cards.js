import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import 'jquery/dist/jquery.min.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icon/iron-icon.js';


class MyCards extends PolymerElement{
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          padding: 10px;
        }
      </style>

      <div>
        <paper-card image="./node_modules/@polymer/paper-card/demo/donuts.png">
          <div class="card-content">
            <div class="cafe-header">Cafe Basilico
              <div class="cafe-location cafe-light">
                <iron-icon icon="communication:location-on"></iron-icon>
                <span>250ft</span>
              </div>
            </div>
            <div class="cafe-rating">
              <iron-icon class="star" icon="star"></iron-icon>
              <iron-icon class="star" icon="star"></iron-icon>
              <iron-icon class="star" icon="star"></iron-icon>
              <iron-icon class="star" icon="star"></iron-icon>
              <iron-icon class="star" icon="star"></iron-icon>
            </div>
            <p>$・Italian, Cafe</p>
            <p class="cafe-light">Small plates, salads &amp; sandwiches in an intimate setting.</p>
          </div>
          <div class="card-actions">
            <div class="horizontal justified">
              <paper-icon-button icon="icons:event"></paper-icon-button>
              <paper-button>5:30PM</paper-button>
              <paper-button>7:30PM</paper-button>
              <paper-button>9:00PM</paper-button>
              <paper-button class="cafe-reserve">Reserve</paper-button>
            </div>
          </div>
        </paper-card>
      </div>

    `;
  }
  static get properties() {
    return {

    };
  }
}

window.customElements.define('my-cards', MyCards);
