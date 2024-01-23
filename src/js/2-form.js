const kejStorage = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');

function loadFromLs(kej) {
  const data = localStorage.getItem(kej);

  try {
    const result = JSON.parse(data);
    return result;
  } catch {
    return data;
  }
}

function saveToLs(kej, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(kej, jsonData);
}

form.addEventListener('input', () => {
  const suerEmail = form.elements.email.value;
  const suerMessage = form.elements.message.value;

  //   console.log(suerEmail, suerMessage);
  const obj = {
    email: suerEmail,
    message: suerMessage,
  };

  //   console.log(obj);

  saveToLs(kejStorage, obj);
});

form.addEventListener('submit', e => {
  e.preventDefault();

  const data = loadFromLs(kejStorage) || {};

  localStorage.removeItem(kejStorage);
  form.reset();
});

function reloadMessage() {
  const data = loadFromLs(kejStorage) || {};

  form.elements.email.value = data.email || '';
  form.elements.message.value = data.message || '';
}

reloadMessage();
