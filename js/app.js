const imageContainer = document.querySelector(".image");

const image = document.createElement("img");
imageContainer.appendChild(image);
image.classList.add("rotateImg");
image.src =
  "https://cdn.pixabay.com/photo/2019/07/21/19/01/landscape-4353358_1280.jpg";
image.alt = "image example";

const controllers = [
  {
    name: "brightness",
    id: "brightness",
    type: "range",
    min: 0,
    max: 200,
    value: 100
  },
  {
    name: "contrast",
    id: "contrast",
    type: "range",
    min: 0,
    max: 200,
    value: 100
  },
  {
    name: "saturation",
    id: "saturate",
    type: "range",
    min: 0,
    max: 200,
    value: 100
  },
  { name: "hue", id: "hue-rotate", type: "range", min: 0, max: 300, value: 0 },
  { name: "sepia", id: "sepia", type: "range", min: 0, max: 100, value: 0 },
  {
    name: "greyscale",
    id: "greyscale",
    type: "range",
    min: 0,
    max: 100,
    value: 0
  },
];

// Create the image editor structure
const controllersContainer = document.querySelector(".controllers");

const createController = () => {
  for (let controller of controllers) {
    const controllerItem = document.createElement("controller");
    controllersContainer.appendChild(controllerItem);
    controllerItem.classList.add("controller");

    const label = document.createElement("label");
    controllerItem.appendChild(label);
    label.htmlFor = `${controller.id}`;
    label.innerHTML = `${controller.name}`;

    const input = document.createElement("input");
    controllerItem.appendChild(input);
    input.id = `${controller.id}`;
    input.type = `${controller.type}`;
    input.min = `${controller.min}`;
    input.max = `${controller.max}`;
    input.value = `${controller.value}`;

    const inputValue = document.createElement("div");
    controllerItem.appendChild(inputValue);
    inputValue.classList.add("input-value");
    inputValue.innerHTML = `${controller.value}`;
  }

  const buttonsContainer = document.createElement("div");
  controllersContainer.appendChild(buttonsContainer);
  buttonsContainer.classList.add("buttons");

  const buttonRotateH = document.createElement("button");
  buttonsContainer.appendChild(buttonRotateH);
  buttonRotateH.classList.add("rotate-horizontally");
  buttonRotateH.innerHTML = "Rotate Horizontally";
  buttonRotateH.type = "button";

  const buttonRotateV = document.createElement("button");
  buttonsContainer.appendChild(buttonRotateV);
  buttonRotateV.classList.add("rotate-vertically");
  buttonRotateV.innerHTML = "Rotate Vertically";
  buttonRotateV.type = "button";

  const buttonResetAll = document.createElement("button");
  buttonsContainer.appendChild(buttonResetAll);
  buttonResetAll.classList.add("reset-all");
  buttonResetAll.innerHTML = "Reset All";
  buttonResetAll.type = "button";
};

createController();

// Updates value changes made to range controls
const inputControllers = document.querySelectorAll(".controller input");

const updateInputValueHandler = () => {
  for (let input of inputControllers) {
    const updateInputsHandler = () => {
      if (input.id === "hue-rotate") {
        image.style.setProperty(`--${input.id}`, input.value + "deg");
      } else {
        image.style.setProperty(`--${input.id}`, input.value + "%");
      }
      input.nextElementSibling.innerHTML = input.value;
    };

    input.addEventListener("change", updateInputsHandler);
  }
};

updateInputValueHandler();

// Deletes all changes made and returns to all original values
const resetInputValuesBtn = document.querySelector('.reset-all');

const resetInputHandler = () => {
  for (let input of inputControllers) {
    let inputValues = getComputedStyle(input).getPropertyValue(`--${input.id}`);

    if (`--${input.id}` === "--hue-rotate") {
      let inputDegrees = inputValues.slice(1, -3);
      input.nextElementSibling.innerHTML = inputDegrees;
      input.value = inputDegrees;
    } else {
      let inputPercentage = inputValues.slice(1, -1);
      input.nextElementSibling.innerHTML = inputPercentage;
      input.value = inputPercentage;
    }
    
    image.style.setProperty(`--${input.id}`, inputValues);
    image.style.setProperty("--rotateY", "0deg");
    image.style.setProperty("--rotateX", "0deg");
  }
}

resetInputValuesBtn.addEventListener('click', resetInputHandler);

// Flip the image horizontally
const flipHorizontallyBtn = document.querySelector(".rotate-horizontally");

const flipHorizontallyHandler = () => {
  if (
    image.classList.length === 1 ||
    (image.classList.length === 2 && image.classList[1] === "flip-vertically")
  ) {
    image.style.setProperty("--rotateY", 180 + "deg");
    image.classList.add("flip-horizontally");
  } else {
    image.style.setProperty("--rotateY", 0 + "deg");
    image.classList.remove("flip-horizontally");
  }
};

flipHorizontallyBtn.addEventListener("click", flipHorizontallyHandler);

// Flip the image vertically
const flipVerticallyBtn = document.querySelector(".rotate-vertically");

const flipVerticallyHandler = () => {
  if (
    image.classList.length === 1 ||
    (image.classList.length === 2 && image.classList[1] === "flip-horizontally")
  ) {
    image.style.setProperty("--rotateX", 180 + "deg");
    image.classList.add("flip-vertically");
  } else {
    image.style.setProperty("--rotateX", 0 + "deg");
    image.classList.remove("flip-vertically");
  }
};

flipVerticallyBtn.addEventListener("click", flipVerticallyHandler);





