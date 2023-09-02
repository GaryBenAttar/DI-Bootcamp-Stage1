// Exercise 2: Analyze

// Instructions

function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling");
  let result = await resolveAfter2Seconds();
  console.log(result);
}

asyncCall();

// Analyse the code provided above before executing it - what will be the outcome?

// Expected output:

// calling
// Then after 2s: resolved
