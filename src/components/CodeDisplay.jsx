import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeDisplay = ({ title, code, explanation, language = "javascript" }) => (
  <div className="my-6 p-6 bg-gray-800 text-white rounded-lg shadow-lg">
    {/* Title */}
    {title && <h2 className="text-2xl font-bold text-gdgGreen mb-4">{title}</h2>}
    
    {/* Code Block */}
    <div className="bg-gray-900 rounded-lg p-4 shadow-inner">
      <SyntaxHighlighter language={language} style={docco}>
        {code}
      </SyntaxHighlighter>
    </div>
     
    {explanation && <p className="mt-4 text-gray-300">{explanation}</p>}
  </div>
);

export default CodeDisplay;
