import placeholder from "../assets/Images/about2.png";
import aiTrip from "../assets/Projects/aiTrip.png";
import movieZone from "../assets/Projects/movieZone.png";
import tictactoe from "../assets/Projects/tictactoe.png";
import notesApp from "../assets/Projects/notesApp.png";

export const ProjectList = [
  {
    id: 1,
    name: "AI-Trip-Planner",
    description: [
      "Developed an AI-powered trip planner full stack application using Gemini AI.",
      "Integrated AI to provide hotel recommendations, day-wise itineraries, and places to visit with geolocation details.",
      "Developed a modern, responsive frontend with React.js for interactive components, Tailwind CSS for streamlined styling, and shadcn/ui for contemporary UI elements.",
      "Utilized Firebase Firestore for secure storage and management of trip details.",
    ],
    img: aiTrip,
    //max 6 tech stack
    tech: ["React.js", "Tailwind CSS", "Shadecn", "Firebase", "Gemini AI"],
    source: "https://github.com/shoaibcodez/ai-trip-planner",
    demo: "https://ai-trip-planner-taupe.vercel.app/",
  },
  {
    id: 2,
    name: "Movie-Zone",
    description: [
      "Developed a movie trailer website using React.js for the user interface and CSS for styling.",
      "Integrated TmdbAPI to fetch and display movie data.",
      "Implemented a trailer view feature allowing users to search for any movie and watch its trailer.",
    ],
    img: movieZone,
    //max 6 tech stack
    tech: ["React.js", "CSS", "TmdbAPI"],
    source: "https://github.com/shoaibcodez/Movie-Zone",
    demo: "https://movie-zone-diwnnsmta-shoaibcodezs-projects.vercel.app/",
  },
  {
    id: 3,
    name: "Notes-App",
    description: [
      "Created a notes application using JavaScript, HTML, and CSS.",
      "Implemented features for adding, saving, and deleting notes.",
      "Utilized local storage to ensure data persistence across page refreshes.",
      "Designed an intuitive user interface for efficient note management.",
    ],
    img: notesApp,
    //max 6 tech stack
    tech: ["JavaScript", "HTML", "CSS"],
    source: "https://github.com/shoaibcodez/Notes-App",
    demo: "https://shoaibcodez.github.io/Notes-App/",
  },
  {
    id: 4,
    name: "Tic-Tac-Toe",
    description: [
      "Developed a multiplayer Tic-Tac-Toe game using vanilla JavaScript, CSS, and HTML.",
      "Implemented game logic to handle turns, win conditions, and draw scenarios.",
      "Created an intuitive user interface with responsive design to ensure a seamless gaming experience across different devices.",
    ],
    img: tictactoe,
    //max 6 tech stack
    tech: ["JavaScript", "HTML", "CSS"],
    source: "https://github.com/shoaibcodez/Tic-Tac-Toe",
    demo: "https://shoaibcodez.github.io/Tic-Tac-Toe/",
  },
];
