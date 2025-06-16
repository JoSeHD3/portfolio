import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from '@mui/material';

const Contact = () => {
    return (
        <section
            className="w-full container mt-20 mb-10 mx-auto flex flex-row align-middle justify-center"
            id="contact"
        >
            <Link
                href="https://www.linkedin.com/in/sebastianbozek3"
                className="flex justify-center w-1/3"
            >
                <LinkedInIcon fontSize="large" className="text-[#a8a8a8]" />
            </Link>
            <Link
                href="https://github.com/JoSeHD3"
                className="flex justify-center w-1/3"
            >
                <GitHubIcon fontSize="large" className="text-[#a8a8a8]" />
            </Link>
            <Link
                href="mailto:sebastian.bozek3@gmail.com"
                className="flex justify-center w-1/3"
            >
                <MailIcon fontSize="large" className="text-[#a8a8a8]" />
            </Link>
        </section>
    );
};

export { Contact };
