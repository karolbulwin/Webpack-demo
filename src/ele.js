import Img from '../public/images/forest_400.jpg';

function component() {
  const element = document.createElement('div');
  const img = new Image();
  img.src = Img;
  element.appendChild(img);
  return element;
}

document.body.appendChild(component());
