const Header = () => {
    return (
        <header
            className="flex flex-col container mx-auto mt-20 mb-80 px-4"
            id="header"
        >
            <span className="semibold text-[#0DAD8D] mb-4">Hi, my name is</span>
            <h1 className="bold text-[#CFCFCF] text-6xl mb-4">
                Sebastian Bożek.
            </h1>
            <h2 className="bold text-4xl mb-8">
                I am designing and creating apps.
            </h2>
            <span className="semibold w-100">
                I am a software engineering graduate and I am passionate about
                creating applications that can be useful for everyone! Currently
                I am looking for new opportunities and challenges, still
                developing my skills, focusing on React and Next.js.
            </span>
        </header>
    );
};

export { Header };
