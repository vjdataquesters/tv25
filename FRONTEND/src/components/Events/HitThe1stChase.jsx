import "./Events.css";
import img1 from "../../assets/HitThe1stChase/img1.png";
import img2 from "../../assets/HitThe1stChase/img2.png";
import img3 from "../../assets/HitThe1stChase/img3.png";
export default function HitThe1stChase() {
    const images = [img1,img2,img3];
    return(
        <div className="events">
      <div className="event-div">
        <h1>HIT - THE 1ST CHASE </h1>
        <p><span className="bold">Date:</span> 11-02-2023</p>
        <p><span className="bold">Venue:</span> online</p>
        <p><span className="bold">Timings:</span> 3:00 pm - 4:00 pm </p>
        <h3>Pics of the event</h3>
        <div className="gallery">
          <div className="slider">
            <div className="slides" >
              {images.map((img, index) => (
                <div key={index}>
                  <img id={"slide-" + (index + 1)} src={img} alt="VJ DATA QUESTERS HIT THE FIRST CHASE" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <h3>Winners:</h3>
        <p>1st,2nd and 3rd are awarded with cash prize of 700,500,300 respectively.</p>
        <ul>
            <li>WINNER- Shruthika Sunku (CSE-AIML)</li>
            <li>1st RUNNER UP- G.Tanishq (CSE-CYS)</li>
            <li>2nd RUNNER UP- Rishith Kumar Reddy(CSE-AIML)</li>
        </ul>

        <h3> Outcome:</h3>
        <p>
        Through this event we made our juniors to solve problems on reasoning, aptitude, puzzles and  technical questions. We first released a clue in our official Instagram page based on that they  are directed to the next clue which is another Instagram page. These clues are provided in the  form of questions or puzzles. In this process they may have loops and redirections according to  the map. The first person who reaches the destination is the winner of the game. We got total of  
        </p>
      </div>
    </div>
    )}