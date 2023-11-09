class ansClass extends HTMLElement {
  constructor() {
    super();
    // this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.styles();
  }

  disconnectedCallback() {
    console.log("disconectou 2");
  }

  adoptedCallback() {
    console.log("moveu de documento 3");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log("Interagiram comigo 4", name, oldValue, newValue);
  }

  content() {
    const wrapper = document.createElement("span");
    const content = this.innerHTML;
    wrapper.classList.add("ans");
    wrapper.innerHTML = content;
    this.applyShadow(wrapper);
    this.innerHTML = "";
  }

  styles() {
    const style = document.createElement("style");
    style.id = "ans-tag";
    style.innerHTML = `
      ans-tag {
        display: inline-block;
        max-width: 100%;
        padding: .3em .3em .2em .3em;
        background: black;
        border:solid .15em black;
        box-shadow: inset 0 0 0 .1em white;
        color: white;
        font-family: sans-serif;
        font-weight: bold;
        font-size: 1rem;
        line-height: normal;
        text-align: center;
        &::before {
          content: "ANS Nº";
          padding-right: .2em;
        }
      }
    `;
    const hasStyle = Array.from(document.getElementsByTagName("style")).find(
      (item) => item.id == "ans-tag"
    );
    if (!hasStyle) {
      document.head.appendChild(style);
    }
  }

  applyShadow(obj) {
    this.shadow.appendChild(obj);
  }
}
export default customElements.define("ans-tag", ansClass);
