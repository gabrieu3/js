class TopMenu {
  constructor() {
    this.status = true;
  }

  create() {
    const button = document.createElement("button");
    button.innerHTML = "X";
    button.setAttribute("id", "menubar");
    button.setAttribute("type", "button");
    button.addEventListener(
      "click",
      (function (scope) {
        return () => scope.collapse();
      })(this),
      false
    );
    return button;
  }

  collapse() {
    const menu = document.getElementById("menu-left");
    const page = document.getElementById("page");
    if (this.status) {
      this.status = false;
      page.setAttribute("class", "page");
      menu.setAttribute("class", "menu_left");
    } else {
      this.status = true;
      page.setAttribute("class", "page_open");
      menu.setAttribute("class", "menu_left_close");
    }
  }
}

export { TopMenu };
