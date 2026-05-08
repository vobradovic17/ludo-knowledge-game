import DiceButton from "./DiceButton";
import DiceImage from "./DiceImage"

export default function DiceBoard() {
  return (
    <div className="lkg-diceboard">
      <DiceButton/>
      <span className="lkg-diceboard__dice">
        <DiceImage/>
      </span>
    </div>
  );
}