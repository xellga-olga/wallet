import './Menu.scss';
import { Block } from "../Block/Block";
import { FaWallet, FaChartPie, FaShoppingCart, FaCog } from 'react-icons/fa';
import { MdHistory } from 'react-icons/md';

export const Menu = () => {
    const menuItems = [
        {  icon: <FaWallet />, action: () => alert('Go to Wallet') },
        {  icon: <FaChartPie />, action: () => alert('View Analytics') },
        {  icon: <MdHistory />, action: () => alert('View Transactions') },
        {  icon: <FaShoppingCart />, action: () => alert('Go to Shopping') },
        {  icon: <FaCog />, action: () => alert('Open Settings') },
    ];

    return (
        <Block className="menu">
            {menuItems.map((item, index) => (
                <div
                    key={index}
                    className="menu-item"
                    onClick={item.action}
                >
                    <div className="menu-item-icon">{item.icon}</div>
                </div>
            ))}
        </Block>
    );
};
