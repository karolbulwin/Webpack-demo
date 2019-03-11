import printMe from './print.js';
import './styles.scss';
import { cube } from './math.js';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}


function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');
  const pre = document.createElement('pre');

  // Lodash, currently included via a script, is required for this line to work
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // element.classList.add('hello');
  pre.innerHTML = [
    'Hello webpack!',
    `5 cubed is equal to ${cube(5)}`
  ].join('\n\n');

  btn.innerHTML = 'Click me and check the console!!';
  btn.onclick = printMe;

  element.appendChild(btn);
  element.appendChild(pre);

  // Add the image to our existing div.

  /* const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  console.log(Data); */

  return element;
}

let element = component(); // Store the element to re-render on print.js changes
document.body.appendChild(element);


if (module.hot) {
  module.hot.accept('./print.js', () => {
    console.log('Accepting the updated printMe module!');
    document.body.removeChild(element);
    element = component(); // Re-render the "component" to update the click handler
    document.body.appendChild(element);
  });
}
