export const TECHNICAL_PROJECTS = [
  {
    title: "Forge",
    shortDescription:
      "A mobile app that combines workout tracking, diet/macro logging, social features, and AI-based fitness guidance into a single platform.",
    description:
      "A mobile app that combines workout tracking, diet/macro logging, social features, and AI-based fitness guidance into a single platform.",
    highlights: [
      "Worked within a 6-person Agile team across 3 sprints to build Forge.",
      "Developed the team's core Agile artifacts, including a project charter, a design document mapping out the app's architecture, and a backlog of 59 user stories that guided sprint planning across development.",
      "Implemented the app’s social layer, including a friends and gym activity feed and real-time in-app messaging, using React Native/TypeScript for the interface and FastAPI with SQLAlchemy for the backend logic and data persistence.",
      "Built core app usability features, including accessibility settings, scheduled workout/meal notifications, an exercise help system, and a recurring workout calendar.",
    ],
    technologies: [
      "React Native",
      "TypeScript",
      "FastAPI",
      "SQLAlchemy",
      "OpenAI API",
      "Pinecone",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/artem-yurovskiy/Forge",
  },
  {
    title: "Online Marketplace",
    shortDescription:
      "A Java-based e-commerce marketplace, for sellers to list and manage products and for buyers to browse stores and place orders.",
    description:
      "A Java-based e-commerce marketplace, for sellers to list and manage products and for buyers to browse stores and place orders.",
    highlights: [
      "Designed a Swing GUI for browsing stores, managing carts, and switching between buyer and seller roles.",
      "Built a multithreaded socket server in Java to handle concurrent buyer and seller sessions.",
      "Validated User, Seller, Customer, Product, and Store logic with JUnit tests under 1-second timeouts.",
      "Implemented persistent storage via object serialization, saving cart and purchase data across sessions.",
    ],
    technologies: [
      "Java",
      "Swing",
      "Socket Programming",
      "Multithreading",
      "JUnit",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/artem-yurovskiy/Online-Marketplace",
  },
  {
    title: "Custom Memory Allocator",
    shortDescription:
      "A custom heap allocator built in C, managing memory manually instead of relying on the standard library's malloc and free.",
    description:
      "A custom heap allocator built in C, managing memory manually instead of relying on the standard library's malloc and free.",
    highlights: [
      "Implemented the allocator using low-level pointer manipulation and boundary tags to track allocated and free memory blocks.",
      "Designed free list management to track available memory blocks and support efficient allocation and deallocation.",
      "Built block splitting logic to divide larger free blocks into smaller ones, reducing wasted space on small allocations.",
      "Implemented immediate coalescing to merge adjacent free blocks, minimizing fragmentation and improving memory reuse over time.",
    ],
    technologies: ["C", "Systems Programming", "Memory Management"],
    liveUrl: "",
    githubUrl: "",
  },
  {
    title: "Wordle Unlimited",
    shortDescription:
      "A JavaFX desktop clone of Wordle — the popular NYT word game where users have six tries to guess a hidden five-letter word.",
    description:
      "A JavaFX desktop clone of Wordle — the popular NYT word game where users have six tries to guess a hidden five-letter word.",
    highlights: [
      "Built the core game logic in Java, validating guesses letter by letter and generating a new target word each round.",
      "Implemented custom tile-flip animations in JavaFX to visually reveal correct, misplaced, and incorrect letters after each guess.",
      "Built a statistics dashboard using JavaFX's charting library to track win percentage, current streak, and guess distribution across games.",
    ],
    technologies: ["Java", "JavaFX", "Maven"],
    liveUrl: "",
    githubUrl: "https://github.com/artem-yurovskiy/Wordle-Unlimited",
  },
  {
    title: "This Website!",
    shortDescription: "You are looking at it right now.",
    description: "You are looking at it right now.",
    highlights: [
      "Built as a fully component-based React app, with each section, including Experience, Projects, Skills, and Education, structured as its own independent, reusable component.",
      "Designed using Tailwind CSS.",
      "Deployed on Vercel.",
    ],
    technologies: ["React", "Tailwind CSS", "Vercel"],
    liveUrl: "",
    githubUrl: "https://github.com/artem-yurovskiy/Portfolio",
  },
];
