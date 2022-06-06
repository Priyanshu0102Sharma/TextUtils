import React, {useState} from 'react'
// usestate ek hook hota hai ye hm react ke function me use krte hai jisme hme class ki properties use krni ho function mai
export default function TextForm(props) {
  const handleUpClick= ()=>{
    let newText=text.toUpperCase();
    settext(newText);
    props.showAlert("converted to uppercase", "success");
  }
  const handlelowClick= ()=>{
    // console.log("you have clicked on the button");
    let newText=text.toLowerCase();
    settext(newText);
   props.showAlert("convert to lowercase", "success");
  }
  const handleonChange=(event)=>{
    // console.log("onchange updated");
    settext(event.target.value);
  }
  const [text, settext] = useState('');
  return (
    <>
    <div className='container'>
<div className="mb-3">
    <h1>{props.heading}</h1>
  <label htmlFor="exampleFormControlTextarea1" className="form-label" ></label>
  <textarea className="form-control" placeholder='Enter text here'  style={{backgroundColor: props.mode==='light'?'white':'black', color: props.mode==='light'?'black':'white'}} value={text} onChange={handleonChange} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<div className="justify-content-center">
<button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={handleUpClick} >Convert to uppercase</button>
<button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={handlelowClick} >Convert to lowercase</button>
</div>
    </div>
    <div className="container my-2">
      <h2>Your text summary</h2>
      {/* text.split() this function is used to give array after each space bar givern in the paranthesis hue hue heu */}
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters in the text</p>
    </div>
    <div className="container my-1">
    <h3>Preview</h3>
    <p>{text===""?"Write text in the box to preview.":text}</p>
    </div>
</>
  )
}
