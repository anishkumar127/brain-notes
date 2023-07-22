//   Siblings
const cElement = (element) => document.createElement(element);
const siblings = document.querySelector("#siblings");
const default_path = "../images/pricing-card-img/";
const images = ["employee-directory.png", "helpdesk.png"];

const rootElem = cElement("div");
rootElem.setAttribute("id", "root");
siblings.parentNode.insertBefore(rootElem, siblings.nextSibling);
for (let i = 0; i < 8; i++) {
  card_container(default_path, images);
}
function card_container(default_path, images) {
  // main Schema & functional

  //   BUTTON DATA
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

  //   CARD STYLER DATA

  const card_style_container = {
    div_style_4: ["text-bg-color-purple", "text-align-center"],
    div_style_3: ["text-align-center"],
    div_style_3_a: ["text-color-blue"],
    div_style_2_b: ["price-font-size"],
  };

  //   BUTTON FUNCTION
  const btn = (create, type, arr) => {
    let container = div_style_4.appendChild(create(type));
    arr.forEach((classes) => container.classList.add(classes));
    return container;
  };
  // DIV STYLER = CODE REDUCER
  function div_styler(parent, cElement, type, text, arr) {
    const container = parent.appendChild(cElement(type));

    if (text !== null) container.innerText = text;

    if (arr !== null)
      arr.forEach((classes) => container.classList.add(classes));

    return container;
  }

  // main
  const rootElem = document.querySelector("#root");
  const card = rootElem.appendChild(cElement("div"));
  rootElem.classList.add("p-cart-layout-style");

  card.classList.add("p-cart-style");
  // DIV 1 LAYER
  const div_style_1 = card.appendChild(cElement("div"));
  const img = div_style_1.appendChild(cElement("img"));
  img.src = `${default_path}${images[0]}`;
  img.alt = "images 1";
  img.classList.add("p-cart-img-vertical-align");

  const span_text = "Employee Directory";
  const span = div_styler(div_style_1, cElement, "span", span_text, null);

  const hr = card.appendChild(cElement("hr"));

  // DIV 2 LAYER

  const div_style_2 = div_styler(card, cElement, "div", null, null);

  const div_style_2_span_text = "Starting from $";
  const div_style_2_span = div_styler(
    div_style_2,
    cElement,
    "span",
    div_style_2_span_text,
    null
  );

  const div_style_2_b_text = "39";
  const div_style_2_b = div_styler(
    div_style_2,
    cElement,
    "b",
    div_style_2_b_text,
    card_style_container.div_style_2_b
  );

  const div_style_3 = div_styler(
    card,
    cElement,
    "div",
    null,
    card_style_container.div_style_3
  );

  const a_text = "Details";
  const div_style_3_a = div_styler(
    div_style_3,
    cElement,
    "a",
    a_text,
    card_style_container.div_style_3_a
  );

  //  DIV 4 LAYER

  const div_style_4 = div_styler(
    card,
    cElement,
    "div",
    null,
    card_style_container.div_style_4
  );

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
