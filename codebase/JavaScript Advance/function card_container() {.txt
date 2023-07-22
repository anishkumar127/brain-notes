function card_container() {
  // HELPER Function;
  const cElement = (element) => document.createElement(element);

  // HELPER IMAGE ARRAY

  const default_path = "../TESTING/img/";

  const images = ["employee-directory.png", "helpdesk.png"];

  // main
  const rootElem = document.querySelector("#root");
  const card = rootElem.appendChild(cElement("div"));
  rootElem.classList.add("p-cart-layout-style");

  // CART START
  card.classList.add("p-cart-style");

  // CART INSIDE
  // DIV 1 LAYER
  const div_style_1 = card.appendChild(cElement("div"));

  const img = div_style_1.appendChild(cElement("img"));

  img.src = `${default_path}${images[0]}`;
  img.alt = "images 1";
  img.classList.add("p-cart-img-vertical-align");

  const span = div_style_1.appendChild(cElement("span"));
  span.textContext = "Employee Directory";

  const hr = card.appendChild(cElement("hr"));

  // DIV 2 LAYER

  const div_style_2 = card.appendChild(cElement("div"));

  const div_style_2_span = (div_style_2.appendChild(
    cElement("span")
  ).innerText = "Starting from $");

  const div_style_2_b = div_style_2.appendChild(cElement("b"));
  div_style_2_b.innerText = "39";

  div_style_2_b.classList.add("price-font-size");

  // DIV 3 LAYER

  const div_style_3 = card.appendChild(cElement("div"));
  div_style_3.classList.add("text-align-center");

  const div_style_3_a = div_style_3.appendChild(cElement("a"));
  div_style_3_a.innerText = "Details";
  div_style_3_a.classList.add("text-color-blue");

  //  DIV 4 LAYER

  const div_style_4 = card.appendChild(cElement("div"));
  div_style_4.classList.add("text-bg-color-purple", "text-align-center");

  const btn_class_container = {
    btn_classList_1: [
      "text-bg-color-white",
      "text-color-black",
      "p-cart-btn-padding",
    ],
    btn_classList_2: [
      "text-bg-color-purple",
      "text-bg-color-white",
      "p-cart-btn-padding",
    ],
  };

  const btn = (create, type, arr) => {
    let container = div_style_4.appendChild(create(type));
    console.log(container);
    arr.forEach((classes) => container.classList.add(classes));
    return container;
  };

  // BUTTON 1
  const btn_1_style_4 = btn(
    cElement,
    "button",
    btn_class_container.btn_classList_1
  );
  btn_1_style_4.innerText = "Try It";

  // BUTTON 2

  const btn_2_style_4 = btn(
    cElement,
    "button",
    btn_class_container.btn_classList_2
  );

  btn_2_style_4.innerText = "Buy Now";
}

// card_container();

for (let i = 0; i < 8; i++) {
  card_container();
}
