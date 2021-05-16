import React from 'react'
import "./wholepage.css"

export default function Table(props) {
    return (
        <div>
            <div className="tablecontent">
                <table>
                    <tr>
                        <td>{props.name}</td>
                        

                    </tr>
                </table>
            </div>
        </div>
    )
}
