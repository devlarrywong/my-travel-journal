import React from 'react';
import Header from './components/Header';
import Journal from './components/Journal';
import data from './data';

function App() {
  const journalData = data.map((item) => {
    return (
      <Journal
        title={item.title}
        location={item.location}
        googleMapsUrl={item.googleMapsUrl}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        imageUrl={item.imageUrl}
      />
    );
  });
  return (
    <div className="container">
      <Header />
      {journalData}
    </div>
  );
}

export default App;
