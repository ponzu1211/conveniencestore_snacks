'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    const results = [
      './img/chocolate.png',
      './img/cookie.png',
      './img/icecream.png',
      './img/potatochips.png',
    ]
    const n = Math.floor(Math.random() * results.length);
    btn.src = results[n];
  });
}