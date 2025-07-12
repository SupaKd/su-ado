import confetti from "canvas-confetti";

function TestConfetti() {
  const handleClick = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
    });
  };

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h1>Test Confetti</h1>
      <button onClick={handleClick} style={{ fontSize: "20px", padding: "10px 20px" }}>
        Lancer les confettis 🎉
      </button>
    </div>
  );
}

export default TestConfetti;
