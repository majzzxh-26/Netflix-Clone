import Reused from './Reused.jsx'
import './App.css'

function Footer() {
    return (
        <>
        <div className="redd">
         <Reused/>
         </div>
            
        
<footer className="footer">
    <div className="finale">
            <div className="f111">Questions? Call 00000000</div>
            <div className="links">
            <div className="link1">
                <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Investor relations</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Speed Test</a></li>
                </ul>
                </div>
                <div className="link1">
                <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Cookie Preferences</a></li>
                <li><a href="#">Legal Notices</a></li>
                </ul>
                </div>
                <div className="link1">
                <ul>
                <li><a href="#">Account</a></li>
                <li><a href="#">Ways to Watch</a></li>
                <li><a href="#">Corporate information</a></li>
                <li><a href="#">Only on Netflix</a></li>
                </ul>
                </div>
                <div className="link1">
                <ul>
                <li><a href="#">Media center</a></li>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Contact us</a></li>
                </ul>
                </div>
            </div>
        </div>
    </footer>
    <div className="l">
    <select name="language" id="language">
                    <option>English</option>
                    <option>Hindi</option>
                    <option>Tamil</option>
                </select>
                <p>Netflix Clone Website used only For Study Purpose</p>
                
                </div>

        </>
    )
}

export default Footer