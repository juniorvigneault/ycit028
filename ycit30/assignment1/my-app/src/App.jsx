import React from 'react';
import Data from './Data';
import Hello from './Hello';

function Main() {
  const name = Data().name;

  return (
    <main>
      <Hello name={name} />
    </main>
  );
}

export default Main;
