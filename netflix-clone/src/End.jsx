
import './App.css'
function End() {


    function toggleAnswer(element){
  const answer = element.nextElementSibling;
  const isVisible = answer.style.display === "block";
  answer.style.display = isVisible ? "none" : "block";
}


    return (
    <>
    <div className="reason">
        <div className="subtitle"><h3>More Reasons To Join</h3></div>
        <div className="rcs">
        <div className="r1">
            <h4>Enjoy on your TV</h4>
            <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
        </div>
        <div className="r1">
            <h4>Download your shows to watch offline</h4>
            <p>Save your favourites easily and always have something to watch.</p>
        </div>
        <div className="r1">
            <h4>Watch everywhere</h4>
            <p>Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.</p>

        </div> 
        <div className="r1">
            <h4>Create profiles for kids</h4>
            <p>Send kids on adventures with their favourite characters in a space made just for them — free with your membership.</p>

        </div>
        </div>

    </div>
    <div className="faq">
        <h3>Frequently Asked Questions</h3>
        <div className="faq-question">
            <div onClick={(e) => toggleAnswer(e.target)}>What is Netflix? </div>
            <div className="answer">Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
                You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</div>
            <div onClick={(e) => toggleAnswer(e.target)}>How much Does Netflix cost?</div>
            <div className="answer">Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.</div>
            <div onClick={(e) => toggleAnswer(e.target)}>Where can I watch?</div>
            <div className="answer">Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere</div>
            <div onClick={(e) => toggleAnswer(e.target)}>How do I Cancel?</div>
            <div className="answer">Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime</div>
            <div onClick={(e) => toggleAnswer(e.target)}>What Can I Watch On Netflix?</div>
            <div className="answer">Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want</div>
            <div onClick={(e) => toggleAnswer(e.target)}>Is Netflix good for kids?</div>
            <div className="answer">The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
                Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</div>
        </div>
    </div>
    </>
    )
} 
  

export default End;