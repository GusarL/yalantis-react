import { GET_USER_LIST } from '../actionTypes';
import { monthList } from '../../constants';

const initialState = {
  userList: [],
};

function addMonthListItem (name, monthList, user) {
  monthList[name].usersNumber = ++monthList[name].usersNumber;
  monthList[name].userListPerMonth.push(user);
}

function countBirthdays (month, monthList, user) {
  switch (month) {
    case 0:
      addMonthListItem ('January', monthList, user);
      break;
    case 1:
      addMonthListItem ('Fabruary', monthList, user);
      break;
    case 2:
      addMonthListItem ('March', monthList, user);
      break;
    case 3:
      addMonthListItem ('April', monthList, user);
      break;
    case 4:
      addMonthListItem ('May', monthList, user);
      break;
    case 5:
      addMonthListItem ('June', monthList, user);
      break;
    case 6:
      addMonthListItem ('July', monthList, user);
      break;
    case 7:
      addMonthListItem ('August', monthList, user);
      break;
    case 8:
      addMonthListItem ('September', monthList, user);
      break;
    case 9:
      addMonthListItem ('October', monthList, user);
      break;
    case 10:
      addMonthListItem ('November', monthList, user);
      break;
    case 11:
      addMonthListItem ('December', monthList, user);
      break;
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
  case GET_USER_LIST: {
    const users = action.payload;
    const usersWithMonth = users.map(user => {
      user.month = new Date(user.dob).getMonth();
      countBirthdays(user.month, monthList, user);
      return user;
    });
    return {
      ...state,
      userList: usersWithMonth,
      birthsdaysSpredMonth: monthList,
    };
  }
  default:
    return state;
  }
}
