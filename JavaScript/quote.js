const quotes = [
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote:
      "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steve Jobs",
  },
  {
    quote:
      "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt",
  },
  {
    quote: "If you look at what you have in life, you’ll always have more.",
    author: "Oprah Winfrey",
  },
  {
    quote:
      "If you set your goals ridiculously high and it’s a failure, you will fail above everyone else’s success.",
    author: "James Cameron",
  },
  {
    quote: "Life is what happens when you’re busy making other plans.",
    author: "John Lennon",
  },
  { quote: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
  { quote: "Get busy living or get busy dying.", author: "Stephen King" },
  {
    quote:
      "You have within you right now, everything you need to deal with whatever the world can throw at you.",
    author: "Brian Tracy",
  },
];

document.getElementById("quote").addEventListener("click", function () {
  const p = document.getElementById("quote-p");
  // p.innerText = document.getElementById("quote-p");
  const h2 = document.getElementById("name");
  // console.log(h2);

  const randomIndex = Math.floor(Math.random() * quotes.length);
  console.log(quotes[randomIndex]);

  p.innerText = quotes[randomIndex].quote;
  h2.innerText = quotes[randomIndex].quote;
});
