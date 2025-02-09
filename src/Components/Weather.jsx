import React from 'react';

const Weather = ({ props }) => {
    const temperature = props;
    return (
        <div>
            {temperature < 15 ? (
                <h1>It's Cool Outside</h1>
            ) : temperature > 15 && temperature < 25 ? (
                <h1>It's Nice Outside</h1>
            ) : (
                <h1>It's Hot Outside</h1>
            )}
        </div>
    );
};

export default Weather;
