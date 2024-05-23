// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
  { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
  { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
  { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
  { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
  { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
  {
    title: "Escape (The Piña Colada Song)",
    artist: "Rupert Holmes",
    genre: "Pop",
  },
  { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
  {
    title: "Ain't No Mountain High Enough",
    artist: "Marvin Gaye & Tammi Terrell",
    genre: "R&B",
  },
  { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
  { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
  {
    title: "Fooled Around and Fell in Love",
    artist: "Elvin Bishop",
    genre: "Rock",
  },
  { title: "In Da Club", artist: "50 cent", genre: "Rap" },
  { title: "Not Like Us", artist: "Kendrick Lamar", genre: "Rap" },
  { title: "Meet The Grahams", artist: "Kendrick Lamar", genre: "Rap" },
  { title: "Nothing Else Matters", artist: "Metallica", genre: "Metal" },
  { title: "Whiskey in the Jar", artist: "Metallica", genre: "Metal" },
  // Feel free to add even more songs
];

// Object containing each Guardian's preferred genre
const guardians = {
  "Star-Lord": "Rock",
  Gamora: "Pop",
  Drax: "R&B",
  Rocket: "Rap",
  Groot: "Metal",
  // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
  // Use the map() function to create playlists for each Guardian
  // Your code here
  for (const guardian in guardians) {
    const genre = guardians[guardian];
    const playlist = songs
      .filter((song) => song.genre === genre)
      .map((song) => `${song.title} - ${song.artist}`);
    displayPlaylist(guardian, playlist);
  }
}

function displayPlaylist(guardian, playlist) {
  const playlistDiv = document.createElement("div");
  playlistDiv.classList.add("playlist");

  const heading = document.createElement("h3");
  heading.textContent = guardian;
  playlistDiv.appendChild(heading);

  const list = document.createElement("ul");
  playlist.forEach((song) => {
    const listItem = document.createElement("li");
    listItem.textContent = song;
    list.appendChild(listItem);
  });
  playlistDiv.appendChild(list);

  document.getElementById("playlists").appendChild(playlistDiv);
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);
