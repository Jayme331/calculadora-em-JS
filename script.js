function calculateMortgage() {
    const homePrice = parseFloat(document.getElementById('homePrice').value);
    const downPayment = parseFloat(document.getElementById('downPayment').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12;
    const loanTerm = parseInt(document.getElementById('loanTerm').value) * 12;

    const loanAmount = homePrice - downPayment;
    const monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));

    document.getElementById('result').innerHTML = isFinite(monthlyPayment)
        ? `Parcela Mensal: R$ ${monthlyPayment.toFixed(2)}`
        : 'Preencha todos os campos corretamente.';
}
