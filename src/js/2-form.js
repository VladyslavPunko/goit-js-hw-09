const keyStorage = 'feedback-form-state';

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
  const userEmail = form.elements.email.value.trim();
  const userMessage = form.elements.message.value.trim();

  const obj = {
    email: userEmail,
    message: userMessage,
  };

  saveToLs(keyStorage, obj);
});

form.addEventListener('submit', e => {
  e.preventDefault();

  const data = loadFromLs(keyStorage) || {};

  localStorage.removeItem(keyStorage);
  form.reset();
});

function reloadMessage() {
  const data = loadFromLs(keyStorage) || {};

  form.elements.email.value = data.email || '';
  form.elements.message.value = data.message || '';
}

reloadMessage();
