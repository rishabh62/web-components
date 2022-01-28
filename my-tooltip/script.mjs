class Tooltip extends HTMLElement {
  #target = null;

  constructor() {
    super();

    this.setStyles({
      display: "none", //to hide the tooltip on initial render
      position: "fixed",
      padding: "5px",
      backgroundColor: "black",
      color: "white",
      zIndex: "9999",
    });
  }

  connectedCallback() {
    this.#target = document.querySelector(`[aria-describedby=${this.id}]`);
    this.setPosition();
    this.#target.addEventListener("mouseover", () => {
      this.show();
      this.setPosition();
    });
    this.#target.addEventListener("mouseout", () => this.hide());
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
    const { top, left, width } = this.#target.getBoundingClientRect();

    // - 5 for little extra space between the element and tooltip
    this.style.top = `${top - this.offsetHeight - 5}px`;
    this.style.left = `${left + (width - this.offsetWidth) / 2}px`;
    console.log(this.#target, left);
  }
}

customElements.define("my-tooltip", Tooltip);
