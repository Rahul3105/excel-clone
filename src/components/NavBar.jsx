import SheetLogo from '../svg/Google_Sheets_logo.svg';
import {StyledNavBar} from './styledComponents/StyledNavBar'
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import PresentToAllOutlinedIcon from '@mui/icons-material/PresentToAllOutlined';
import LockIcon from '@mui/icons-material/Lock';
const NavBar = () => {
    return <StyledNavBar>
        <div className="leftPart">
            <div className='sheetLogo'>
                <img src={SheetLogo} alt="" width={27} />
            </div>
            <div className='sheetNameNnavBarLinks'>
                <div className='sheetName'>
                    <input value="Untitled spreadsheet" />
                </div>
                <div className='navBarLinks'>
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
        </div>
        <div className="rightPart">
            <div className="commentIcon">
                <CommentOutlinedIcon />
            </div>
            <div className="shareScreenIcon">
                <PresentToAllOutlinedIcon />
            </div>
            <button id='shareBtn'><LockIcon />Share</button>
            <div className="userDp">
                <img src="https://d32qys9a6wm9no.cloudfront.net/images/movies/backdrop/8a/311fc5278936da4f52cb910c936dc2e1_706x397.jpg?t=1636102095" alt="" />
            </div>
        </div>
    </StyledNavBar>
}
export default NavBar;