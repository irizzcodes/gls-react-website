import '../css/footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faXTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {

    return (
        <footer id="contact">
            <div className="web-logo">
                <h2>Contact</h2>
                <p>gennrey@gmail.com</p>
                <div className="web-logos">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Alao.is.the.best/">
                        <FontAwesomeIcon className="faIcon" icon={faFacebook} />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/irizzcodes">
                        <FontAwesomeIcon className="faIcon" icon={faGithub} />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://x.com/home">
                        <FontAwesomeIcon className="faIcon" icon={faXTwitter} />
                    </a>
                </div>
            </div>
            <div className="copyright-group">
                <h3>© Copyright 2025 | Genn Rey Alao / Irizzcodes</h3>
                <p>Made with HTML, Vanilla CSS, Javascript, and React</p>
            </div>
        </footer>
    )

}

export default Footer