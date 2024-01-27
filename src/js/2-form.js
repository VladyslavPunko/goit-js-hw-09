const keyStorage = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

function loadFromLs(key) {
  const data = localStorage.getItem(key);

  try {
    const result = JSON.parse(data);
    return result;
  } catch {
    return data;
  }
}

function saveToLs(key, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
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

  const userEmail = form.elements.email.value.trim();
  const userMessage = form.elements.message.value.trim();

  if (!userEmail || !userMessage) {
    alert('Будь ласка, заповніть усі поля форми.');
    return;
  }

  console.log({
    email: userEmail,
    message: userMessage,
  });

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
