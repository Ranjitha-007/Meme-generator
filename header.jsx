import memeLogo from "./assets/meme.png";
export default function Header(){
    return(
        <header>
            <img 
            src={memeLogo}
            className="header-img"></img>
            <h1>Meme Generator</h1>
        </header>
    )
}