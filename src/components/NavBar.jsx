import SheetLogo from '../svg/Google_Sheets_logo.svg';
const NavBar = () => {
    return <>
        <div>
            <img src={SheetLogo} alt="" />
        </div>
        <div>
            <div>
                <input value="Untitled spreadsheet" />
            </div>
            <div>
                <ul>
                    <li>File</li>
                    <li>Edit</li>
                    <li>View</li>
                    <li>Insert</li>
                    <li>Format</li>
                    <li>Data</li>
                    <li>Tools</li>
                    <li>Extensions</li>
                    <li>Help</li>
                </ul>
            </div>
        </div>
    </>
}
export default NavBar;