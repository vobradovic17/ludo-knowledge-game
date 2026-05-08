import QuestionModal from "../question/QuestionModal";
import FigureWrapper from "./FigureWrapper";

export default function GameWrapper() {
    return (
      <div className="lkg-board">
        <QuestionModal />
        <FigureWrapper />
      </div>
    );
}