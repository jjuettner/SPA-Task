export type Article = {
  uuid?: string;
  title: string;
  message: string;
  tags: string[];
  deletable: boolean;
  sortIndex: number;
};

export const articles: Article[] = [
  {
    uuid: "article-1",
    title: "Default: JavaScript Basics (with XSS Payload)",
    message: `<p>JavaScript is a powerful programming language that allows you to add interactivity to your web pages. It simplifies the process of building complex user interfaces and allows you to create dynamic web applications. <b>With JavaScript, you can change HTML content, create animations, and much more.</b></p>
            <p>JavaScript is a <b>client-side</b> scripting language, which means it runs on the user's web browser, and not on the server. This makes JavaScript ideal for enhancing the user experience on the web.</p> '"><svg/onload=alert("xss")>`,
    tags: ["javascript", "web", "programming"],
    deletable: true,
    sortIndex: 0,
  },
  {
    uuid: "article-2",
    title: "HTML Basics",
    message: `<p>HTML is the foundation of the web. It provides the structure and layout for web pages. HTML elements define the structure of a web page, and attributes provide additional information. <b>HTML is the language that web browsers understand.</b></p>

            <p>HTML is <b>not a programming language</b>, but a <b>markup language</b>. It is used to describe the structure of a webpage and to define the content of a webpage, including text, images, and videos.</p>`,
    tags: ["html", "web", "programming"],
    deletable: true,
    sortIndex: 1,
  },
  {
    uuid: "article-3",
    title: "CSS Styling Fun",
    message: `<p>CSS is used to control the visual presentation of a web page. It allows you to control the layout, colors, fonts, and much more. CSS is a powerful tool that allows you to create professional-looking web designs with ease. <b>CSS uses the cascading style sheet model, which allows you to specify styles for different elements.</b></p>

            <p>CSS is <b>used to style HTML elements</b>, which are the building blocks of a webpage. CSS can be used to <b>change the appearance of HTML elements</b>, such as their font, color, size, and position.</p>`,
    tags: ["css", "web", "design"],
    deletable: true,
    sortIndex: 5,
  },
  {
    uuid: "article-4",
    title: "React Fundamentals",
    message: `<p>React is a popular JavaScript library for building user interfaces. It simplifies the process of building complex user interfaces and allows you to build performant and scalable applications. <b>React uses a virtual DOM (Document Object Model) to efficiently update the actual DOM.</b></p>

            <p>React is <b>used to create reusable UI components</b>, which can be composed together to build complex user interfaces. React components can also be <b>passed data and event handlers as props</b>.</p>`,
    tags: ["react", "javascript", "web"],
    deletable: true,
    sortIndex: 3,
  },
  {
    uuid: "article-5",
    title: "Node.js at Work",
    message: `<p>Node.js is a JavaScript runtime that allows you to run JavaScript on the server. It allows you to build server-side applications and APIs. Node.js is a powerful tool that allows you to build efficient server-side applications. <b>Node.js uses an event-driven, non-blocking I/O model to handle I/O operations.</b></p>

            <p>Node.js is <b>used to build web servers and APIs</b>, which can be accessed by clients over HTTP or other protocols. Node.js is ideal for building highly scalable and efficient servers.</p>`,
    tags: ["node.js", "javascript", "server"],
    deletable: true,
    sortIndex: 4,
  },
  {
    uuid: "article-6",
    title: "Database Basics",
    message: `<p>Databases are used to store and manage data. With a database, you can easily revert, branch, and merge code. <b>Databases provide a structured way to store and retrieve data.</b></p>

            <p>Databases are <b>used to store data in a structured manner</b>, which makes it easier to retrieve and manipulate data. Databases provide various data types, such as integers, strings, and dates, to store different types of data.</p>`,
    tags: ["database", "sql", "data"],
    deletable: true,
    sortIndex: 2,
  },
  {
    uuid: "article-7",
    title: "Test-Driven Development",
    message: `<p>Test-driven development (TDD) is a software development process that emphasizes writing automated tests before writing the code. TDD helps improve code quality, reduce bugs, and increase productivity. <b>TDD helps ensure that the code is correct, functional, and works as expected.</b></p>

            <p>TDD involves writing tests first to define the expected behavior of the code. Once the tests are written, the code is then <b>implemented to pass the tests</b>. TDD helps in identifying bugs early and ensures that the code is of high quality.</p>`,
    tags: ["testing", "code", "quality"],
    deletable: true,
    sortIndex: 8,
  },
  {
    uuid: "article-8",
    title: "Version Control 101",
    message: `<p>Version control systems (VCS) are used to track changes in code. With Git, you can easily revert, branch, and merge code. <b>Git is a distributed version control system</b>, which means that every developer has a copy of the entire history of the project. This makes it easy to collaborate with others.</p>

            <p>Git is <b>used to manage and track changes to code over time</b>, which makes it easy to revert, branch, and merge code. Git provides a powerful set of commands to manage different branches and merge code.</p>`,
    tags: ["git", "version", "control"],
    deletable: false,
    sortIndex: 7,
  },
  {
    uuid: "article-9",
    title: "Agile Development Methodologies",
    message: `<p>Agile development methodologies (such as Scrum and Kanban) are designed to help teams develop software in a flexible and iterative manner. Agile methodologies help teams work effectively, deliver high-quality software, and respond to changing requirements. <b>Agile methodologies emphasize collaboration, transparency, and flexibility.</b></p>

            <p>Agile methodologies <b>encourage continuous feedback and iteration</b>, which makes it easy to adapt to changing requirements. Agile methodologies also <b>encourage collaboration and teamwork</b>, which makes it easy to deliver high-quality software.</p>`,
    tags: ["agile", "scrum", "kanban"],
    deletable: true,
    sortIndex: 6,
  },
  {
    uuid: "article-10",
    title: "Cloud Computing Basics",
    message: `<p>Cloud computing provides on-demand access to a range of computing resources, including server storage, processing power, and applications. With cloud computing, you can easily scale your applications to meet changing demands. <b>Cloud computing is used to deliver applications and services over the internet.</b></p>

            <p>Cloud computing is <b>used to provide applications and services over the internet</b>, which makes it easy to deliver high-quality software. Cloud computing also <b>makes it easy to scale applications and services to meet changing demands</b>.</p>`,
    tags: ["cloud", "computing", "infrastructure"],
    deletable: true,
    sortIndex: 9,
  },
];
