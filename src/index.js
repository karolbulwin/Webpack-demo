import _ from 'lodash';
import '../public/stylesheets/styles.scss';
import { cube } from './math.js';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');
  const pre = document.createElement('pre');
  // const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  pre.innerHTML = [
    'Hello webpack!',
    `5 cubed is equal to ${cube(5)}`
  ].join('\n\n');

  btn.innerHTML = 'Click me and check the console!!';
  btn.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
    const print = module.default;
    print();
  })

  element.appendChild(btn);
  element.appendChild(pre);

  return element;
}

document.body.appendChild(component());
