import { useFlag } from '@store';
import { Flag } from './Flag';

const FlagButton = () => {
    const flagName = useFlag((state) => state.flagName);
    const switchFlagName = useFlag((state) => state.switchFlagName);

    return (
        <button onClick={switchFlagName}>
            <Flag flag={flagName} />
        </button>
    );
};

export { FlagButton };
