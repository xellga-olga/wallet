import './Actions.scss'
import {Block} from "../Block/Block";
import { BsCopy } from "react-icons/bs";
import { BiShowAlt } from "react-icons/bi";


export const Actions = () => {
    const onCopy = () => {
        alert('On Copied');
    }

    const onShow = () => {
        alert('On Show CVV');
    }
    return (
        <div className='Actions'>
            <Block className='action' onClick={onCopy}>
                <BsCopy className='icon'/>
                <span>Copy card number</span>
            </Block>
            <Block className='action'>
                <BiShowAlt className='icon' onClick={onShow} />
                <span>Show SVV</span>
            </Block>
        </div>
    )
}