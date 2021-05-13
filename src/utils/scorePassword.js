const scorePassword = pass => {
  let score = 0;
  if (!pass)
    return score;

  let letters = new Object();
  for (var i = 0; i < pass.length; i++) {
    letters[pass[i]] = (letters[pass[i]] || 0) + 1;
    score += 5.0 / letters[pass[i]];
  }

  let variations = {
    digits: /\d/.test(pass),
    lower: /[a-z]/.test(pass),
    upper: /[A-Z]/.test(pass),
    nonWords: /\W/.test(pass),
  }

  let variationCount = 0;
  for (var check in variations) {
    variationCount += (variations[check] == true) ? 1 : 0;
  }
  score += (variationCount - 1) * 10;

  return parseInt(score);
}

export const checkPasswordStrength = pass => {
  var score = scorePassword(pass);
  if (score > 80)
    return "Strong";
  if (score > 60)
    return "Regular";
  if (score >= 30)
    return "Weak";

  return "cold";
}
