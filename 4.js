function calculateTip(bill) {
    const tipPercentage = (bill >= 50 && bill <= 300) ? 0.15 : 0.20;
    const tip = bill * tipPercentage;
    const total = bill + tip;

    console.log(`The bill was ${bill}, the tip was ${tip.toFixed(2)}, and the total value ${total.toFixed(2)}`);
  }

  const bills = [275, 40, 430];
  bills.forEach(bill => calculateTip(bill));
  