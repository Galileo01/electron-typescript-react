import React from 'react';
import Greet from './components/Greetings'
import './index.less';
import {Button} from 'antd';
export default function Index() {
    return (
        <div id="index">
            <Greet></Greet>
            <div className="test">
            <span>hahah</span>
            <Button>click</Button>
            </div>
        </div>
    )
}
