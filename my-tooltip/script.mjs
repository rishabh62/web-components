class Tooltip extends HTMLElement {
  #target = null;

  constructor() {
    super();

    this.setStyles({
      position: "absolute",
      padding: "5px",
      backgroundColor: "black",
      color: "white",
    });
  }

  connectedCallback() {
    this.#target = document.querySelector(`[aria-describedby=${this.id}]`);
    this.setPosition();
    this.#target.addEventListener("mouseover", () => this.show());
    this.#target.addEventListener("mouseout", () => this.hide());

    //hide the tooltip initially
    this.hide();
  }

  setStyles(styles) {
    for (let [key, value] of Object.entries(styles)) {
      this.style[key] = value;
    }
  }

  hide() {
    this.style.display = "none";
  }

  show() {
    this.style.display = "block";
  }

  setPosition() {
    const { top } = this.#target.getBoundingClientRect();

    // - 5 for little extra space between the element and tooltip
    this.style.top = top - this.offsetHeight - 5 + "px";
  }
}

customElements.define("my-tooltip", Tooltip);
