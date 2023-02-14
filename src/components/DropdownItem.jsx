export default function DropdownItem(props) {
  const { item, selectedItem, onClickItem } = props;

  return (
    <li className={item.id === selectedItem ? 'active' : ''} onClick={() => onClickItem(item.id)}><a>{item.title}</a></li>
  );
}