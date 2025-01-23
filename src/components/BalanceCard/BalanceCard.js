import './BalanceCard.scss'
import {Button} from "../Button/Button";

export const BalanceCard = (props) => {
    const onClick = () => {
        alert('Add money');
    }

    return (
        <div className="balanceCard">
            <div className="balanceCard-label">
                Current Balance
            </div>
            <div className='balanceCard-balance'>
                $120000
            </div>
            <div className="balanceCard-info">
                <div className="balanceCard-number">1234 5555 4444 6666</div>
                <div className="balanceCard-date">12/26</div>
            </div>

            <Button
                className="balanceCard-btn"
                onClick={onClick}
            >
                Add money
            </Button>
        </div>
    )
}
