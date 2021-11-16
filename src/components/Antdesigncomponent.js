import React from 'react'
import { DatePicker, Button } from 'antd';

function Antdesigncomponent() {
    return (
        <div>
            <table className="table table-bordered">
                <tr>
                    <td>Date picker</td>
                    <td> <DatePicker picker="week" /></td>
                    <td>button</td>
                    <td>  <Button type="primary">Primary Button</Button>
                        <Button>Default Button</Button>
                        <Button type="dashed">Dashed Button</Button></td>
                </tr>
            </table>

            <br />

            <br />
            <Button type="text">Text Button</Button>
            <Button type="link">Link Button</Button>
        </div>
    )
}

export default Antdesigncomponent
