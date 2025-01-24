import './IconButton.scss'
import { FiShare } from "react-icons/fi";

export const IconButton = ({ icon, onClick }) => {
    return (
        <div className="IconButton" onClick={onClick}>
            <FiShare className={`${icon}`} />
        </div>
    )
}