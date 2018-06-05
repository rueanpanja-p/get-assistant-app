import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import 'jquery/dist/jquery.min.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import './my-icons.js';
import './my-custom-element.js';
import './my-cards.js';


/**
 * @customElement
 * @polymer
 */
class GetAssistantApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          --app-primary-color: #4285f4;
          --app-secondary-color: black;
          --app-drawer-width: 250px;
          display: block;
        }

        app-drawer-layout:not([narrow]) [drawer-toggle] {
          display: none;
        }

        app-header {
          color: #fff;
          background-color: var(--app-primary-color);
        }

        app-header paper-icon-button {
          --paper-icon-button-ink-color: white;
        }

        .drawer-list {
          margin: 0 20px;
        }

        .drawer-list a {
          display: block;
          padding: 0 16px;
          text-decoration: none;
          color: var(--app-secondary-color);
          line-height: 40px;
        }

        .drawer-list a.iron-selected {
          color: black;
          font-weight: bold;
        }
        .card1{
          padding: 10px;
        }
        .leftItem{
          display: none;
        }

        .tabs {
        height: 100%;
        @apply --layout-horizontal;
      }
      .tabs > a {
        @apply --layout-vertical;
        @apply --layout-center-center;
        margin: 12px 16px 12px;
        text-decoration: none;
      }

        @media(max-width:768px){
          .leftItem{
            display: block;
            position: absolute;
          }
          .tabs{
            display: none;
          }
          .spacer {
            @apply --layout;
            @apply --layout-flex;
            @apply --layout-center-center;
          }
        }

        @media(max-width:320px){

        }

      </style>

      <app-drawer-layout fullbleed="" narrow="{{narrow}}" force-narrow>

      <app-drawer id="drawer" slot="drawer" swipe-open="[[narrow]]">
          <app-toolbar>Menu</app-toolbar>
          <iron-selector attr-for-selected="name" class="drawer-list" role="navigation">
            <a name="view1" href="">Search</a>
            <a name="view2" href="">Add</a>
          </iron-selector>
      </app-drawer>

        <app-header-layout>
          <app-header condenses="" reveals="" effects="waterfall">
            <app-toolbar>
              <paper-icon-button icon="my-icons:menu" drawer-toggle="" class="leftItem"></paper-icon-button>
              <div main-title="" class="spacer">GetAssistantApp</div>
              <div class="tabs">
                <a href="#"><paper-icon-button icon="search" class="icon-search"></paper-icon-button></a>
                <a href="#"><paper-icon-button icon="add" class="icon-add"></paper-icon-button></a>
              </div>
            </app-toolbar>
          </app-header>
        </app-header-layout>
        <div>
          <my-custom-element></my-custom-element>
        </div>
        <div>
          <my-cards></my-cards>
        </div>
      </app-drawer-layout>

    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'get-assistant-app'
      }
    };
  }
}

window.customElements.define('get-assistant-app', GetAssistantApp);
