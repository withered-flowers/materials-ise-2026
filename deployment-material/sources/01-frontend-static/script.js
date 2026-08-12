document.getElementById('calc-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const priceInput = parseFloat(document.getElementById('price').value);
  const discountInput = parseFloat(document.getElementById('discount').value);

  if (isNaN(priceInput) || isNaN(discountInput)) {
    alert('Masukkan angka yang valid!');
    return;
  }

  const discountAmount = (priceInput * discountInput) / 100;
  const finalPrice = priceInput - discountAmount;

  document.getElementById('discount-amount').innerText = formatRupiah(discountAmount);
  document.getElementById('final-price').innerText = formatRupiah(finalPrice);

  const resultBox = document.getElementById('result');
  resultBox.classList.remove('hidden');
});

function formatRupiah(number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(number);
}
