import { useState } from "react";
import DropdownItem from "./DropdownItem";

export default function DropdownList(props) {
  const { items, opened } = props;
  const [selectedItem, setSelectedItem] = useState(null);

  const onClickItem = (id) => {
    setSelectedItem(id);
  };

  return (
    <div className={`dropdown-wrapper ${opened ? 'open' : ''}`}>
      <ul className="dropdown">
        {items.map(item => (
          <DropdownItem key={item.id} item={item} selectedItem={selectedItem} onClickItem={onClickItem} />
        ))}
      </ul>
    </div>
  );
}