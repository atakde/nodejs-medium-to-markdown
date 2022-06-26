const form = document.querySelector('form');
const urlInput = document.querySelector('#urlInput');

form.addEventListener('submit', (e) => {
  document.querySelector('.loader').classList.remove('d-none');
  e.preventDefault();
  const url = urlInput.value;
  // fetch post request
  fetch('/markdown', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      url: url
    })
  })
    .then(res => res.json())
    .then(data => {
      document.querySelector('.loader').classList.add('d-none');
      document.querySelector('.form-floating').classList.remove('d-none');
      document.querySelector('.form-floating textarea').innerHTML = data.markdown;
    })
    .catch(err => console.log(err));
});