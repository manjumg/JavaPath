
import { useState } from "react";
import "./App.css";
import "./Notes.css";

const topics = [
  {
    title: "Core Java",
    category: "Theory",
    icon: "☕",
    description: "Learn Java basics, variables, classes and objects.",
    level: "Beginner",
  },
  {
    title: "OOP Concepts",
    category: "Theory",
    icon: "📘",
    description: "Understand inheritance, abstraction and polymorphism.",
    level: "Beginner",
  },
  {
    title: "Java Coding",
    category: "Coding",
    icon: "💻",
    description: "Solve arrays, strings and collection problems.",
    level: "Practice",
  },
  {
    title: "Java 8 Streams",
    category: "Theory",
    icon: "⚡",
    description: "Master Lambda expressions, Streams and Collectors.",
    level: "Intermediate",
  },
  {
    title: "Spring Boot",
    category: "Backend",
    icon: "🚀",
    description: "Learn REST APIs, dependency injection and Spring.",
    level: "Intermediate",
  },
  {
    title: "Microservices",
    category: "Backend",
    icon: "🔗",
    description: "Explore service communication and resilience.",
    level: "Advanced",
  },
  {
    title: "Interview Questions",
    category: "Interview",
    icon: "🎯",
    description: "Prepare answers with easy memorization keys.",
    level: "All levels",
  },
  {
    title: "SQL & Database",
    category: "Interview",
    icon: "🗄️",
    description: "Practice SQL queries, joins and database concepts.",
    level: "Practice",
  },
  {
    title: "Multithreading",
    category: "Theory",
    icon: "⚙️",
    description: "Learn threads, synchronization and concurrency.",
    level: "Advanced",
  },
];

const filters = ["All", "Theory", "Coding", "Backend", "Interview"];

const lessons = [
  {
    id: 1,
    title: "Introduction to Java",
    category: "Core Java",
    level: "Beginner",
    description: "Understand Java, bytecode, JVM, JRE and JDK.",
    theory: [
      "Java is a high-level, class-based programming language.",
      "Java source code is compiled into bytecode by the Java compiler.",
      "The JVM executes Java bytecode on supported platforms.",
      "The JDK contains the tools needed to develop Java applications.",
      "Java supports object-oriented programming and automatic memory management.",
    ],
    code: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}`,
    output: "Hello, Java!",
    memory:
      "JDK = Development tools | javac = Compiler | JVM = Executes bytecode",
  },
  {
    id: 2,
    title: "Variables and Data Types",
    category: "Core Java",
    level: "Beginner",
    description: "Learn how to store data using Java variables and types.",
    theory: [
      "A variable is a named storage location for a value.",
      "Primitive types include int, long, double, char and boolean.",
      "String is a reference type used to represent text.",
      "Local variables must be initialized before use.",
      "Choose a data type based on the kind of value you need to store.",
    ],
    code: `public class Main {
    public static void main(String[] args) {
        int age = 32;
        double salary = 50000.50;
        String name = "Manjunath";
        boolean learningJava = true;

        System.out.println(name);
        System.out.println(age);
        System.out.println(salary);
        System.out.println(learningJava);
    }
}`,
    output: "Manjunath\n32\n50000.5\ntrue",
    memory: "int = Whole numbers | double = Decimal numbers | String = Text",
  },
  {
    id: 3,
    title: "OOP Concepts",
    category: "OOP",
    level: "Beginner",
    description: "Learn the four pillars of object-oriented programming.",
    theory: [
      "Encapsulation combines data and methods while controlling access to internal state.",
      "Inheritance allows a class to extend another class.",
      "Polymorphism allows the same method call to behave differently for different objects.",
      "Abstraction exposes essential behavior while hiding implementation details.",
      "Interfaces and abstract classes are common tools for abstraction.",
    ],
    code: `class Animal {
    void sound() {
        System.out.println("Animal sound");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Bark");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal animal = new Dog();
        animal.sound();
    }
}`,
    output: "Bark",
    memory: "OOP = Encapsulation + Inheritance + Polymorphism + Abstraction",
  },
  {
    id: 4,
    title: "ArrayList",
    category: "Collections",
    level: "Intermediate",
    description: "Understand resizable lists and common collection operations.",
    theory: [
      "ArrayList is part of the Java Collections Framework.",
      "It maintains insertion order and allows duplicate elements.",
      "It supports index-based access to elements.",
      "It grows automatically as elements are added.",
      "ArrayList is not synchronized by default.",
    ],
    code: `import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> names = new ArrayList<>();

        names.add("Java");
        names.add("Spring Boot");
        names.add("Java");

        System.out.println(names);
        System.out.println(names.get(0));
    }
}`,
    output: "[Java, Spring Boot, Java]\nJava",
    memory: "ArrayList = Resizable array + insertion order + duplicates allowed",
  },
  {
    id: 5,
    title: "Lambda Expressions",
    category: "Java 8",
    level: "Intermediate",
    description: "Write concise implementations of functional interfaces.",
    theory: [
      "A lambda expression provides an implementation of a functional interface.",
      "A functional interface has exactly one abstract method.",
      "Lambdas reduce boilerplate code in many situations.",
      "They are commonly used with collections, streams and event handling.",
    ],
    code: `@FunctionalInterface
