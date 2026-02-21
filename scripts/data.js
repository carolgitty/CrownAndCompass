const hotelList = [
  {
    "rank": 1,
    "name": "Rosewood Hong Kong",
    "city": "Hong Kong",
    "country": "Hong Kong SAR, China",
    "image": "https://images.rosewoodhotels.com/rosewood-hong-kong-hotel.jpg",
    "description": "Luxurious waterfront hotel on Victoria Harbour with panoramic skyline views and world-class dining — ranked No.1 on The World’s 50 Best Hotels 2025. :contentReference[oaicite:1]{index=1}"
  },
  {
    "rank": 2,
    "name": "Four Seasons Bangkok at Chao Phraya River",
    "city": "Bangkok",
    "country": "Thailand",
    "image": "https://images.fourseasons.com/bangkok/Exterior1.jpg",
    "description": "Riverside luxury resort with elegant rooms, infinity pools and Thai hospitality overlooking the Chao Phraya River. :contentReference[oaicite:2]{index=2}"
  },
  {
    "rank": 3,
    "name": "Capella Bangkok",
    "city": "Bangkok",
    "country": "Thailand",
    "image": "https://media.capellahotels.com/bangkok/exterior.jpg",
    "description": "Boutique luxury property on the Chao Phraya River known for serene atmosphere, personalised service and stylish suites. :contentReference[oaicite:3]{index=3}"
  },
  {
    "rank": 4,
    "name": "Passalacqua",
    "city": "Lake Como",
    "country": "Italy",
    "image": "https://example.com/passalacqua-lake-como.jpg",
    "description": "Elegant boutique hotel in an 18th-century villa on Lake Como, combining Italian charm, fine cuisine and spectacular lake views. :contentReference[oaicite:4]{index=4}"
  },
  {
    "rank": 5,
    "name": "Raffles Singapore",
    "city": "Singapore",
    "country": "Singapore",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/5a/Raffles_Hotel_Singapore.jpg",
    "description": "Iconic colonial-era landmark hotel in Singapore, famed for its grandeur and as birthplace of the Singapore Sling cocktail. :contentReference[oaicite:5]{index=5}"
  },
  {
    "rank": 6,
    "name": "Atlantis The Royal",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "image": "https://example.com/atlantis-the-royal-dubai.jpg",
    "description": "Spectacular beachfront luxury resort with dramatic architecture, private beach access and world-class amenities. :contentReference[oaicite:6]{index=6}"
  },
  {
    "rank": 7,
    "name": "Mandarin Oriental Bangkok",
    "city": "Bangkok",
    "country": "Thailand",
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/35/Mandarin_Oriental_Bangkok.jpg",
    "description": "Historic riverfront hotel blending timeless Thai service with refined luxury and acclaimed dining. :contentReference[oaicite:7]{index=7}"
  },
  {
    "rank": 8,
    "name": "Chablé Yucatán",
    "city": "Chocholá",
    "country": "Mexico",
    "image": "https://example.com/chable-yucatan.jpg",
    "description": "Sensory-driven luxury resort set in the lush Yucatán jungle, known for wellness, culinary experiences and bespoke excursions. :contentReference[oaicite:8]{index=8}"
  },
  {
    "rank": 9,
    "name": "Four Seasons Firenze",
    "city": "Florence",
    "country": "Italy",
    "image": "https://example.com/four-seasons-firenze.jpg",
    "description": "Renaissance-era palazzo hotel in Florence surrounded by historic gardens, art and Tuscan elegance. :contentReference[oaicite:9]{index=9}"
  },
  {
    "rank": 10,
    "name": "Upper House Hong Kong",
    "city": "Hong Kong",
    "country": "Hong Kong SAR, China",
    "image": "https://example.com/upper-house-hong-kong.jpg",
    "description": "Design-led urban sanctuary with serene interiors and panoramic views of Victoria Harbour. :contentReference[oaicite:10]{index=10}"
  }
];
const DATA= {
  hotel : hotelList,
  hotel_old: [
    {
      id: 1,
      name: "Royal Atlantis",
      location: "Dubai, UAE",
      price: "$2,800/night",
      unit: "Per day",
      description: "Royal Atlantis",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd"
    },
    {
      id: 2,
      name: "Bora Bora Resort",
      location: "French Polynesia",
      price: "$3,200/night",
      unit: "Per day",
      description: "Royal Atlantis",
      image: "https://images.unsplash.com/photo-1560347876-aeef00ee58a1"
    },
    {
      id: 3,
      name: "The Ritz Palace",
      location: "Paris, France",
      price: "$2,500/night",
      unit: "Per day",
      description: "Royal Atlantis",
      image: "gallery/hotels/ritz.jpeg"
    },    
    {
      id: 4,
      name: "The Leela Palace",
      location: "Goa, India",
      price: "$12,500/night",
      unit: "Per day",
      description: "Golf Club in Cancona, Goa.",
      image: "gallery/hotels/burj.jpeg"
    },
    {

    }
  ],

  yacht: [
    {
      id: 1,
      name: "Azzam",
      location: "Monaco",
      price: "$480,000/day",
      unit: "Per day",
      description: "Royal Atlantis",
      image: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166"
    },
    {
      id: 2,
      name: "Serenity",
      location: "French Riviera",
      price: "$95,000/day",
      unit: "Per day",
      description: "Royal Atlantis",
      image: "https://images.unsplash.com/photo-1540541338287-41700207dee6"
    }
  ],

  car: [
    {
      id: 1,
      name: "Ferrari SF90 Stradale",
      location: "Dubai, UAE",
      price: "$3,200/day",
      unit: "Per day",
      description: "Royal Atlantis",
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888"
    },
    {
      id: 2,
      name: "Rolls Royce Phantom",
      location: "London",
      price: "$2,500/day",
      unit: "Per day",
      description: "Royal Atlantis",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70"
    },
    {
      id: 3,
      name: "Lamborghini Revuelto",
      location: "Monaco",
      price: "$3,800/day",
      unit: "Per day",
      description: "Royal Atlantis",
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b"
    }
  ]
};

const phone = '+971522878161'; // country code + number (no +)
