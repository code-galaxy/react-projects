import React from "react";
import "./Project2.css";

export default function Project2() {
  // const [comment, setComment] = React.useState([]);
  // let commentRef = createRef();
  // let addComment = () => {
  //    let textAreaValue = commentRef.current.value;
  //    console.log(textAreaValue);
  //    let newComment = [...comment, textAreaValue];
  //    setComment(newComment);
  //    commentRef.current.value = '';
  // }

  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div className="description">
        <h1>Modal window </h1>
      </div>

      <div className="Project2-style">
        <button
          onClick={() => setOpen(true)}
          className={`open-modal-btn ${open ? "hidden" : ""}`}
        >
          Open the window
        </button>
        
        {
            open && (
            <div className="overlay">
            <div className="modal">
              <svg onClick = {()=>setOpen(false)} height="20" viewBox="0 0 200 200" width="20">
                <title />
                <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
              </svg>
              <img src="https://media.giphy.com/media/hE7qzzcOwXh5u/giphy.gif" alt ="Earth" />
            </div>
          </div>
          )
         }

       </div>

      <div className="link-to-code">
        <a href="https://css.in.ua/html/tag/a/target" target="_blanc">
          view code
        </a>
      </div>

      {/* <div>
            <textarea ref={commentRef}></textarea>
         </div>
         <div>
            <button onClick={addComment}>Add comment</button>
         </div>
         <div>
            <ul>
               {comment.map((item, index) => 
                  <li key={index.toString()}>{item}</li>
               )}
            </ul>
         </div> */}
    </>
  );
}
