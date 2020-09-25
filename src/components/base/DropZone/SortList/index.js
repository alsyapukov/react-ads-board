import React, { Component } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import s from './sortList.module.scss'

const SortableItem = SortableElement(
  ({ value, item }) =>
    <div
      className={s.trackItem}
      key={item}
    >
      <div className={s.wrap}>
        <img src={value.url} className={s.img} id={`image-${item}`} />
      </div>
    </div>
);

const SortableList = SortableContainer(({ items }) => {
  return (
    <div className={s.track}>
      {items.map((value, index) => (
        <SortableItem
          key={`item-${index}`}
          item={index}
          index={index}
          value={value}
        />
      ))}
    </div>
  );
});

class SortSearch extends Component {

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.props.sort(
      arrayMove(this.props.items, oldIndex, newIndex)
    );
  };

  render() {
    return (
      <SortableList
        items={this.props.items}
        onSortEnd={this.onSortEnd}
        axis="xy"
      />
    )
  }
}

export default SortSearch;
