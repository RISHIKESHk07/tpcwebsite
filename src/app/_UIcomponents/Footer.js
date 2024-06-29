import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
	faGithub,
	faInstagram,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
	return (
		<div className="w-full flex justify-center py-4">
			<div className="flex justify-between w-full px-8 sm:w-1/2">
				<a
					href="https://www.instagram.com/bitbyte.tpc/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon icon={faInstagram} className="h-6 w-6 text-white" />
				</a>
				<a href="mailto:theprogclub@iiitdmj.ac.in">
					<FontAwesomeIcon icon={faEnvelope} className="h-6 w-6 text-white" />
				</a>
				<a
					href="https://in.linkedin.com/company/bitbyte-tpc"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon icon={faLinkedin} className="h-6 w-6 text-white" />
				</a>
				<a
					href="https://github.com/BitByte-TPC"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon icon={faGithub} className="h-6 w-6 text-white" />
				</a>
			</div>
		</div>
	);
};

export default Footer;
