import React from "react";
import './Project2.css';

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


   return (
      <>
         <div className="description">
            <h1>Counter</h1>
         </div>

         <dir></dir>
               
            
         <div className="link-to-code">
            <a href="https://css.in.ua/html/tag/a/target" target="_blanc" >view code</a>
         </div>
         {/* <hr />
         <hr />

         <div>
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
   )
}
