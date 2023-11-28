const ThemeTab = () => {
    return <>
        <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost"></label>
            <ul tabIndex={0} className="top-16 dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-40">
                <li><div>Light</div></li>
                <li><div>Dark</div></li>
            </ul>
        </div>
    </>
}

export default ThemeTab;