export const length = () => {
  let payload2 = document.getElementById('path2')
  let content1 = document.getElementById('content1')
  
 
  let pathLength = payload2.getTotalLength();



  const calcDashoffset = (scrollY, element, length) => {
    const ratio = (scrollY - element.offsetTop) / element.offsetHeight;


    const value = length - (length * ratio)
    return value < 0 ? 0 : value > length ? length : value
  }

  const scrollHandler = () => {
    const scrollY = window.scrollY + (window.innerHeight * 0.8);
    payload2.style.strokeDashoffset = calcDashoffset(scrollY, content1, pathLength);
  }

  window.addEventListener('scroll', scrollHandler);

  payload2.style.strokeDasharray = pathLength;
  payload2.style.strokeDashoffset = calcDashoffset(window.innerHeight * 0.8, content1, pathLength);
}