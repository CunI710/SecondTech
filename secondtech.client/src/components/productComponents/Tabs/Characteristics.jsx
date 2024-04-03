import React from 'react';

const Characteristics = ({ item }) => {
  return (
    <div>
      {item.length !== 0 ? (
        item.characteristics.map((item) => (
          <div key={item.id} className="flex justify-between  border-b-2 py-4">
            <p>{item.name}</p>
            <p>{item.value}</p>
          </div>
        ))
      ) : (
        <p>Загружаю данные</p>
      )}
    </div>
  );
};

export default Characteristics;
