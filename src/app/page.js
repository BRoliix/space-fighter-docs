import Link from "next/link";

const steps = [
  {
    title: "1. Create a React App",
    command: "npx create-react-app my-app",
    description:
      "This command initializes a new React application with a default setup. We're using the `create-react-app` tool to quickly scaffold a React project with essential configurations pre-built.",
  },
  {
    title: "2. Navigate to Your App",
    command: "cd my-app",
    description:
      "Move into the directory of your new React app. This is where all your project files are located.",
  },
  {
    title: "3. Install React Router",
    command: "npm install react-router-dom --save",
    description:
      "React Router enables navigation and routing in your React application. It allows you to create multi-page experiences in a single-page application by managing different views and URL patterns.",
  },
  {
    title: "4. Install Jotai",
    command: "npm install jotai",
    description:
      "Jotai is a state management library that simplifies managing React application state. It provides a minimalistic API and is perfect for applications where you need simple and efficient state management.",
  },
  {
    title: "5. Install Tailwind CSS",
    command: "npm install -D tailwindcss postcss autoprefixer",
    description:
      "Tailwind CSS is a utility-first CSS framework for building custom designs. This step installs the necessary dependencies to start using Tailwind.",
  },
  {
    title: "6. Initialize Tailwind CSS",
    command: "npx tailwindcss init",
    description:
      "This command generates a `tailwind.config.js` file where you can customize your Tailwind CSS setup.",
  },
  {
    title: "7. Install Development Dependencies",
    command: "npm install ajv@8.16.0 ajv-keywords@5.1.0 schema-utils@4.2.0 --save-dev",
    description:
      "These packages are essential development tools: Ajv is a JSON Schema validator for data validation, ajv-keywords adds custom keywords support, and schema-utils provides webpack schema validation. Together they ensure proper data validation and schema handling during development.",
  },
];

export default function LetsGetStarted() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gdgBlue mb-4">
          Let's Get Started
        </h1>
        <p className="text-lg text-gray-300">
          Follow these simple steps to set up your React application with the
          required libraries and tools.
        </p>
      </header>
      <main className="max-w-3xl mx-auto space-y-8">
        {steps.map((step, index) => (
          <section
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1"
          >
            <h2 className="text-2xl font-bold text-gdgGreen mb-3">
              {step.title}
            </h2>
            <pre className="bg-gray-900 text-white p-4 rounded mb-3 overflow-auto">
              <code>{step.command}</code>
            </pre>
            <p className="text-gray-300">{step.description}</p>
          </section>
        ))}
        <div className="text-center">
          <Link
            href="/landing"
            className="inline-block bg-gdgBlue text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700"
          >
            See Codes
          </Link>
        </div>
      </main>
    </div>
  );
}
