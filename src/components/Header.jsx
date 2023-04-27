import logo from "../../public/Troll_Face.svg";

export default function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Troll Face" />
      <h1>Meme Generator</h1>
      <p>React & Vite</p>
    </div>
  );
}
