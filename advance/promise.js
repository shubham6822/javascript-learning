function proccedtopayment() {
  console.log("procced to payment");
}

function orderfood() {
  setTimeout(() => {
    console.log("food ordered");
  }, 1000);
}

await new Promise(orderfood);
proccedtopayment();