interface Greeting {
    void sayHello();
}

public class Main {
    public static void main(String[] args) {
        Greeting greeting =
            () -> System.out.println("Hello!");

        greeting.sayHello();
    }
}`,
    output: "Hello!",
    memory: "Lambda = Concise implementation of a functional interface",
  },
  {
    id: 6,
    title: "Java Stream API",
    category: "Java 8",
    level: "Intermediate",
    description: "Filter, transform and process collections declaratively.",
    theory: [
      "Streams process sequences of data from a source.",
      "filter() selects elements that match a condition.",
      "map() transforms each element.",
      "collect() can gather processed elements into a collection.",
      "Intermediate operations are generally lazy until a terminal operation runs.",
    ],
    code: `import java.util.List;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        List<Integer> numbers =
            List.of(1, 2, 3, 4, 5, 6);

        List<Integer> result = numbers.stream()
            .filter(n -> n % 2 == 0)
            .collect(Collectors.toList());

        System.out.println(result);
    }
}`,
    output: "[2, 4, 6]",
    memory: "filter() selects | map() transforms | collect() gathers",
  },
  {
    id: 7,
    title: "Multithreading Basics",
    category: "Multithreading",
    level: "Intermediate",
    description: "Learn threads and concurrent execution in Java.",
    theory: [
      "A thread is an independent path of execution within a process.",
      "Calling start() schedules a new thread to execute.",
      "Calling run() directly is an ordinary method call on the current thread.",
      "Shared mutable data may require synchronization.",
      "ExecutorService helps manage asynchronous tasks and thread pools.",
    ],
    code: `public class Main {
    public static void main(String[] args) {
        Thread task = new Thread(() -> {
            System.out.println("Task running");
        });

        task.start();
    }
}`,
    output: "Task running",
    memory: "start() starts a new thread; run() called directly does not.",
  },
  {
    id: 8,
    title: "Spring Boot Introduction",
    category: "Spring Boot",
    level: "Intermediate",
    description: "Understand Spring Boot and how to create REST endpoints.",
    theory: [
      "Spring Boot simplifies the configuration of Spring applications.",
      "Auto-configuration uses dependencies and application settings to configure components.",
      "Starter dependencies simplify dependency management.",
      "@RestController is commonly used to create REST controllers.",
      "@GetMapping maps HTTP GET requests to handler methods.",
    ],
    code: `import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    @GetMapping("/hello")
    public String hello() {
        return "Hello from Spring Boot";
    }
}`,
    output: "GET /hello returns: Hello from Spring Boot",
    memory: "@RestController handles web requests; @GetMapping maps GET requests.",
  },
  {
    id: 9,
    title: "Microservices Introduction",
    category: "Microservices",
    level: "Advanced",
    description: "Learn independently deployable services and communication.",
    theory: [
      "Microservices architecture divides an application into smaller services.",
      "Each service owns a focused business capability.",
      "Services can communicate through REST APIs or asynchronous messaging such as Kafka.",
      "Resilience patterns help manage failures and timeouts.",
      "Service boundaries and data ownership should be designed carefully.",
    ],
    code: `// Example using Spring's RestClient
RestClient client = RestClient.create();

