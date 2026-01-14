import { useRef } from "react";

export default function Input({ playerWordInput, handlePlayerWordInput, handleCheck }) {
    const eventTriggered = useRef(false);

    function handleEnterKey(event) {
      if (event.key == 'Enter' && !eventTriggered.current) {
        eventTriggered.current = true;
        handleCheck();
        setTimeout(() => {
          eventTriggered.current = false;
        }, 1200);
      }
    }

    return (
      <div className="lkg-dialog__input">
        <input
          type="text"
          value={playerWordInput}
          onChange={handlePlayerWordInput}
          onKeyDown={handleEnterKey}
        />
      </div>
    );
}