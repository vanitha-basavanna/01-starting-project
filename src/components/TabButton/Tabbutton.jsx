export default function TabButton({children, onSelect, isSelected}) {
    console.log('TAB BUTTON COMPONENT LOADING')
    return <li>
            <button className={isSelected ? 'active': undefined} onClick={onSelect}>{children}</button>
    </li>
}