import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import Charts from "../Charts";
import DataBox from "../DataBox";

const OverView = () => {
  return (
    <>
      <div className='data__container'>
        <DataBox
          percentage='24'
          title='Revenue'
          figure={"40000$"}
          Icon={AttachMoneyIcon}
          Arrow={ArrowDropUpIcon}
        />
        <DataBox
          percentage='15'
          title='Total Bookings'
          figure={6000}
          Icon={ConfirmationNumberIcon}
          Arrow={ArrowDropDownIcon}
          decrease
        />
        <DataBox
          percentage='24'
          title='Total Visits'
          figure={40000}
          Icon={DirectionsWalkIcon}
          Arrow={ArrowDropUpIcon}
        />
        <DataBox
          percentage='50'
          title='Total Users'
          figure={2000}
          Icon={PeopleAltIcon}
          Arrow={ArrowDropDownIcon}
          decrease
        />
      </div>
      <Charts />
    </>
  );
};

export default OverView;
