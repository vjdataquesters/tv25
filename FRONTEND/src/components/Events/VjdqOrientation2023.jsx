import "./Events.css";
import img1 from "../../assets/vjdqOrientation2023/img1.png";
import img2 from "../../assets/vjdqOrientation2023/img2.png";
import img3 from "../../assets/vjdqOrientation2023/img3.png";
import img4 from "../../assets/vjdqOrientation2023/img4.png";
export default function VjdqOrientation2023() {
  const images = [img2, img3, img4,img1];
  return (
    <div className="E1">
      <h1>VJ DATA QUESTERS ORIENTATION 2023</h1>
          {/* <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p> */}
          <p><span className="bold">Date: </span>23-11-2023 </p>
          <p><span className="bold">Venue:</span> APJ AUDITORIUM</p>
          <p><span className="bold">Timings:</span> 9:00 am - 2:00 pm</p>
        <h3>Pics of the event</h3>
        <div className="gallery">
        <div className="slider">
        <div className="slides" >
        {images.map((img, index) => (
        <div key={index}>
            <img id={"slide-"+(index+1)} src={img} alt="VJ DATA QUESTERS ORIENTATION 2023" />
        </div>
        )) }
      </div>
      </div>
      </div>
          <h3> Outcome:</h3>
          <p>
            Through this event we made our juniors to solve problems on
            reasoning, aptitude, puzzles and technical questions. We first
            released a clue in our official Instagram page based on that they
            are directed to the next clue which is another Instagram page. These
            clues are provided in the form of questions or puzzles. In this
            process they may have loops and redirections according to the map.
            The first person who reaches the destination is the winner of the
            game. We got total of 300 registrations and 150 among them are
            participated in the event.
          </p>
    </div>
  );
}
