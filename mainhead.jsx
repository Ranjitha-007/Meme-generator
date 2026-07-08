import React from "react"
export default function Main() {
    const[meme,setmeme]=React.useState({
      topText:"One does not simply",
      bottomText:"Walk into Morder",
      imageUrl:"https://i.imgflip.com/1bij.jpg"
    })
    const[allMemes,setAllMemes]=React.useState([])
    function handleChange(event){
      const {value,name}=event.currentTarget
      setmeme(prevMeme=>({
        ...prevMeme,
        [name]:value
      }))
    }
    React.useEffect(()=>{
      fetch("https://api.imgflip.com/get_memes")
        .then(res=>res.json())
        .then(data=>setAllMemes(data.data.memes))
    },[])
    function getMemeImage(){
      const randomNumber=Math.floor(Math.random()*allMemes.length)
      const newurl=allMemes[randomNumber].url
      setmeme(prevMeme=>({
        ...prevMeme,
        imageUrl:newurl
      }))
    }
    return (
        <main style={{ padding: "20px", textAlign: "center" }}>
            <form>
              <div className="form-group">
                <div className="field">
                    <label htmlFor="toptext" className="label">
                      Top Text:</label>
                    <input type="text" id="toptext" className="textbox" name="topText" onChange={handleChange} />
                    <br />
                </div>

              <div className="field">
                <label htmlFor="bottomtext" className="label">
                  Bottom Text:</label>
                <input type="text" id="bottomtext" className="textbox" name="bottomText" onChange={handleChange} />
                <br />
              </div>
              </div>
              <button type="button" className="button" onClick={getMemeImage}>Get a new meme image</button>
            </form>
              <div className="meme">
                <img src={meme.imageUrl} className="meme--image" alt="Meme template" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
              </div>
        </main>
    )
}