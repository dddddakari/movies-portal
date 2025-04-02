import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  console.log("Clearing old movies...")
  await prisma.movie.deleteMany()

  console.log("Seeding movies...")
  await prisma.movie.createMany({
    data: [
      {
        title: "The Shawshank Redemption",
        year: 1994,
        actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
      },
      {
        title: "The Godfather",
        year: 1972,
        actors: ["Marlon Brando", "Al Pacino", "James Caan"],
      },
      {
        title: "Schindler's List",
        year: 1993,
        actors: ["Liam Neeson", "Ralph Fiennes", "Ben Kingsley"],
      },
      {
        title: "The Dark Knight",
        year: 2008,
        actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
      },
      {
        title: "Avengers: Endgame",
        year: 2019,
        actors: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
      },
      {
        title: "Mad Max: Fury Road",
        year: 2015,
        actors: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
      },
      {
        title: "Inception",
        year: 2010,
        actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
      },
      {
        title: "The Matrix",
        year: 1999,
        actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
      },
      {
        title: "Interstellar",
        year: 2014,
        actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
      },
      {
        title: "Spirited Away",
        year: 2001,
        actors: ["Rumi Hiiragi", "Miyu Irino", "Mari Natsuki"],
      },
      {
        title: "Toy Story",
        year: 1995,
        actors: ["Tom Hanks", "Tim Allen", "Don Rickles"],
      },
      {
        title: "Parasite",
        year: 2019,
        actors: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"],
      },
      {
        title: "Se7en",
        year: 1995,
        actors: ["Morgan Freeman", "Brad Pitt", "Kevin Spacey"],
      },
      {
        title: "The Grand Budapest Hotel",
        year: 2014,
        actors: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
      },
      {
        title: "Superbad",
        year: 2007,
        actors: ["Jonah Hill", "Michael Cera", "Christopher Mintz-Plasse"],
      },
      {
        title: "Everything Everywhere All at Once",
        year: 2022,
        actors: ["Michelle Yeoh", "Stephanie Hsu", "Ke Huy Quan"],
      },
      {
        title: "Dune",
        year: 2021,
        actors: ["Timothée Chalamet", "Rebecca Ferguson", "Oscar Isaac"],
      },
      {
        title: "Fight Club",
        year: 1999,
        actors: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
      },
      {
        title: "Pulp Fiction",
        year: 1994,
        actors: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
      },
      {
        title: "The Big Lebowski",
        year: 1998,
        actors: ["Jeff Bridges", "John Goodman", "Julianne Moore"],
      }
    ],
  })
}

main()
  .then(() => console.log("Seed completed!"))
  .catch((e) => console.error("Seed failed:", e))
  .finally(() => prisma.$disconnect())