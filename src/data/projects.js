export const PROJECTS = [
  {
    title: 'Forge',
    image: '/projects/forge.png',
    shortDescription:
      'Forge is a full-stack mobile fitness and social app I helped build as part of a 6-person Agile team across 3 sprints. It combines workout tracking, diet logging, social feeds, and AI-assisted fitness guidance.',
    description:
      'Forge is a full-stack mobile fitness and social app I helped build as part of a 6-person Agile team across 3 sprints. It combines workout tracking, diet logging, social feeds, and AI-assisted fitness guidance.',
    highlights: [
      'Built 6 features end to end, including workout scheduling, accessibility settings, push notification scheduling, a friends activity feed, and AI-powered meal recommendations, owning the frontend, backend, and tests for each.',
      'Wired the OpenAI API into a FastAPI endpoint to generate structured, personalized meal recommendations, then integrated the feature into the React Native frontend.',
      'Built push notification scheduling with Expo Notifications, letting users set reminders tied to their planned workouts and meals.',
      "Contributed to the team's design document and helped define 59 user stories in the product backlog, shaping the app's core features.",
    ],
    technologies: ['React Native', 'TypeScript', 'FastAPI', 'SQLAlchemy', 'OpenAI API'],
    liveUrl: '',
    githubUrl: 'https://github.com/artem-yurovskiy/Forge',
  },
  {
    title: 'Online Marketplace',
    image: '/project_placeholder.webp',
    shortDescription:
      'Online Marketplace is a Java client-server application I built to support concurrent buyers and sellers, handling store browsing, shopping carts, and purchase history through a custom multithreaded backend.',
    description:
      'Online Marketplace is a Java client-server application I built to support concurrent buyers and sellers, handling store browsing, shopping carts, and purchase history through a custom multithreaded backend.',
    highlights: [
      'Designed a Swing GUI for browsing stores, managing carts, and switching between buyer and seller roles.',
      'Built a multithreaded socket server in Java, running each client connection on its own dedicated thread to support real concurrent sessions.',
      'Validated User, Seller, Customer, Product, and Store logic with JUnit tests under 1-second timeouts.',
      'Implemented persistent storage via object serialization, saving cart and purchase data across sessions without a database.',
    ],
    technologies: ['Java', 'Swing', 'Socket Programming', 'Multithreading', 'JUnit'],
    liveUrl: '',
    githubUrl: 'https://github.com/artem-yurovskiy/Online-Marketplace',
  },
  {
    title: 'Custom Memory Allocator',
    image: '/project_placeholder.webp',
    shortDescription:
      "Custom Memory Allocator is a low-level systems project where I implemented my own heap allocator in C, managing memory manually instead of relying on the standard library's malloc and free.",
    description:
      "Custom Memory Allocator is a low-level systems project where I implemented my own heap allocator in C, managing memory manually instead of relying on the standard library's malloc and free.",
    highlights: [
      'Implemented a custom heap allocator in C using low-level pointer manipulation and boundary tags to track allocated and free memory blocks.',
      'Designed free list management to track available memory blocks and support efficient allocation and deallocation.',
      'Built block splitting logic to divide larger free blocks into smaller ones, reducing wasted space on small allocations.',
      'Implemented immediate coalescing to merge adjacent free blocks back together, minimizing fragmentation and improving memory reuse over time.',
    ],
    technologies: ['C', 'Systems Programming', 'Memory Management'],
    liveUrl: '',
    githubUrl: '',
  },
  {
    title: 'Wordle Unlimited',
    image: '/project_placeholder.webp',
    shortDescription:
      'Wordle Unlimited is a JavaFX desktop clone of the NYT word game, where players get six guesses to find a five-letter word, complete with animated feedback and a statistics dashboard tracking performance over time.',
    description:
      'Wordle Unlimited is a JavaFX desktop clone of the NYT word game, where players get six guesses to find a five-letter word, complete with animated feedback and a statistics dashboard tracking performance over time.',
    highlights: [
      'Built the core game logic in Java, validating guesses letter by letter and generating a new target word each round.',
      'Implemented custom tile-flip animations in JavaFX to visually reveal correct, misplaced, and incorrect letters after each guess.',
      "Built a statistics dashboard using JavaFX's charting library to track win percentage, current streak, and guess distribution across games.",
    ],
    technologies: ['Java', 'JavaFX', 'Maven'],
    liveUrl: '',
    githubUrl: 'https://github.com/artem-yurovskiy/Wordle-Unlimited',
  },
]
