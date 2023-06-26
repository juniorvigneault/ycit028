import React from 'react';

function Hello({ name = "Junior" }) {
    return <h1>Hello, {name}!</h1>;
}

export default Hello;
