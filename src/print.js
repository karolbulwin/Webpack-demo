import Img from '../public/images/forest_400.jpg';

console.log('The print.js module has loaded! See the network tab in dev tools...');

function component() {
  const container = document.createElement('div');
  const element = document.createElement('div');
  const p = document.createElement('p');
  const btn = document.createElement('button');
  // const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash');
  p.innerHTML = _.join(['Click', 'the', 'button', '...'], ' ');
  p.classList.add('hello');

  btn.innerHTML = 'Load img';
  btn.onclick = () => {
    const img = new Image();
    img.src = Img;
    element.appendChild(img);
  };

  container.appendChild(p);
  container.appendChild(btn);
  container.appendChild(element);

  return container;
}

document.body.appendChild(component());

export default () => {
  console.log('Button Clicked: Here\'s "some text"!!!!');
};
