function calculateScore() {
  // Haal alle aangevinkte radiobuttons op
  const selectedRadios = document.querySelectorAll('input[type="radio"]:checked');

  // Controleer of alle 8 vragen beantwoord zijn
  const totalQuestions = 8;
  if (selectedRadios.length < totalQuestions) {
    document.getElementById('result').innerText = "Beantwoord eerst alle vragen.";
    return;
  }

  // Tel alle waarden bij elkaar op
  let totalScore = 0;
  selectedRadios.forEach(radio => {
    totalScore += Number(radio.value);
  });

  // Bepaal de uitkomst op basis van de score
  let outcome = "";
  if (totalScore <= 16) {
    outcome = `Score: ${totalScore} - Deze vereniging is denk ik niet voor jou!`;
  } else if (totalScore <= 32) {
    outcome = `Score: ${totalScore} - Misschien ben je er over een paar jaartjes klaar voor!`;
  } else if (totalScore <= 48) { // Hier stond eerst 'totalscore' met een kleine letter 's'
    outcome = `Score: ${totalScore} - Je zou toegelaten zijn... net!`;
  } else {
    outcome = `Score: ${totalScore} - Je hebt het zeker in je om een communist te zijn!`;
  }

  // Toon het resultaat op het scherm
  document.getElementById('result').innerText = outcome;
}