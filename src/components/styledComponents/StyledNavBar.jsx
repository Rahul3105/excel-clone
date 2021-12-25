import styled from "styled-components";
const StyledNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  & > .leftPart {
    display: flex;
    width: 50%;
  }
  & .sheetLogo {
    margin-right: 10px;
    display: flex;
    align-items: center;
  }

  & .sheetName {
    input {
      border: none;
      font-size: 17px;
      padding: 2px 7px;
      color: #747070;
      line-height: 22px;
      border-radius: 2px;
      :hover,
      :focus {
        outline: 1px solid gainsboro;
      }
    }
  }
  & .navBarLinks {
    ul {
      display: flex;
      li {
        list-style: none;
        border-radius: 5px;
        padding: 5px 7px;
        font-size: 14px;
        :hover {
          background-color: gainsboro;
          cursor: pointer;
        }
      }
    }
  }
  ///////////////////////////////////right part Css starts from here////////////////////////////////

  & > .rightPart {
    /* border:1px solid lime; */
    display: flex;
    width: 20%;
    justify-content: space-between;
    align-items: center;
    & > .userDp {
      /* border:1px solid red; */
      width: 35px;
      height: 35px;
      border-radius: 50%;
      img {
        border-radius: 50%;
        width: 100%;
        height: 100%;
      }
    }
    & > #shareBtn {
      background-color: rgb(42, 137, 71);
      color: rgb(255, 255, 255);
      border: none;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      font-weight: 700;
      align-items: center;
      padding: 10px 14px;
      cursor: pointer;
      svg {
        font-size: 15px;
        margin-right: 5px;
      }
    }
    & > .shareScreenIcon {
        border  :1px solid gainsboro;
        padding: 4px 14px;
        display: flex;
        justify-content: center;
        align-items: center; 
        border-radius:30%;   
        color:rgb(26,115,232);
        cursor:pointer;
    }
  }
`;
export { StyledNavBar };
