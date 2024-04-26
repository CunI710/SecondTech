import React from 'react';

const Characteristics = ({ item }) => {
  const { characteristics, processor, state, ram, packageContents, battery } = item;

  return (
    <div>
      {item.length !== 0 ? (
        <div>
          <div className="flex justify-between  border-b-2 py-4">
            <p>Состояние</p>
            <p>{state}</p>
          </div>
          <div className="flex justify-between  border-b-2 py-4">
            <p>Оперативная память</p>
            <p>{ram}</p>
          </div>
          <div className="flex justify-between  border-b-2 py-4">
            <p>Емкость аккумулятора</p>
            <p>{battery}</p>
          </div>
          <div className="flex justify-between  border-b-2 py-4">
            <p>Процессор</p>
            <p>{processor}</p>
          </div>
          <div className="flex justify-between  border-b-2 py-4">
            <p>Комплектующие</p>
            <div className="flex gap-1">
              {packageContents &&
                packageContents.map((item) => <p key={item.id}>{item.content}, </p>)}
            </div>
          </div>
          {characteristics.map((item, i) => (
            <div key={i} className="flex justify-between  border-b-2 py-4">
              <p>{item.name}</p>
              <p>{item.value}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>loading</p>
      )}
    </div>
  );
};

export default Characteristics;
