import React from 'react'
import "./wholepage.css"

export default function Table(props) {
    return (
        <div>
            <div className="tablecontent">
                <table>
                    <tr>{props.name}</tr>
                    <tr>{props.email}</tr>
                    <tr>{props.phone}</tr>
                    <tr>{props.age}</tr>
                </table>
            </div>
        </div>
    )
}
