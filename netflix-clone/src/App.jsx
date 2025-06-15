import './App.css'
import Reused from './Reused'

function App() {
  

  return (
    
     <div id="backimg">
        <div className="background">
            <div className="navbar">
                <img src="assets/logo.png" alt="netflix logo" className="logo"/>
                <select name="language" id="language">
                    <option>English</option>
                    <option>Hindi</option>
                    <option>Tamil</option>
                </select>
                <button className="signin">Sign In</button>
                

    </div>
    <div className="main">
                <h1>Unlimited movies, TV<br/> shows and more</h1>
                <p>Starts at ₹149. Cancel at any time.</p>
                <Reused/>
                </div>
    
</div>
</div>
      
   
  )
}

export default App;