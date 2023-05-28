import React, { createRef, useEffect} from "react";

function Themas({ id, name, question, imageSource, text, answers, answerTrue, vid }) {

  const answrBlock = createRef();


  const checkAnsw = (e) => {

    let childs = Array.from(answrBlock.current.childNodes);
    childs.map(item => {
      item.style.background = 'gray';
    });
    if(e.target.classList.contains('answer') && e.target.dataset.trueansw == 'true'){
      e.target.style.background = 'green';
      setTimeout(()=> {
        e.target.style.background = 'gray';
      },2000)
    }else if (e.target.classList.contains('answer') && e.target.dataset.trueansw == 'false'){
      e.target.style.background = 'red';
      setTimeout(()=> {
        e.target.style.background = 'gray';
      },2000)
    }
  }

  const theor = createRef()
  useEffect(() => {
    theor.current.innerHTML = text
  }, [text])
  return (
    <div className="themas">
      <h1>{name}</h1>
      <div className="theory" ref={theor}></div>
      <div className="test">
        <div className="question">{question}</div>
        <img src={require(`../testImages/${imageSource}`)} alt="" />
        <div className="answers_block" ref={answrBlock} onClick={checkAnsw}>
          {
            answers.map((answer, index) => {
              
              return( 
                <div className="answer" data-trueAnsw={answerTrue === index + 1? true: false}>{answer}</div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Themas;
