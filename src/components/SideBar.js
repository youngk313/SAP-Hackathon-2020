import React, { Component } from "react";
import styled from "styled-components";

const SidebarContainer = styled.div`
        height: 100vh;
        width: 320px;
        background-color: #1976d2;
        color: #fff;
        display: flex;
        flex-direction: column;
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
`;

const SidebarMenu = styled.ul`
        display: flex;
        align-items: left;
        flex-direction: column;
        list-style: none;
        width: 100%;
        padding-left: 0px;
        font-weight: 500;
        font-size: 0.875rem;
`;

const MenuLogo = styled.div`
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 16px;
        font-size: 18px;
        line-height: 1.5;
        font-weight: 600;
        height: 45px;
        color: #fff;
        margin: 0px 30px 30px 30px;
        padding-bottom: 20px;
        border-bottom: 1px solid #2e2e33;
`;

const SidebarMenuItem = styled.li`
        display: flex;
        height: 40px;
        width: 100%;
        align-items: center;
        padding-left: 30px;
        &:hover {
        background: rgba(255, 255, 255, 0.05);
        box-shadow: inset 3px 0 0 0 #ffffff;
        cursor: pointer;
}
`;

const Icon = styled.svg`
        width: 20px;
        height: 20px;
`;

const SidebarMenuItemLabel = styled.p`
        font-family: "Open Sans", sans-serif;
        color: #fff;
        font-size: 14px;
        font-weight: 600;
        line-height: 1.3;
        text-align: left;
        padding: 12px 0px;
        margin-left: 20px;
        color: #ffffff;
`;

