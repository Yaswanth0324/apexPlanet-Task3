function submitQuiz() {
  const answers = {
    q1: "sister",
    q2: "true",
    q3: "60",
    q4: "saturday",
    q5: "132",
    q6: "480",
    q7: "119",
    q8: "300",
    q9: "2.25",
    q10: "24.5",
    q11: "plentiful",
    q12: "temporary",
    q13: "colossal",
    q14: "She prefers coffee to tea",
    q15: "receive",
    q16: "54",
    q17: "Caravan",
    q18: "IQKQ",
    q19: "26",
    q20: "Frame"
  };

  let score = 0;
  let total = Object.keys(answers).length;

  for (let key in answers) {
    const selected = document.querySelector(`input[name="${key}"]:checked`);
    const allOptions = document.querySelectorAll(`input[name="${key}"]`);

    allOptions.forEach(option => {
      option.parentElement.style.color = "#333";
    });

    if (selected) {
      if (selected.value.toLowerCase() === answers[key].toLowerCase()) {
        score++;
        selected.parentElement.style.color = "green";
      } else {
        selected.parentElement.style.color = "red";
      }
    }
  }

  const result = document.createElement("div");
  result.style.textAlign = "center";
  result.style.fontSize = "18px";
  result.style.marginTop = "20px";
  result.innerHTML = `<strong>You scored ${score} out of ${total}!</strong>`;

  const oldResult = document.querySelector(".result");
  if (oldResult) oldResult.remove();

  result.classList.add("result");
  document.querySelector(".quiz-container").appendChild(result);

  if (score >= 12) {
      alert("🎉 You are qualified for the quiz!");
    } else {
      alert("❌ You are not qualified the quiz. You need improvement.");
    }
}
function loadJoke() {
  fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
    .then(response => response.json())
    .then(data => {
      document.getElementById("joke").innerText = data.joke || "No joke found!";
    })
    .catch(error => {
      document.getElementById("joke").innerText = "Error fetching joke.";
      console.error(error);
    });
}

