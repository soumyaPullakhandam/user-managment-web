import {useLocation} from 'react-router';
import React from 'react';

/**
 * @component
 * Component: Not Found Component
 * This component loads when requested component does not exist
 */
const NoMatch = () => {
    let location = useLocation();

    return (
        <div>
            <h3>
                No match for <code>{location.pathname}</code>
            </h3>
        </div>
    );
}
export default NoMatch;
