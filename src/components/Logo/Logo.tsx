const Logo = () => {
    return (
        <div className="w-12 h-12 flex items-center justify-center">
            <svg
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                className="w-24 h-24"
            >
                <polygon
                    points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5"
                    fill="none"
                    stroke="#0DAD8D"
                    strokeWidth="2"
                />
                <text
                    x="50"
                    y="60"
                    textAnchor="middle"
                    fill="#0DAD8D"
                    fontSize="40"
                    fontWeight="bold"
                    fontFamily="Roboto"
                >
                    S
                </text>
            </svg>
        </div>
    );
};

export { Logo };
