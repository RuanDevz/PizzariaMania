import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [username, setUsername] = useState('Ruan');


  return (
    <div>
      <h1>Bem vindo a Pizzaria Mania, {username}!</h1>
    </div>
  );
};

export default Dashboard;
