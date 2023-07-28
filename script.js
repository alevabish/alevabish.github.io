function generate(){
const quotes = {
"– Mahatma Ghandi":'"Live as if you were to die tomorrow. Learn as if you were to live forever."',
"– Chinese Proverb":'"A man who asks is a fool for five minutes. A man who never asks is a fool for life."',

"– Leonardo da Vinci":'"Learning never exhausts the mind."',
"– George Evans":'"Every student can learn, just not on the same day, or the same way."',
"– Howard Gardner":'"If you think education is expensive, try estimating the cost of ignorance."',
"– B.B. King":'"The beautiful thing about learning is nobody can take it away from you."',
"– Leo Buscaglia":'"Change is the end result of all true learning."',
"– Aristotle":'"The roots of education are bitter, but the fruit is sweet."',
"– Albert Einstein":'"Education is what remains after one has forgotten what one has learned in school."',
"– Stephen Hawking":'"However difficult life may seem, there is always something you can do and succeed at."',
"– Chinese proverb":'"Learning is like rowing upstream: not to advance is to drop back."',

"– Walt Disney":'"All our dreams can come true; if we have the courage to pursue them."',
"– Henry Ford":'"Anyone who stops learning is old, whether at twenty or eighty. Anyone who keeps learning stays young."',
"– Nelson Mandela":'"It always seems impossible until it’s done."',
"– Dwayne Johnson":'"Success isn’t overnight. It’s when everyday you get a little better than the day before. It all adds up."',
"– Confucius":'"It does not matter how slowly you go as long as you do not stop."',
"– Winston Churchill":'"Success consists of going from failure to failure without loss of enthusiasm."',
"– Benjamin Franklin":'"Energy and persistence conquer all things."',
"– Franklin D. Roosevelt":'"The only limit to our realization of tomorrow will be our doubts of today."',
"– Jack Dorsey":'"Success is never accidental."',
"– Suzy Kassem":'"Doubt kills more dreams than failure ever will."'
}
const authors = Object.keys(quotes);
const author = authors[Math.floor(Math.random()*authors.length)];
const quote = quotes[author];

document.getElementById("author").innerHTML=author;
document.getElementById("quotation").innerHTML=quote.toUpperCase();
}

const sections = document.querySelectorAll("details");
sections.forEach((section) => section.addEventListener('toggle', toggleAcordeon));

function toggleAcordeon() {
  this.open && sections.forEach((section) => {
    if (section !== this && section.open) {
      section.open = false;
    }
  });
}




