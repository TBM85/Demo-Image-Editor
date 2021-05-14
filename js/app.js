const imageContainer = document.querySelector('.image');

const image = document.createElement('img');
imageContainer.appendChild(image);
image.src = "https://cdn.pixabay.com/photo/2019/07/21/19/01/landscape-4353358_1280.jpg";

const controllers = [
  {name: 'brightness', id: 'brightness', type: 'range', min: 0, max: 200, value: 100},
  {name: 'contrast', id: 'contrast', type: 'range', min: 0, max: 200, value: 100},
  {name: 'saturation', id: 'saturate', type: 'range', min: 0, max: 200, value: 100},
  {name: 'hue', id: 'hue-rotate', type: 'range', min: 0, max: 300, value: 0},
  {name: 'sepia', id: 'sepia', type: 'range', min: 0, max: 100, value: 0},
  {name: 'greyscale', id: 'greyscale', type: 'range', min: 0, max: 100, value: 0}
];

// Create the image editor structure
const controllersContainer = document.querySelector('.controllers');

const createController = () => {  
  for (let controller of controllers) {
    const controllerItem = document.createElement('controller');
    controllersContainer.appendChild(controllerItem);
    controllerItem.classList.add('controller');

    const label = document.createElement('label');
    controllerItem.appendChild(label);
    label.for = `${controller.id}`;
    label.innerHTML = `${controller.name}`;

    const input = document.createElement('input');
    controllerItem.appendChild(input);
    input.id = `${controller.id}`;
    input.type = `${controller.type}`;
    input.min = `${controller.min}`;
    input.max = `${controller.max}`;
    input.value = `${controller.value}`;
    input.innerHTML = `${controller.value}`;

    const inputValue = document.createElement('div');
    controllerItem.appendChild(inputValue);
    inputValue.classList.add('input-value');
    inputValue.innerHTML = `${controller.value}`;
  }

  const buttonsContainer = document.createElement('div');
  controllersContainer.appendChild(buttonsContainer);
  buttonsContainer.classList.add('buttons');

  const buttonRotateH = document.createElement('button');
  buttonsContainer.appendChild(buttonRotateH);
  buttonRotateH.innerHTML = 'Rotate Horizontally';
  buttonRotateH.type = 'button';

  const buttonRotateV = document.createElement('button');
  buttonsContainer.appendChild(buttonRotateV);
  buttonRotateV.innerHTML = 'Rotate Vertically';
  buttonRotateV.type = 'button';

  const buttonResetAll = document.createElement('button');
  controllersContainer.appendChild(buttonResetAll);
  buttonResetAll.classList.add('reset-all');
  buttonResetAll.innerHTML = 'Reset All';
  buttonResetAll.type = 'button';
}

createController();

// Updates value changes made to range controls
const inputControllers = document.querySelectorAll(".controller input");

const updateInputsHandler = () => {
  for (let input of inputControllers) {
    const updateInputValueHandler = () => {
      if (input.id === "hue-rotate") {
        image.style.setProperty(`--${input.id}`, input.value + "deg");
      } else {
        image.style.setProperty(`--${input.id}`, input.value + "%");
      }
      input.nextElementSibling.innerHTML = input.value;
    };

    input.addEventListener("change", updateInputValueHandler);
  }
}

updateInputsHandler();