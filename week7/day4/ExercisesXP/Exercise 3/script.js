// Exercise 3 : Fortune Teller
// Instructions
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

(function (childrenNum, partnerName, location, job) {
  const p = document.createElement("p");
  p.textContent = `You will be a ${job} in ${location}, and married to ${partnerName} with ${childrenNum} kids.`;
  document.body.appendChild(p);
})(5, "Sophie", "Paris", "tailor");
