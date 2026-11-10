// Formularios de demostración: validan en la página y responden, sin enviar nada todavía.
// Marca: <form data-demo-form data-success="¡Listo, {nombre}! …"> con campos <Field required error="…">.
// {nombre} se reemplaza por el primer nombre escrito en el campo «nombre».
document.querySelectorAll<HTMLFormElement>('form[data-demo-form]').forEach((form) => {
  const msg = form.querySelector<HTMLElement>('[data-form-msg]');
  const controls = Array.from(form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input, textarea'));

  const clear = (c: HTMLInputElement | HTMLTextAreaElement) => {
    c.removeAttribute('aria-invalid');
    const err = document.getElementById(`${c.id}-err`);
    if (err) err.textContent = '';
  };
  controls.forEach((c) => c.addEventListener('input', () => clear(c)));

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    controls.forEach(clear);
    if (msg) msg.textContent = '';
    // El navegador acepta «ana@correo»; para avisar a alguien pedimos también un dominio con punto.
    const emailOk = (c: HTMLInputElement | HTMLTextAreaElement) =>
      c.type !== 'email' || !c.value || /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(c.value.trim());
    const bad = controls.find((c) => (c.required && !c.value.trim()) || !c.checkValidity() || !emailOk(c));
    if (bad) {
      bad.setAttribute('aria-invalid', 'true');
      const err = document.getElementById(`${bad.id}-err`);
      if (err) err.textContent = bad.dataset.error ?? 'Revisa este campo.';
      bad.focus();
      return;
    }
    const first = (form.elements.namedItem('nombre') as HTMLInputElement | null)?.value.trim().split(' ')[0] ?? '';
    if (msg) msg.textContent = (form.dataset.success ?? '¡Listo!').replace('{nombre}', first);
    form.reset();
  });
});

export {};
