const form = document.querySelector('#contact-form');
const button = document.querySelector('#draft-button');
const error = document.getElementById('form-error');
const result = document.getElementById('draft-result');
const status = document.getElementById('draft-status');
const preview = document.querySelector('#draft-preview');
const topic = document.querySelector('#topic');
const copyButton = document.querySelector('#copy-draft');
const copyStatus = document.getElementById('copy-status');
const script = document.currentScript;
const recipient = script?.dataset.email || '';
const emailHref = script?.dataset.emailHref || 'mailto:' + recipient;

if (form && button && error && result && status && preview && topic && recipient) {
  const requestedTopic = new URLSearchParams(window.location.search).get('topic');
  if (requestedTopic && Array.from(topic.options).some((option) => option.value === requestedTopic)) topic.value = requestedTopic;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    result.hidden = true;
    const fields = Array.from(form.querySelectorAll('input, textarea'));
    fields.forEach((field) => {
      field.setCustomValidity(field.required && !field.value.trim() ? 'Please complete this field.' : '');
      field.removeAttribute('aria-invalid');
    });
    if (!form.checkValidity()) {
      const invalid = fields.filter((field) => !field.validity.valid);
      invalid.forEach((field) => field.setAttribute('aria-invalid', 'true'));
      error.textContent = 'Please enter your name, a valid email address, and a brief overview.';
      error.hidden = false;
      invalid[0]?.focus();
      return;
    }
    error.hidden = true;
    const data = new FormData(form);
    const get = (key) => String(data.get(key) || '').trim();
    const topicLabel = topic.selectedOptions[0]?.textContent?.trim() || 'General inquiry';
    const subject = 'Website inquiry — ' + topicLabel;
    const body = ['Hello Doug,', '', get('message'), '', 'Name: ' + get('name'), 'Email: ' + get('email'), 'Phone: ' + (get('phone') || 'Not provided'), 'Organization: ' + (get('organization') || 'Not provided'), 'Area of interest: ' + topicLabel].join('\n');
    preview.value = 'To: ' + recipient + '\nSubject: ' + subject + '\n\n' + body;
    result.hidden = false;
    status.textContent = 'Opening your email app. Your inquiry has not been sent by this website.';
    if (copyStatus) copyStatus.textContent = '';
    window.location.href = emailHref + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  });

  form.addEventListener('input', (event) => {
    if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
      event.target.setCustomValidity('');
      event.target.removeAttribute('aria-invalid');
    }
    result.hidden = true;
    error.hidden = true;
  });
  button.disabled = false;

  copyButton?.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(preview.value);
      if (copyStatus) copyStatus.textContent = 'Draft copied. Paste it into your email service, review, and send.';
    } catch {
      preview.focus();
      preview.select();
      if (copyStatus) copyStatus.textContent = 'Select and copy the draft above using your keyboard or device menu.';
    }
  });
}
