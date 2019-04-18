import Img320 from '../public/images/forest_320.jpg';
import Img400 from '../public/images/forest_400.jpg';
import Img480 from '../public/images/forest_480.jpg';
import Img600 from '../public/images/forest_600.jpg';
import Img800 from '../public/images/forest_800.jpg';
import Img1000 from '../public/images/forest_1000.jpg';
import Img1200 from '../public/images/forest_1200.jpg';
import Img1400 from '../public/images/forest_1400.jpg';

function componentImg() {
  const element = document.createElement('div');
  const img = new Image();
  img.src = Img1000;
  img.alt = 'Misty forest with a river valley';
  img.srcset = `${Img320} 320w, ${Img400} 400w, ${Img480} 480w, ${Img600} 600w, ${Img800} 800w, 
                ${Img1000} 1000w, ${Img1200} 1200w, ${Img1400} 1400w,`;
  element.appendChild(img);
  return element;
}
const imgContainer = document.querySelector('.img-container');
imgContainer.appendChild(componentImg());
imgContainer.parentElement.classList.add('container');
