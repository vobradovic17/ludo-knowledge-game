export default function Input({ playerWordInput, handlePlayerWordInput, handleCheck }) {
    function handleEnterKey(event) {
        if (event.key == 'Enter') {
            handleCheck();
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