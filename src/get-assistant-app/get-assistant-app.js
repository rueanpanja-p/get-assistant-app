import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/paper-icon-button/paper-icon-button.js';

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
          display: block;
        }

        app-header {
          color: #fff;
          background-color: var(--app-primary-color);
        }
      </style>

      <app-drawer-layout fullbleed="">
        <app-header-layout>
          <app-header reveals>
            <app-toolbar>
              <div main-title>GetAssistantApp</div>
            </app-toolbar>
          </app-header>
        </app-header-layout>
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
