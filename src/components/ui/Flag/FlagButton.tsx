import { useState } from 'react';
import { Flag } from './Flag';

const FlagButton = () => {
    const [flagName, setFlagName] = useState<string>('gb');

    return (
        <button onClick={() => setFlagName(flagName === 'gb' ? 'pl' : 'gb')}>
            <Flag flag={flagName} />
        </button>
    );
};

export { FlagButton };
