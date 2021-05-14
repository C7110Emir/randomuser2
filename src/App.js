import Wholepage from "./components/wholepage"
import style from"./App.module.css"
import cw from "./components/images/cw.svg"

function App() {
  return (
    <div className={style.app}>
      <header className={style.imagediv}>
        <img src={cw} alt="logo" className={style.image}/>
      </header>
      <content>
      <Wholepage></Wholepage>
      </content>
      
    </div>
  );
}

export default App;
