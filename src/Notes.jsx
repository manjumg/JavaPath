
import { useState } from "react";
import "./Notes.css";

const topics = [
  {
    id: 1,
    category: "Core Java",
    title: "Introduction to Java",
    level: "Beginner",
    description:
      "Learn what Java is, how it works, and why it is platform independent.",
    theory: [
      "Java is a high-level, object-oriented programming language.",
      "Java source code is compiled into bytecode.",
      "The JVM executes bytecode on supported platforms.",
      "JDK includes development tools, while JRE traditionally provides the runtime environment."
    ],
    code: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}`,
    memory: "JDK = Development tools | JVM = Executes bytecode"
  },
  {
    id: 2,
    category: "OOP",
    title: "OOP Concepts",
    level: "Beginner",
    description:
      "Understand encapsulation, inheritance, polymorphism, and abstraction.",
    theory: [
      "Encapsulation combines data and methods in a class and controls access to data.",
      "Inheritance allows a class to reuse or extend another class's behavior.",
      "Polymorphism allows one interface or parent type to represent different implementations.",
      "Abstraction hides implementation details and exposes essential behavior."
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
}`,
    memory: "OOP = Encapsulation + Inheritance + Polymorphism + Abstraction"
  },
  {
    id: 3,
    category: "Collections",
    title: "ArrayList",
    level: "Intermediate",
    description:
      "Learn how ArrayList stores and manages a resizable collection of elements.",
    theory: [
      "ArrayList is part of the Java Collections Framework.",
      "It maintains insertion order and allows duplicate elements.",
      "It supports indexed access to elements.",
      "It is not synchronized by default."
    ],
    code: `import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> names = new ArrayList<>();
        names.add("Java");
        names.add("Spring Boot");

        System.out.println(names);
    }
}`,
    memory: "ArrayList = Resizable array + insertion order + duplicates allowed"
  },
  {
    id: 4,
    category: "Java 8",
    title: "Lambda Expressions",
    level: "Intermediate",
    description:
      "Write concise implementations of functional interfaces using lambdas.",
    theory: [
      "A lambda expression provides an implementation of a functional interface.",
      "A functional interface has exactly one abstract method.",
      "Lambdas can reduce boilerplate code.",
      "They are commonly used with collections and streams."
    ],
    code: `Runnable task = () -> {
    System.out.println("Task running");
};

task.run();`,
    memory: "Lambda = Concise implementation of a functional interface"
  },
  {
    id: 5,
    category: "Multithreading",
    title: "Thread Basics",
    level: "Intermediate",
    description:
      "Understand threads and how Java can perform concurrent tasks.",
    theory: [
      "A thread is an independent path of execution within a process.",
      "Threads can execute tasks concurrently.",
      "Shared mutable data may require synchronization.",
      "ExecutorService helps manage groups of tasks and threads."
    ],
    code: `Thread task = new Thread(() -> {
    System.out.println("Running in a thread");
});

task.start();`,
    memory: "start() starts a new thread; run() called directly does not."
  },
  {
    id: 6,
    category: "Spring Boot",
    title: "Spring Boot Introduction",
    level: "Intermediate",
    description:
      "Learn how Spring Boot simplifies the creation of Java applications.",
    theory: [
      "Spring Boot simplifies Spring application configuration.",
      "Auto-configuration configures components based on available dependencies and settings.",
      "Starter dependencies simplify dependency management.",
      "Spring Boot applications can expose REST APIs."
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
    memory: "@RestController handles web requests; @GetMapping maps HTTP GET requests."
  }
];

const categories = [
  "All",
  "Core Java",
  "OOP",
  "Collections",
  "Java 8",
  "Multithreading",
  "Spring Boot"
];

export default function Notes({ onBack }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedTopic, setSelectedTopic] = useState(null);

  const filteredTopics = topics.filter((topic) => {
    const matchesCategory =
      selectedCategory === "All" ||
      topic.category === selectedCategory;

    const searchText =
      `${topic.title} ${topic.description} ${topic.category}`.toLowerCase();

    return matchesCategory && searchText.includes(search.toLowerCase());
  });

  return (
    <div className="notes-page">
      <header className="notes-header">
        <button className="notes-back" onClick={onBack}>
          ← JavaPath Home
        </button>
        <span className="notes-brand">JavaPath / Notes</span>
      </header>

      <section className="notes-hero">
        <span className="notes-eyebrow">YOUR JAVA LEARNING LIBRARY</span>
        <h1>Java Notes & Theory</h1>
        <p>
          Understand concepts, practice with code, and remember
          the important points for your next interview.
        </p>

        <input
          className="notes-search"
          type="search"
          placeholder="Search Java topics..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          aria-label="Search Java topics"
        />
      </section>

      <main className="notes-main">
        <div className="notes-section-heading">
          <div>
            <h2>Explore topics</h2>
            <p>Choose a topic to read its notes and examples.</p>
          </div>
          <span className="notes-count">
            {filteredTopics.length} topics
          </span>
        </div>

        <div className="notes-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={
                selectedCategory === category
                  ? "notes-filter active"
                  : "notes-filter"
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {selectedTopic ? (
          <article className="notes-detail">
            <button
              className="notes-back detail-back"
              onClick={() => setSelectedTopic(null)}
            >
              ← All topics
            </button>

            <span className="notes-topic-category">
              {selectedTopic.category}
            </span>
            <h2>{selectedTopic.title}</h2>
            <p className="notes-description">
              {selectedTopic.description}
            </p>

            <h3>📘 Theory</h3>
            <ul className="notes-theory">
              {selectedTopic.theory.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <h3>💻 Java code example</h3>
            <pre className="notes-code">
              <code>{selectedTopic.code}</code>
            </pre>

            <div className="notes-memory">
              <strong>🧠 Memorize key</strong>
              <p>{selectedTopic.memory}</p>
            </div>

            <button
              className="notes-primary"
              onClick={() => setSelectedTopic(null)}
            >
              Back to topics
            </button>
          </article>
        ) : (
          <div className="notes-grid">
            {filteredTopics.map((topic) => (
              <article className="notes-card" key={topic.id}>
                <div className="notes-card-top">
                  <span className="notes-topic-category">
                    {topic.category}
                  </span>
                  <span className="notes-level">{topic.level}</span>
                </div>

                <h3>{topic.title}</h3>
                <p>{topic.description}</p>

                <button
                  className="notes-read"
                  onClick={() => setSelectedTopic(topic)}
                >
                  Read notes <span>→</span>
                </button>
              </article>
            ))}
          </div>
        )}

        {!selectedTopic && filteredTopics.length === 0 && (
          <div className="notes-empty">
            <h3>No topics found</h3>
            <p>Try another search term or select a different category.</p>
            <button
              className="notes-primary"
              onClick={() => {
                setSearch("");
                setSelectedCategory("All");
              }}
            >
              Show all topics
            </button>
          </div>
        )}
      </main>

      <footer className="notes-footer">
        Keep learning. Keep coding. Keep growing.
      </footer>
    </div>
  );
}
