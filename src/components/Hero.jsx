import { logo } from "../assets";
const Hero = () => {
  return (
    <header className="w-full justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="logo" className="w-28 object-contain" />
        <div className="flex justify-evenly items-center gap-6 md:gap-10">
          
        <button type="button" onClick={()=> window.open("https://github.com/mohdali03")}
        className="black_btn"
        >Github</button>
        <button type="button" onClick={()=> window.open("https://www.linkedin.com/in/mohd-ali-asgar-shaikh-875456243/")}
        className="blue_btn"
        >linkedin</button>
        </div>

      </nav>
      <h1 className="head_text">
       
        <span className="orange_gradient">
        AI Artice Summarization
        </span> <br className="max-md:hidden"/>
        : Simplifying Complex Content
      </h1>
      <h2 className="desc">
      Simplify intricate content with our AI Text Summarization tool. Get concise, easy-to-grasp summaries of complex articles using cutting-edge technology. Streamline your reading experience today
      </h2>
    </header>
  )
}

export default Hero