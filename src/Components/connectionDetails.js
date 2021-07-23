import { FiLinkedin, FiTwitter,FiGithub } from "react-icons/fi";
// FiLinkedin, FiTwitter,FiGithub

const ConnectinDetails = () => {
    return ( 
        <div className="conn-details col">
            <div className="icon-cont col">
                <a href="https://www.linkedin.com/in/mimansha-swarup" target="_blank" rel="noopener noreferrer">
            <FiLinkedin className="conn-icons"/>
                </a>
                <a href="https://twitter.com/SwarupMimansha" target="_blank" rel="noopener noreferrer">
            <FiTwitter className="conn-icons"/>
                </a>
                <a href="https://github.com/mimansha-swarup" target="_blank" rel="noopener noreferrer">
            <FiGithub className="conn-icons"/>
            </a>
            </div>
            <hr className="vertical-hr" />
        </div>
     );
}
 
export default ConnectinDetails;