import React, { useState, useEffect } from "react";
import Navbar from "./comps/navbar";
import "../public/static/css/post.scss";

const Post = () => {
  const [docName, setDocName] = useState("Untitled Document");
  const [selectedObj, setSelectedObj] = useState({
      start: 0,
      end: 0,
      content: ""
  });

  const handleDocNameChange = e => {
    setDocName(e.target.value);
  };

  const highlightDocName = e => {
    e.target.select();
  };

  // Set "anchors" around selected text
  // Count number of instances before last index of selection, use the last one

  const getSelection = e => {
    let text = e.target.value;
    let selectedText = window.getSelection().toString(); 
    
    if (text !== "" && selectedText !== "") {
      let selection = window.getSelection();
      let selStart = e.target.selectionStart;
      let selEnd = e.target.selectionEnd

      let regexText = new RegExp(selectedText, "g");
      let regMatch = text.match(regexText);

      console.log(selStart)
      console.log(selEnd)
      console.log(selection);
      console.log(regMatch);

      setSelectedObj({
        start: selStart,
        end: selEnd,
        content: selectedText
      })
    }
  };

  return (
    <div className="postMother">
      <Navbar />
      <div className="postMain">
        <div className="editOptionsParent">
          <div className="docNameInputDiv">
            <input
              onClick={e => highlightDocName(e)}
              value={docName}
              onChange={e => handleDocNameChange(e)}
              className="docNameInput"
              placeholder="Untitled Document"
            />
          </div>
        </div>
        <div className="postInputParent">
          <textarea
            onMouseUp={e => getSelection(e)}
            placeholder="Begin typing here..."
            minLength="10"
          />
        </div>
      </div>
  <h2>Start: {selectedObj.start}</h2>
  <h2>End: {selectedObj.end}</h2>
  <h3>Text: {selectedObj.content}</h3>
    </div>
  );
};

export default Post;
