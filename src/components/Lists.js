import React from 'react';
import ListContainer from '../containers/ListContainer';

const Lists = ({ lists: listIds = [] }) => {
  return (
    <section className="Lists">
      {listIds.map((listId) => (
        <ListContainer key={listId} listId={listId} />
      ))}
    </section>
  );
};

export default Lists;
