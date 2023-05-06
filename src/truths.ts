/**
 * Truths
 * @description Get a random truth sent back after function has been ran.
 * @nsfw This function does not contain Not-Safe-For-Work content.
 * @updated Fri May 5, 2023
 */

export const Truths = () => {
  var truths = [
    'Have you ever kissed an animal?',
    'Have you ever cheated on a test?',
    'What was the last thing you ate?',
    'Do you have any unusual talents?',
    'Do you have any phobias?',
    "Have you ever used someone else's password?",
    'Have you ever ridden the bus without paying the fare?',
    'Do you message people during your classes?',
    'Have you ever fallen asleep during a class?',
    'Have you ever bitten a toenail?',
    'Have you ever stolen something?',
    'Are you a hard-working student?',
    'What was the best day of you life?',
    'What was the strangest dream you ever had?',
    'What is the most annoying thing to you (pet peeve)?',
    'If you could have a superpower, what would it be?',
    'Who is most important to you?',
    'Have you ever whacked off to an animal?',
  ];
  var truth = truths[Math.floor(Math.random() * truths.length)];
  return truth;
};
