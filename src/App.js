import Header from "./components/Header";
import { Route, Routes, Link } from "react-router-dom";
import Themas from "./components/Themas";
import navNames from "./docs/docs";



function App() {

  return (
    <div className="App">
      <Header />
      <div className="content">
        <nav className="nav">
          {navNames.map((item) => {
            return <Link className="side_theme" to={"/" + item.id}>{item.name}</Link>;
          })}
        </nav>

        <Routes>
          {navNames.map((item) => {
            return (
              <>
                <Route path={"/" + item.id} element={<Themas 
                id={item.id}
                name={item.name}
                vid={item.video}
                question={item.question}
                imageSource={item.img}
                text={item.text}
                answers={item.answers}
                answerTrue={item.answerTrue}
                />}
                />
              </>
            );
          })}
        </Routes>
      </div>
    </div>
  );
}

export default App;
