  var btn = document.querySelector('#btn'),
  out = document.querySelector('#out'),
  weight = document.querySelector('#weight'),
  vol = document.querySelector('#vol'),
  load = document.querySelector('#load'),
  del = document.querySelector('#del'),
  frag = document.querySelector('#frag'),
  range = document.querySelector('#range'),
  rasstoyanie = document.querySelector('.rasstoyanie').innerHTML = 2500;
  weight = document.querySelector('#weight'),
  vol = document.querySelector('#vol'),
  btn2 = document.querySelector('#btn2'),
  kg = 5.5,
  kub = 3500,
  km = 2;

  range.onchange = function () {
  var rasstoyanie = document.querySelector('.rasstoyanie').innerHTML = range.value;
  var max = 100000000;
  if (weight.value != '' && vol.value != '' && weight.value > 0 && vol.value > 0 && weight.value <= max && vol.value <= max) {
    if (load.checked) {
      load.value = 1500;
    } else {
      load.value = 0;
    }
    if (del.checked) {
      del.value = 3500;
    } else {
      del.value = 0;
    }
    if (frag.checked) {
      frag.value = 2000;
    } else {
      frag.value = 0;
    }

    var sum = ((weight.value * kg) + (vol.value * kub) + Number(load.value) + +Number(del.value) + Number(frag.value) + (range.value * km)).toFixed(2);
    if (isNaN(sum)) {
      alert('Введите числовое значение');
    } else {
      out.innerHTML = sum;
    }

  } else {
    alert('Неверные данные!');
  }

  }
  
  btn.onclick = function () {
  var max = 100000000;
  if (weight.value != '' && vol.value != '' && weight.value > 0 && vol.value > 0 && weight.value <= max && vol.value <= max) {
    if (load.checked) {
      load.value = 1500;
    } else {
      load.value = 0;
    }
    if (del.checked) {
      del.value = 3500;
    } else {
      del.value = 0;
    }
    if (frag.checked) {
      frag.value = 2000;
    } else {
      frag.value = 0;
    }

    var sum = ((weight.value * kg) + (vol.value * kub) + Number(load.value) + +Number(del.value) + Number(frag.value) + (range.value * km)).toFixed(2);
    if (isNaN(sum)) {
      alert('Введите числовое значение');
    } else {
      out.innerHTML = sum;
    }

  } else {
    alert('Введите данные!(Только положительные числа)');
  }
}
btn2.onclick = function () {
  rasstoyanie = document.querySelector('.rasstoyanie').innerHTML = 2500;
  out.innerHTML = "0.0";
  customrange = 500;
  rasstoyanie = 2500;
  rasstoyanie.innerHTML;
  range.value = '';
  weight.value = '';
  vol.value = '';
}