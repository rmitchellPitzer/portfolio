import '../icons.css'
import outerSounds from "../portfolioImages/riebek.png";
import electron from "../portfolioImages/electron.png";
import pollen from "../portfolioImages/pollen.png";
import todo from "../portfolioImages/todo.png";
import start from "../portfolioImages/startStyleTransfer.png";

export default function Cards(){
    return(
        <div>
    <div className="page1pagecardStack" onClick={() => document.getElementById("itemToScrollTo").scrollIntoView({ block: 'end',  behavior: 'smooth' })}></div>
            <div className="page1pageicon" id="icon1">
            <img className="page1pageiconImage" src={outerSounds}></img>
            </div>
            <div className="page1pageicon" id="icon2">
            <img className="page1pageiconImage" src={todo}></img>
            </div>
            <div className="page1pageicon" id="icon3">
                <img className="page1pageiconImage" src={electron}></img>
            </div>
            <div className="page1pageicon" id="icon4">
                <img className="page1pageiconImage" src={pollen}></img>
            </div>
            <div className="page1pageicon" id="icon5">
            <img className="page1pageiconImage" src={start}></img>
            </div>
        </div>);
}