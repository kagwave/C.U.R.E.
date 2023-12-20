import React from "react";

const UserIcon = ({ type }) => {
  let iconClass: string;

  switch (type) {
    case 'student':
      iconClass = 'fa-light fa-graduation-cap';
      break;
    case 'collaborator':
      iconClass = 'fa-light fa-user-tie-hair';
      break;
    case 'instructor':
      iconClass = 'fa-light fa-chalkboard-teacher';
      break;
    // Handle other cases as needed
    default:
      iconClass = 'default-icon';
  }

  return <i className={iconClass} style={{marginRight: '5px'}}></i>;
};

export default UserIcon;