const MenuSignOut = styled.div`
        border-top: 1px solid #2e2e33;
        font-size: 14px;
        line-height: 1.5;
        font-weight: 500;
        height: 45px;
        color: #fff;
        margin: 200px 30px 60px 30px;
        padding: 20px 0px 0px 30px;
`;
class Sidebar extends Component {
render() {
        return (
           <SidebarContainer>
               <SidebarMenu>
                   <MenuLogo>
                   {" "}
                   SAP peepee?
                   </MenuLogo>
               <SidebarMenuItem>
                   <Icon viewBox="0 0 20 20">
                   <path
                   width="20px"
                   height="20px"
                   fill="white"
                   d="M18,17 C18,17.552 17.552,18 17,18 L14,18 C13.448,18 13,17.552 13,17 L13,14 C13,13.448 13.448,13 14,13 L17,13 C17.552,13 18,13.448 18,14 L18,17 Z M18,11 L13,11 C11.895,11 11,11.895 11,13 L11,18 C11,19.105 11.895,20 13,20 L18,20 C19.105,20 20,19.105 20,18 L20,13 C20,11.895 19.105,11 18,11 L18,11 Z M18,6 C18,6.552 17.552,7 17,7 L14,7 C13.448,7 13,6.552 13,6 L13,3 C13,2.448 13.448,2 14,2 L17,2 C17.552,2 18,2.448 18,3 L18,6 Z M18,0 L13,0 C11.895,0 11,0.895 11,2 L11,7 C11,8.105 11.895,9 13,9 L18,9 C19.105,9 20,8.105 20,7 L20,2 C20,0.895 19.105,0 18,0 L18,0 Z M7,17 C7,17.552 6.552,18 6,18 L3,18 C2.448,18 2,17.552 2,17 L2,3 C2,2.448 2.448,2 3,2 L6,2 C6.552,2 7,2.448 7,3 L7,17 Z M7,0 L2,0 C0.895,0 0,0.895 0,2 L0,18 C0,19.105 0.895,20 2,20 L7,20 C8.105,20 9,19.105 9,18 L9,2 C9,0.895 8.105,0 7,0 L7,0 Z"
                   />
                   </Icon>
                   <SidebarMenuItemLabel>Dashboard</SidebarMenuItemLabel>
               </SidebarMenuItem>
               <SidebarMenuItem>
                   <Icon viewBox="0 0 20 20">
                   <path
                   width="20px"
                   height="20px"
                   fill="white"
                   d="M11,5.007 L11,12.007 C11,12.559 10.552,13.007 10,13.007 C9.448,13.007 9,12.559 9,12.007 L9,5.007 C9,4.455 9.448,4.007 10,4.007 C10.552,4.007 11,4.455 11,5.007 L11,5.007 Z M11,15.007 C11,15.559 10.552,16.007 10,16.007 C9.448,16.007 9,15.559 9,15.007 C9,14.455 9.448,14.007 10,14.007 C10.552,14.007 11,14.455 11,15.007 L11,15.007 Z M18,17 C18,17.552 17.552,18 17,18 L3,18 C2.448,18 2,17.552 2,17 L2,3 C2,2.448 2.448,2 3,2 L17,2 C17.552,2 18,2.448 18,3 L18,17 Z M18,0 L2,0 C0.895,0 0,0.899 0,2.003 L0,2.007 L0,18.007 C0,19.112 0.895,20 2,20 L18,20 C19.105,20 20,19.108 20,18.003 L20,2.007 C20,0.902 19,0 18,0 L18,0 Z"
                   id="path-1"
                   />
                   </Icon>
                   <SidebarMenuItemLabel>Upload Data</SidebarMenuItemLabel>
               </SidebarMenuItem>
               <SidebarMenuItem>
                   <Icon viewBox="0 0 20 20">
                   <path
                   width="20px"
                   height="20px"
                   fill="white"
                   d="M18,17 L18,7 C18,6.448 17.552,6 17,6 L3,6 C2.448,6 2,6.448 2,7 L2,17 C2,17.552 2.448,18 3,18 L17,18 C17.552,18 18,17.552 18,17 L18,17 Z M8,3 L8,4 L12,4 L12,3 C12,2.448 11.552,2 11,2 L9,2 C8.448,2 8,2.448 8,3 L8,3 Z M18,4 C19.105,4 20,4.895 20,6 L20,18 C20,19.105 19.105,20 18,20 L2,20 C0.895,20 0,19.105 0,18 L0,6 C0,4.895 0.895,4 2,4 L6,4 L6,2 C6,0.895 6.895,0 8,0 L12,0 C13.105,0 14,0.895 14,2 L14,4 L18,4 Z M9,15 L9,13 L7,13 C6.448,13 6,12.552 6,12 C6,11.448 6.448,11 7,11 L9,11 L9,9 C9,8.448 9.448,8 10,8 C10.552,8 11,8.448 11,9 L11,11 L13,11 C13.552,11 14,11.448 14,12 C14,12.552 13.552,13 13,13 L11,13 L11,15 C11,15.552 10.552,16 10,16 C9.448,16 9,15.552 9,15 L9,15 Z"
                   id="path-1"
                   />
                   </Icon>
                   <SidebarMenuItemLabel>Calendar</SidebarMenuItemLabel>
               </SidebarMenuItem>
               <SidebarMenuItem>
                   <Icon viewBox="0 0 20 20">
                   <path
                   width="20px"
                   height="20px"
                   fill="white"
                   d="M18,8 L2,8 L2,3 C2,2.448 2.337,2 2.889,2 L6.244,2 C6.626,2 6.974,2.217 7.142,2.56 L8.278,4.879 C8.614,5.565 9.31,6 10.074,6 L16.889,6 C17.441,6 18,6.448 18,7 L18,8 Z M18,17 C18,17.552 17.441,18 16.889,18 L2.889,18 C2.337,18 2,17.552 2,17 L2,10 L18,10 L18,17 Z M17.889,4 L11.125,4 C10.367,4 9.675,3.572 9.336,2.894 L8.442,1.106 C8.103,0.428 7.41,0 6.653,0 L1.889,0 C0.784,0 0,0.895 0,2 L0,18 C0,19.105 0.784,20 1.889,20 L17.889,20 C18.993,20 20,19.105 20,18 L20,6 C20,4.895 18.993,4 17.889,4 L17.889,4 Z"
                   id="path-1"
                   />
                  </Icon>
                  <SidebarMenuItemLabel>News</SidebarMenuItemLabel>
               </SidebarMenuItem>
               <SidebarMenuItem>
                  <Icon viewBox="0 0 20 19">
                  <path
                  width="20px"
                  height="19px"
                  fill="white"
                  d="M18,13.4070943 C18,13.8456529 17.729,14.2359392 17.324,14.3787018 L11,16.605388 L11,4.71500707 L11,4.53321581 L16.676,2.53453901 C17.325,2.30550257 18,2.80054996 18,3.50614654 L18,13.4070943 Z M9,4.71500707 L9,16.605388 L2.676,14.3787018 C2.271,14.2359392 2,13.8456529 2,13.4070943 L2,3.50614654 C2,2.80054996 2.675,2.30550257 3.324,2.53453901 L9,4.53321581 L9,4.71500707 Z M17.337,0.117845024 L10.331,2.64443543 C10.117,2.72146562 9.883,2.72146562 9.669,2.64443543 L2.663,0.117845024 C1.362,-0.351525631 0,0.639596213 0,2.05592474 L0,14.1157721 C0,14.9969975 0.547,15.7806514 1.36,16.0620684 L9.68,18.9460789 C9.888,19.0179737 10.112,19.0179737 10.32,18.9460789 L18.64,16.0620684 C19.453,15.7806514 20,14.9969975 20,14.1157721 L20,2.05592474 C20,0.639596213 18.638,-0.351525631 17.337,0.117845024 L17.337,0.117845024 Z"
                  id="path-1"
                  />
                  </Icon>
                  <SidebarMenuItemLabel>Library</SidebarMenuItemLabel>
               </SidebarMenuItem>

          <MenuSignOut>Sign Out</MenuSignOut>
     </SidebarMenu>
</SidebarContainer>
);
}
}
export default Sidebar;