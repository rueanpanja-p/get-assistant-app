import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import 'jquery/dist/jquery.min.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/app-layout/app-grid/app-grid-style.js';

class MyCards extends PolymerElement{
  static get template() {
    return html`
      <style include="app-grid-style">
        :host {
          display: block;
          padding: 5px 10px;
          --app-grid-columns: 3;
        }
        ul {
          padding: 0;
          list-style: none;
        }
        li{
          padding: 5px 10px;
        }
        .more { color: var(--google-blue-500); }
        .news-header { @apply --paper-font-headline; font-size:1.5em; }
        .news-light { color: var(--paper-grey-600); }

        @media(max-width:768px){
          :host{
            --app-grid-columns: 2;
          }
        }

        @media(max-width:320px){
          :host{
            --app-grid-columns: 1;
          }
        }

      </style>


      <ul class="app-grid">
        <li class="item">
          <div>
            <paper-card image="images/pic1.jpg">
              <div class="card-content">
                <div class="news-header">Cafe Basilico

                </div>
                <p class="news-light">Small plates, salads &amp; sandwiches in an intimate setting.</p>
              </div>
              <div class="card-actions">
                <div class="horizontal justified">
                  <paper-button class="more">Learn More</paper-button>
                </div>
              </div>
            </paper-card>
          </div>
        </li>
        <li class="item">
          <div>
            <paper-card image="images/pic1.jpg">
              <div class="card-content">
                <div class="news-header">Cafe Basilico

                </div>
                <p class="news-light">Small plates, salads &amp; sandwiches in an intimate setting.</p>
              </div>
              <div class="card-actions">
                <div class="horizontal justified">
                  <paper-button class="more">Learn More</paper-button>
                </div>
              </div>
            </paper-card>
          </div>
        </li>
        <li class="item">
          <div>
            <paper-card image="images/pic1.jpg">
              <div class="card-content">
                <div class="news-header">Cafe Basilico

                </div>
                <p class="news-light">Small plates, salads &amp; sandwiches in an intimate setting.</p>
              </div>
              <div class="card-actions">
                <div class="horizontal justified">
                  <paper-button class="more">Learn More</paper-button>
                </div>
              </div>
            </paper-card>
          </div>
        </li>
      </ul>

    `;
  }
  static get properties() {
    return {

    };
  }
}

window.customElements.define('my-cards', MyCards);
