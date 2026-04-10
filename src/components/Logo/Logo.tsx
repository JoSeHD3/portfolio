import { LightBeam } from '../ui';

const Logo = () => {
    return (
        <div className="relative w-12 h-12 flex items-center justify-center overflow-visible">
            <LightBeam
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70"
                width={80}
                height={50}
                angle={0}
                blur={10}
                opacity={0.98}
            />
            <svg
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                className="relative z-10 w-24 h-24"
            >
                <polygon
                    points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5"
                    fill="none"
                    stroke="#0DAD8D"
                    strokeWidth="2"
                />
                <text
                    x="50"
                    y="78"
                    textAnchor="middle"
                    fill="#0DAD8D"
                    fontSize="80"
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