String response = client.get()
    .uri("http://localhost:8081/accounts/101")
    .retrieve()
    .body(String.class);`,
    output: "The response contains data returned by the Account service.",
    memory: "Microservices = Focused services + independent deployment",
  },
  {
    id: 10,
    title: "Java Interview Questions",
    category: "Interview",
    level: "All levels",
    description: "Prepare common interview questions with memorable answers.",
    theory: [
      "== compares primitive values or reference identity.",
      "equals() checks logical equality when correctly implemented.",
      "HashMap stores key-value pairs and permits one null key.",
      "An interface defines a contract that implementing classes follow.",
      "Exception handling helps manage exceptional conditions.",
    ],
    code: `String first = new String("Java");
String second = new String("Java");

System.out.println(first == second);
System.out.println(first.equals(second));`,
    output: "false\ntrue",
    memory: "== compares object references; equals() can compare content.",
  },
];

function App() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [showNotes, setShowNotes] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [noteSearch, setNoteSearch] = useState("");
  const [noteCategory, setNoteCategory] = useState("All");

  const filteredTopics = topics.filter((topic) => {
    const matchesSearch =
      `${topic.title} ${topic.description} ${topic.category}`
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesFilter =
      activeFilter === "All" || topic.category === activeFilter;

    return matchesSearch && matchesFilter;
  });

  const noteCategories = [
    "All",
    "Core Java",
    "OOP",
    "Collections",
    "Java 8",
    "Multithreading",
    "Spring Boot",
    "Microservices",
    "Interview",
  ];

  const filteredLessons = lessons.filter((lesson) => {
    const matchesSearch =
      `${lesson.title} ${lesson.description} ${lesson.category}`
        .toLowerCase()
        .includes(noteSearch.toLowerCase());

    const matchesCategory =
      noteCategory === "All" || lesson.category === noteCategory;

    return matchesSearch && matchesCategory;
  });

  function openNotes(topicTitle = "") {
    setShowNotes(true);
    setSelectedLesson(null);
    setNoteSearch(topicTitle);
    setNoteCategory("All");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function goHome() {
    setShowNotes(false);
    setSelectedLesson(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (showNotes) {
    return (
      <div className="notes-page">
        <header className="notes-header">
          <button className="notes-back" onClick={goHome}>
            ← JavaPath Home
          </button>
          <span className="notes-brand">
            Java<span>Path</span> / Notes
          </span>
        </header>

        <section className="notes-hero">
          <span className="notes-eyebrow">
            YOUR JAVA LEARNING LIBRARY
          </span>
          <h1>Java Notes &amp; Theory</h1>
          <p>
            Learn concepts in simple language, understand practical code,
            and revise the key points for interviews.
          </p>

          <input
            className="notes-search"
            type="search"
            placeholder="Search Java topics..."
            value={noteSearch}
            onChange={(event) => setNoteSearch(event.target.value)}
            aria-label="Search Java notes"
          />
        </section>

        <main className="notes-main">
          {selectedLesson ? (
            <article className="notes-detail">
              <button
                className="notes-back detail-back"
                onClick={() => setSelectedLesson(null)}
              >
                ← All topics
              </button>

              <span className="notes-topic-category">
                {selectedLesson.category}
              </span>
              <h2>{selectedLesson.title}</h2>
              <p className="notes-description">
                {selectedLesson.description}
              </p>

              <h3>📘 Theory</h3>
              <ul className="notes-theory">
                {selectedLesson.theory.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <h3>💻 Code example</h3>
              <pre className="notes-code">
                <code>{selectedLesson.code}</code>
              </pre>

              <h3>▶ Expected output</h3>
              <pre className="notes-output">
                <code>{selectedLesson.output}</code>
              </pre>

              <div className="notes-memory">
                <strong>🧠 Memorize key</strong>
                <p>{selectedLesson.memory}</p>
              </div>

              <button
                className="notes-primary"
                onClick={() => setSelectedLesson(null)}
              >
                Back to topics
              </button>
            </article>
          ) : (
            <>
              <div className="notes-section-heading">
                <div>
                  <h2>Explore topics</h2>
                  <p>
                    Select a topic to read the theory, code, and memory key.
                  </p>
                </div>
                <span className="notes-count">
                  {filteredLessons.length} topics
                </span>
              </div>

              <div className="notes-filters">
                {noteCategories.map((category) => (
                  <button
                    key={category}
                    className={
                      noteCategory === category
                        ? "notes-filter active"
                        : "notes-filter"
                    }
                    onClick={() => setNoteCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="notes-grid">
                {filteredLessons.map((lesson) => (
                  <article className="notes-card" key={lesson.id}>
                    <div className="notes-card-top">
                      <span className="notes-topic-category">
                        {lesson.category}
                      </span>
                      <span className="notes-level">
                        {lesson.level}
                      </span>
                    </div>

                    <h3>{lesson.title}</h3>
                    <p>{lesson.description}</p>

                    <button
                      className="notes-read"
                      onClick={() => setSelectedLesson(lesson)}
                    >
                      Read notes <span>→</span>
                    </button>
                  </article>
                ))}
              </div>

              {filteredLessons.length === 0 && (
                <div className="notes-empty">
                  <h3>No topics found</h3>
                  <p>
                    Try another search term or select a different category.
                  </p>
                  <button
                    className="notes-primary"
                    onClick={() => {
                      setNoteSearch("");
                      setNoteCategory("All");
                    }}
                  >
                    Show all topics
                  </button>
                </div>
              )}
            </>
          )}
        </main>

        <footer className="notes-footer">
          Keep learning. Keep coding. Keep growing.
        </footer>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="navbar">
        <a className="brand" href="#home">
          <span className="brand-logo">J</span>
          <span>
            Java<span className="brand-highlight">Path</span>
          </span>
        </a>

        <nav className="nav-links">
          <button className="nav-link-button" onClick={() => openNotes()}>
            Notes
          </button>
          <a href="#topics">Coding</a>
          <a href="#topics">Interview Prep</a>
          <a href="#about-author">About</a>
        </nav>

        <button className="nav-cta" onClick={() => openNotes()}>
          Start Learning <span>→</span>
        </button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="status-dot"></span>
              YOUR JAVA LEARNING JOURNEY STARTS HERE
            </div>

            <h1>
              Learn Java.
              <br />
              <span>Build Your Future.</span>
            </h1>

            <p className="hero-description">
              Master Java with simple notes, practical coding examples,
              and real-world interview preparation — all in one place.
            </p>

            <div className="hero-buttons">
              <button
                className="button-primary"
                onClick={() => openNotes()}
              >
                Explore Tutorials <span>→</span>
              </button>
              <button
                className="button-secondary"
                onClick={() => openNotes("Java")}
              >
                Explore Coding
              </button>
            </div>

            <div className="hero-benefits">
              <span>✓ Beginner friendly</span>
              <span>✓ Practical examples</span>
              <span>✓ Free learning</span>
            </div>
          </div>

          <div className="code-preview">
            <div className="code-header">
              <div className="window-dots">
                <i></i>
                <i></i>
                <i></i>
              </div>
              <span>HelloWorld.java</span>
              <span className="java-label">JAVA</span>
            </div>

            <div className="code-body">
              <div>
                <span className="line">1</span>{" "}
                <span className="purple">public class</span>{" "}
                <span className="yellow">HelloWorld</span> {"{"}
              </div>
              <div>
                <span className="line">2</span> &nbsp;&nbsp;
                <span className="purple">public static void</span> main(String[] args) {"{"}
              </div>
              <div>
                <span className="line">3</span> &nbsp;&nbsp;&nbsp;&nbsp;
                System.out.println(
              </div>
              <div>
                <span className="line">4</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="green">"Hello, JavaPath!"</span>
              </div>
              <div>
                <span className="line">5</span> &nbsp;&nbsp;&nbsp;&nbsp;);
              </div>
              <div>
                <span className="line">6</span> &nbsp;&nbsp;{"}"}
              </div>
              <div>
                <span className="line">7</span> {"}"}
              </div>
            </div>

            <div className="code-output">
              <span>▶ OUTPUT</span>
              <p>Hello, JavaPath!</p>
              <span className="success-text">
                ✓ Program executed successfully
              </span>
            </div>
          </div>
        </section>

        <section className="topics-section" id="topics">
          <div className="section-top">
            <div>
              <span className="section-label">LEARN BY TOPIC</span>
              <h2>Explore Java Learning</h2>
              <p>Everything you need to learn, practice and prepare.</p>
            </div>
            <span className="topic-count">
              {filteredTopics.length} topics
            </span>
          </div>

          <input
            className="search-input"
            type="search"
            placeholder="⌕  Search Java, Spring Boot, coding..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            aria-label="Search homepage topics"
          />

          <div className="filter-list">
            {filters.map((filter) => (
              <button
                key={filter}
                className={
                  activeFilter === filter
                    ? "filter-button active"
                    : "filter-button"
                }
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="topic-grid">
            {filteredTopics.map((topic) => (
              <article className="topic-card" key={topic.title}>
                <div className="card-top">
                  <div className="topic-icon">{topic.icon}</div>
                  <span className="level-tag">{topic.level}</span>
                </div>

                <span className="topic-category">{topic.category}</span>
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>

                <button
                  className="topic-open-button"
                  onClick={() =>
                    openNotes(
                      topic.title === "Core Java"
                        ? "Java"
                        : topic.title === "Java 8 Streams"
                          ? "Stream"
                          : topic.title === "SQL & Database"
                            ? "SQL"
                            : topic.title === "Multithreading"
                              ? "Multithreading"
                              : topic.title === "Spring Boot"
                                ? "Spring Boot"
                                : topic.title === "Microservices"
                                  ? "Microservices"
                                  : topic.title === "OOP Concepts"
                                    ? "OOP"
                                    : topic.title === "Interview Questions"
                                      ? "Interview"
                                      : topic.title
                    )
                  }
                >
                  Explore topic <span>→</span>
                </button>
              </article>
            ))}
          </div>

          {filteredTopics.length === 0 && (
            <div className="no-results">
              <span>🔎</span>
              <h3>No topics found</h3>
              <p>Try another search or select a different category.</p>
              <button
                className="button-primary"
                onClick={() => {
                  setSearch("");
                  setActiveFilter("All");
                }}
              >
                Clear filters
              </button>
            </div>
          )}
        </section>

        <section className="bottom-banner">
          <div>
            <span className="section-label">YOUR NEXT STEP</span>
            <h2>Practice today. Crack your next interview.</h2>
            <p>Build your Java skills one concept at a time.</p>
          </div>
          <button
            className="button-primary"
            onClick={() => openNotes()}
          >
            Start Learning <span>→</span>
          </button>
        </section>

        {/* About the Author */}
        <section className="about-author" id="about-author">
          <div className="author-heading">
            <span className="author-label">MEET THE CREATOR</span>
            <h2>About the Author</h2>
            <p>The person behind your Java learning journey.</p>
          </div>

          <div className="author-card">
            <div className="author-photo">
             <img
  src={`${import.meta.env.BASE_URL}author.jpg`}
  alt="Manjunath Goni, creator of JavaPath"
  style={{ width: "100%", height: "100%", objectFit: "cover" }}
  onError={(event) => {
    console.error("Author photo failed to load:", event.currentTarget.src);
    event.currentTarget.style.display = "none";
    event.currentTarget.nextElementSibling.style.display = "flex";
  }}
/>

              
              <span className="author-initials">M</span>
            </div>

            <div className="author-info">
              <span className="author-role">
                JAVA FULL-STACK DEVELOPER
              </span>

              <h3>Manjunath Goni</h3>

              <p className="author-bio">
                Welcome to JavaPath! I'm passionate about Java development
                and helping developers improve their programming skills.
                I created this platform to explain Java concepts, coding
                examples, Spring Boot, microservices, and interview
                questions in simple, easy-to-understand language.
              </p>

              <div className="author-skills">
                <span>Core Java</span>
                <span>Spring Boot</span>
                <span>Microservices</span>
                <span>React</span>
                <span>Kafka</span>
              </div>

              <p className="author-motto">
                "Learn step by step. Practice every day. Grow with confidence."
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#home">
          <span className="brand-logo">J</span>
          <span>
            Java<span className="brand-highlight">Path</span>
          </span>
        </a>
        <p>Learn. Practice. Prepare. Grow.</p>
        <span>© {new Date().getFullYear()} JavaPath</span>
      </footer>
    </div>
  );
}

export default App;
