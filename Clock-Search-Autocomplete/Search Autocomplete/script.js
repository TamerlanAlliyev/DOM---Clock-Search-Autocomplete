"use strict";

const data = [
  {
    artist: "Drake",
    track: "In My Feelings",
  },
  {
    artist: "Ed Sheeran",
    track: "Shape of You",
  },
  {
    artist: "Billie Eilish",
    track: "Bad Guy",
  },
  {
    artist: "Post Malone",
    track: "Rockstar",
  },
  {
    artist: "Ariana Grande",
    track: "7 Rings",
  },
  {
    artist: "Lil Nas X",
    track: "Old Town Road",
  },
  {
    artist: "The Weeknd",
    track: "Blinding Lights",
  },
  {
    artist: "Camila Cabello",
    track: "Havana",
  },
  {
    artist: "Imagine Dragons",
    track: "Believer",
  },
  {
    artist: "Taylor Swift",
    track: "Shake It Off",
  },
  {
    artist: "Shawn Mendes",
    track: "Señorita",
  },
  {
    artist: "Bruno Mars",
    track: "Uptown Funk",
  },
  { artist: "Rihanna", track: "Work" },
  {
    artist: "Justin Bieber",
    track: "Sorry",
    image: "justin",
    streamed: 44332211,
  },
  { artist: "Katy Perry", track: "Roar" },
  {
    artist: "Cardi B",
    track: "Bodak Yellow",
  },
  { artist: "Maroon 5", track: "Sugar" },
  { artist: "Halsey", track: "Without Me" },
  { artist: "Dua Lipa", track: "New Rules" },
  {
    artist: "Imagine Dragons",
    track: "Radioactive",
  },
  {
    artist: "The Chainsmokers",
    track: "Closer",
  },
  {
    artist: "Sam Smith",
    track: "Stay with Me",
  },
  { artist: "Beyoncé", track: "Formation" },
  {
    artist: "Coldplay",
    track: "Viva La Vida",
  },
  { artist: "Sia", track: "Cheap Thrills" },
];

const availableKeywords = data.map((song) => [song.artist, song.track]).flat();

let results = [];

const result_box = document.getElementById("result__box");
const input = document.getElementById("input");

input.addEventListener("input", () => {
  const givenValue = input.value.trim().toLowerCase();

  if (!givenValue) {
    result_box.classList.add("hidden");
    result_box.innerHTML = ""; 
    return;
  }

  results = availableKeywords.filter((keyword) => keyword.toLowerCase().includes(givenValue));

  result_box.innerHTML = "";

  results.forEach((result) => {
    const liElement = document.createElement("li");
    liElement.className = "text-slate-700 rounded-md p-4 cursor-pointer hover:bg-slate-200 transition-all duration-200";
    liElement.textContent = result; 
    liElement.addEventListener("click", (e) => {
      input.value = e.target.textContent;
      result_box.classList.add("hidden");
    });
    result_box.classList.remove("hidden");
    result_box.append(liElement); 
  });
});
