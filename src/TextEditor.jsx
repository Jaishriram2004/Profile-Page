import React, { useState, useRef, useEffect } from 'react';
import './TextEditor.css'; // See CSS below!

export default function TextEditor() {
  const [text, setText] = useState('');
  const [lineCount, setLineCount] = useState(1);
  const [currentLine, setCurrentLine] = useState(1);
  const textareaRef = useRef(null);
  const lineNumbersRef = useRef(null);
  const highlightRef = useRef(null);

  // Update line numbers when text changes
  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
    setLineCount(value.split('\n').length);
    updateCurrentLine(e);
  };

  // Sync scrolling
  const handleScroll = () => {
    const scrollTop = textareaRef.current.scrollTop;
    lineNumbersRef.current.scrollTop = scrollTop;
    highlightRef.current.scrollTop = scrollTop;
  };

  // Get current line from caret position
  const updateCurrentLine = (e) => {
    const pos = e.target.selectionStart;
    const untilCaret = text.slice(0, pos);
    const line = untilCaret.split('\n').length;
    setCurrentLine(line);
  };

  // Jump to specific line
  const jumpToLine = () => {
    const line = parseInt(document.getElementById('jumpInput').value, 10);
    if (isNaN(line) || line < 1 || line > lineCount) {
      alert('Invalid line number.');
      return;
    }
    const lines = text.split('\n');
    let pos = 0;
    for (let i = 0; i < line - 1 && i < lines.length; i++) {
      pos += lines[i].length + 1; // +1 for newline
    }
    textareaRef.current.focus();
    textareaRef.current.setSelectionRange(pos, pos);
    setCurrentLine(line);
  };

  useEffect(() => {
    setLineCount(text.split('\n').length || 1);
  }, [text]);

  return (
    <div className="editor-wrapper">
      <div className="editor-container">
        {/* Line Numbers */}
        <pre ref={lineNumbersRef} className="line-numbers">
          {[...Array(lineCount)].map((_, i) => (
            <div
              key={i}
              className={currentLine === i + 1 ? 'active-line-number' : ''}
            >
              {i + 1}
            </div>
          ))}
        </pre>

        {/* Highlight Layer */}
        <pre ref={highlightRef} className="highlight-layer">
          {text.split('\n').map((line, i) => (
            <div
              key={i}
              className={currentLine === i + 1 ? 'highlight-line' : ''}
            >
              {line || '\u00A0'}
            </div>
          ))}
        </pre>

        {/* Textarea */}
        <textarea
          ref={textareaRef}
          value={text}
          onChange={handleChange}
          onClick={updateCurrentLine}
          onKeyUp={updateCurrentLine}
          onScroll={handleScroll}
          className="editor-textarea"
          spellCheck="false"
        />
      </div>

      <div className="jump-box">
        <input
          id="jumpInput"
          type="number"
          min="1"
          placeholder="Line #"
        />
        <button onClick={jumpToLine}>Jump</button>
      </div>
    </div>
  );
}
