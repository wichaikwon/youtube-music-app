// Define types for each part of the data

interface Track {
    id: string;
    title: string;
    artist: string;
    album?: string; // Optional since not all tracks have an album associated
    duration: string;
    image_url: string;
  }
  
  interface Playlist {
    id: string;
    title: string;
    description: string;
    image_url: string;
    tracks: Track[];
  }
  
  interface Genre {
    id: string;
    name: string;
    image_url: string;
    playlists: Pick<Playlist, 'id' | 'title' | 'description'>[]; // Only include relevant fields
  }
  
  interface Album {
    id: string;
    title: string;
    artist: string;
    release_year: string;
    tracks: Pick<Track, 'id' | 'title' | 'duration'>[]; // Only include relevant fields
    image_url: string;
  }
  
  interface Trending {
    new_releases: Track[];
    top_artists: {
      id: string;
      name: string;
      image_url: string;
    }[];
  }
  
  interface User {
    id: string;
    name: string;
    subscriptions: string[];
    recently_played: Track[];
  }
  
  // Define Mood interface
  interface Mood {
    id: string;
    name: string; // English name of the mood
    description?: string; // Optional description
    image_url: string; // Optional image URL
  }
  
  // Main structure of the data including moods
  interface MusicData {
    user: User;
    playlists: Playlist[];
    genres: Genre[];
    albums: Album[];
    trending: Trending;
    moods: Mood[]; // New moods section
  }
  
  // Example usage
  const musicData: MusicData = {
    user: {
      id: "user12345",
      name: "John Doe",
      subscriptions: [
        "YouTube Music Premium",
        "YouTube Premium"
      ],
      recently_played: [
        {
          id: "track001",
          title: "Blinding Lights",
          artist: "The Weeknd",
          album: "After Hours",
          duration: "3:20",
          image_url: "https://example.com/images/track001.jpg"
        },
        {
          id: "track002",
          title: "Levitating",
          artist: "Dua Lipa",
          album: "Future Nostalgia",
          duration: "3:23",
          image_url: "/fav/1.jpg"
        }
      ]
    },
    playlists: [
      {
        id: "playlist001",
        title: "Top Hits 2024",
        description: "The biggest hits of the year.",
        image_url: "https://example.com/images/playlist001.jpg",
        tracks: [
          {
              id: "track001",
              title: "Blinding Lights",
              artist: "The Weeknd",
              duration: "3:20",
              image_url: ""
          },
          {
              id: "track002",
              title: "Levitating",
              artist: "Dua Lipa",
              duration: "3:23",
              image_url: ""
          },
          {
              id: "track003",
              title: "Save Your Tears",
              artist: "The Weeknd",
              duration: "3:35",
              image_url: ""
          }
        ]
      },
      {
        id: "playlist002",
        title: "Chill Vibes",
        description: "Relax and unwind with these soothing tracks.",
        image_url: "https://example.com/images/playlist002.jpg",
        tracks: [
          {
              id: "track004",
              title: "Peaches",
              artist: "Justin Bieber",
              duration: "3:18",
              image_url: ""
          },
          {
              id: "track005",
              title: "Good Days",
              artist: "SZA",
              duration: "4:40",
              image_url: ""
          }
        ]
      }
    ],
    genres: [
      {
        id: "genre001",
        name: "Pop",
        image_url: "https://example.com/images/genre001.jpg",
        playlists: [
          {
            id: "playlist001",
            title: "Top Hits 2024",
            description: "The biggest hits of the year."
          },
          {
            id: "playlist003",
            title: "Pop Party",
            description: "Your perfect party playlist with the best pop songs."
          }
        ]
      },
      {
        id: "genre002",
        name: "Hip Hop",
        image_url: "https://example.com/images/genre002.jpg",
        playlists: [
          {
            id: "playlist004",
            title: "Hip Hop Bangers",
            description: "The best hip hop tracks to get you moving."
          }
        ]
      }
    ],
    albums: [
      {
        id: "album001",
        title: "Future Nostalgia",
        artist: "Dua Lipa",
        release_year: "2020",
        tracks: [
          {
            id: "track002",
            title: "Levitating",
            duration: "3:23"
          },
          {
            id: "track006",
            title: "Don't Start Now",
            duration: "3:03"
          }
        ],
        image_url: "https://example.com/images/album001.jpg"
      },
      {
        id: "album002",
        title: "After Hours",
        artist: "The Weeknd",
        release_year: "2020",
        tracks: [
          {
            id: "track001",
            title: "Blinding Lights",
            duration: "3:20"
          },
          {
            id: "track003",
            title: "Save Your Tears",
            duration: "3:35"
          }
        ],
        image_url: "https://example.com/images/album002.jpg"
      }
    ],
    trending: {
      new_releases: [
        {
          id: "track007",
          title: "Montero (Call Me By Your Name)",
          artist: "Lil Nas X",
          album: "Montero",
          duration: "2:17",
          image_url: "https://example.com/images/track007.jpg"
        }
      ],
      top_artists: [
        {
          id: "artist001",
          name: "The Weeknd",
          image_url: "https://example.com/images/artist001.jpg"
        },
        {
          id: "artist002",
          name: "Dua Lipa",
          image_url: "https://example.com/images/artist002.jpg"
        }
      ]
    },
    // Example moods section
    moods: [
      {
        id: "mood001",
        name: "Relaxed",
        description: "Feeling calm and at ease.",
        image_url: "https://example.com/images/mood001.jpg"
      },
      {
        id: "mood002",
        name: "Energetic",
        description: "Full of energy and enthusiasm.",
        image_url: "https://example.com/images/mood002.jpg"
      },
      {
        id: "mood003",
        name: "Sad",
        description: "Feeling down or melancholic.",
        image_url: "https://example.com/images/mood003.jpg"
      },
      {
        id: "mood004",
        name: "Romantic",
        description: "In a loving or affectionate mood.",
        image_url: "https://example.com/images/mood004.jpg"
      },
      {
        id: "mood005",
        name: "Focused",
        description: "Concentrating and productive.",
        image_url: "https://example.com/images/mood005.jpg"
      },
      {
        id: "mood006",
        name: "Party",
        description: "Ready to celebrate and have fun.",
        image_url: "https://example.com/images/mood006.jpg"
      },
      {
        id: "mood007",
        name: "Travel",
        description: "Feeling adventurous and ready to explore.",
        image_url: "https://example.com/images/mood007.jpg"
      },
      {
        id: "mood008",
        name: "Exercise",
        description: "Feeling active and ready to work out.",
        image_url: "https://example.com/images/mood008.jpg"
      },
      {
        id: "mood009",
        name: "Feel Good",
        description: "Feeling happy and content.",
        image_url: "https://example.com/images/mood009.jpg"
      }
    ]
  }