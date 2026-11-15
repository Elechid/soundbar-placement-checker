import { cabinetFit } from './tools.mjs';

const form = document.querySelector('#cabinet-fit');
const outputs = document.querySelectorAll('#cabinet-results output');

function render() {
  const values = Object.fromEntries(Array.from(form.elements, input => [
    input.name, input.value === '' ? null : input.valueAsNumber,
  ]));
  const margins = form.checkValidity() ? cabinetFit(values) : [];
  const zh = document.documentElement.lang === 'zh-Hant';
  outputs.forEach((output, index) => {
    const value = margins[index];
    output.textContent = value == null
      ? (zh ? '待量度' : 'Measure to confirm')
      : new Intl.NumberFormat(zh ? 'zh-Hant' : 'en', {
          maximumFractionDigits: 2, signDisplay: 'exceptZero',
        }).format(value) + (zh ? ' 毫米' : ' mm');
  });
}

form.addEventListener('input', render);
form.addEventListener('submit', event => event.preventDefault());
new MutationObserver(render).observe(document.documentElement, { attributeFilter: ['lang'] });
render();
