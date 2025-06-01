
import './App.css'


function Middle (){ 

    function scrollRow(direction){
            const container=document.getElementById("card-row");
            const scrollAmount=200;
        container.scrollBy({left: scrollAmount* direction,behaviour:'smooth'});
        }
   

  return (
    <div className="container">
      <div className="title"><h3>Trending Now</h3></div>
      <div className="scroll-container ">
        <button className="scroll-button scroll-left" 
        onClick={()=>scrollRow(-1)}>&#10094;</button>
      
        <div className="card-row" 
        id="card-row">
            <div className="card" >
                <img src="src/assets/ajith.jpg"/>
            </div>
             <div className="card">
                <img src="src/assets/VJ.jpg"/>
            </div>
             <div className="card">
                <img src="src/assets/animal.jpg"/>
            </div>
             <div className="card">
                <img src="src/assets/alpha.jpg"/>
            </div>
             <div className="card">
                <img src="src/assets/lucifer.jpg"/>
            </div>
             <div className="card">
                <img src="src/assets/twister.jpg"/>
            </div>
             <div className="card">
                <img src="src/assets/st.jpg"/>
            </div>
             <div className="card">
                <img src="src/assets/gift.jpg"/>
            </div>
             <div className="card">
                <img src="src/assets/relevations.jpg"/>
            </div>
             <div className="card">
                <img src="src/assets/sirens.jpg"/>
            </div>
            <button className="scroll-button 
            scroll-right" 
            onClick={()=>scrollRow(1)}>&#10095;</button>
            </div>
                
        </div>

      </div>
      
    
  )
}

export default Middle