import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';

const Contact = () => {
    return (
        <section className="w-full container mt-20 mb-20 mx-auto flex flex-row align-middle justify-center">
            <IconButton size="large" className="flex justify-center w-1/3">
                <LinkedInIcon fontSize="large" className="text-[#a8a8a8]" />
            </IconButton>
            <IconButton size="large" className="flex justify-center w-1/3">
                <GitHubIcon fontSize="large" className="text-[#a8a8a8]" />
            </IconButton>
            <IconButton size="large" className="flex justify-center w-1/3">
                <MailIcon fontSize="large" className="text-[#a8a8a8]" />
            </IconButton>
        </section>
    );
};

export { Contact };
