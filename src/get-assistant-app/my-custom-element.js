import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import 'jquery/dist/jquery.min.js';
import 'owl.carousel';

class MyCustomElement extends PolymerElement {
  static get template(){
    return html`
      <link rel="stylesheet" href="./node_modules/owl.carousel/dist/assets/owl.carousel.min.css">
      <link rel="stylesheet" href="./node_modules/owl.carousel/dist/assets/owl.theme.default.min.css">
        <style>
          .item{
            height: 10rem;
            background: #4DC7A0;
            padding: 1rem;
          }
        </style>

        <div class="owl-carousel">
            <div class="item"><h4>1</h4></div>
            <div class="item"><h4>2</h4></div>
            <div class="item"><h4>3</h4></div>
            <div class="item"><h4>4</h4></div>
            <div class="item"><h4>5</h4></div>
            <div class="item"><h4>6</h4></div>
            <div class="item"><h4>7</h4></div>
            <div class="item"><h4>8</h4></div>
            <div class="item"><h4>9</h4></div>
            <div class="item"><h4>10</h4></div>
            <div class="item"><h4>11</h4></div>
            <div class="item"><h4>12</h4></div>
        </div>
    `;
  }
  static get properties() {
    return{

    };
  }


}

window.customElements.define('my-custom-element',MyCustomElement);

//มีปัญหาใส่ JavaScript ไม่ได้
