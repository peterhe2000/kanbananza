import React from 'react';
import ListContainer from '../containers/ListContainer';

const Lists = ({ lists: listIds = [] }) => {
  console.log('listIds', listIds);
  return (
    <section className="Lists">
      {listIds.map((listId) => (
        <ListContainer listId={listId} />
      ))}
    </section>
  );
};

export default Lists;
