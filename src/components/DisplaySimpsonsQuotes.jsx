import React from 'react';

function DisplaySimpsonsQuotes({simpson}) {
    return (
        <div className='DisplaySimpsonsQuotes'>
            <p>{simpson.quote}</p>
            <p>{simpson.character}</p>
            <img src={simpson.image} alt={simpson.character} />
        </div>
    );
}

export default DisplaySimpsonsQuotes;
