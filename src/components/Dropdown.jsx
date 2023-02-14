import { useState } from "react";
import DropdownList from "./DropdownList";

export default function Dropdown(props) {
  const { items } = props;
  const [opened, setOpened] = useState(true);

  const onToggle = () => setOpened(!opened);

  return (
    <>
      <button className="btn" onClick={onToggle}>
        <span>Account settings</span>
        <i className="material-icons">public</i>
      </button>
      <DropdownList opened={opened} items={items} />
    </>
  );
}