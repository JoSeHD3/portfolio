const Flag = ({ flag }: { flag: string }) => {
    switch (flag) {
        case 'gb':
            return (
                <img
                    src="https://flagcdn.com/w40/gb.png"
                    alt="UK Flag"
                    className="h-6"
                />
            );
        case 'pl':
            return (
                <img
                    src="https://flagcdn.com/w40/pl.png"
                    alt="PL Flag"
                    className="h-6"
                />
            );
        default:
            return;
    }
};

export { Flag };
