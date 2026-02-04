function proccedtopayment() {
  console.log("procced to payment");
}

function orderfood() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("food ordered");
      resolve();
    }, 1000);
  });
}

orderfood();

proccedtopayment();
