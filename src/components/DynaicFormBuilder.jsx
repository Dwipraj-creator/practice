import React, { useState } from "react";

const DynamicFormBuilder = () => {
  // Stores all questions (array of objects)
  const [questions, setQuestions] = useState([]);

  // Temporary state for new question text
  const [text, setText] = useState("");

  // Temporary state for new question type
  const [type, setType] = useState("text");

  // Handles adding a new question
  const handleSubmit = (e) => {
    e.preventDefault();

    // Prevent empty questions
    if (text.trim() === "") return;

    // Create a new question object
    const newQuestion = {
      id: Date.now(), // unique and stable key
      text,
      type
    };

    // Add question immutably
    setQuestions((prev) => [...prev, newQuestion]);

    // Reset inputs
    setText("");
    setType("text");
  };

  // Removes a question by id
  const deleteQuestion = (id) => {
    // Filter creates a new array without mutating original
    setQuestions((prev) => prev.filter((q) => q.id !== id));
  };

  // Updates text of an existing question
  const updateQuestionText = (id, value) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === id ? { ...q, text: value } : q
      )
    );
  };

  // Updates type of an existing question
  const updateQuestionType = (id, value) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === id ? { ...q, type: value } : q
      )
    );
  };

  return (
    <div>
      <h1>Dynamic Form Builder</h1>

      {/* Form to add a new question */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter question"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="text">Text</option>
          <option value="number">Number</option>
          <option value="email">Email</option>
        </select>

        <button type="submit">Add Question</button>
      </form>

      {/* Editable question list */}
      <ul>
        {questions.map((q) => (
          <li key={q.id}>
            <input
              type="text"
              value={q.text}
              onChange={(e) =>
                updateQuestionText(q.id, e.target.value)
              }
            />

            <select
              value={q.type}
              onChange={(e) =>
                updateQuestionType(q.id, e.target.value)
              }
            >
              <option value="text">Text</option>
              <option value="number">Number</option>
              <option value="email">Email</option>
            </select>

            <button onClick={() => deleteQuestion(q.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>

      {/* Live preview */}
      <h2>Live Preview</h2>
      {questions.map((q) => (
        <div key={q.id}>
          <label>{q.text}</label>
          <input type={q.type} disabled />
        </div>
      ))}
    </div>
  );
};

export default DynamicFormBuilder;
