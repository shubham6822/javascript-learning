function proccedtopayment() {
  console.log("procced to payment");
}

function orderfood(callback) {
  console.log("food ordered");
  callback();
}

orderfood(proccedtopayment);
