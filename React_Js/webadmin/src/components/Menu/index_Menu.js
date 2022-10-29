
import { BanAccUserStaff } from '../../Reducer/Fetch_API/getlistStaff'
export const handleMenuClick = ({e , value}) => {
    console.log(e);
    console.log(value);
    switch (e.key) {
        case "2":
            break;
        default:
            return 0;
    }
};