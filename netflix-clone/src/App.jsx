import './App.css'

function App() {
  

  return (
    
      <div id="backimg">
        <div className="background">
            <div className="navbar">
                <img src="src\assets\logo.png" alt="netflix logo" className="logo"/>
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
                <form className="email">
                    <h3>Ready to watch? Enter your email to create or restart your membership</h3>
                <div className="form">
                    <div>
                        <input type="text"   id="email"/>
                        <label htmlFor="email">Email Address</label>
                    </div>
                    <button className="getstarted">Get Started </button>
                </div>
                </form>
            </div>
            
        </div>

    </div>
      
   
  )
}

export default App;