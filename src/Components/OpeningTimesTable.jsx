import React from "react";

const OpeningTimesTable = () => {
    return (
        <div>
            <table>
                <thead>
                    <th>Day</th>
                    <th>Opens</th>
                    <th>Closes</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Monday</td>
                        <td>10:00am</td>
                        <td>11:30pm</td>
                    </tr>
                    <tr>
                        <td>Tuesday</td>
                        <td>10:00am</td>
                        <td>11:30pm</td>
                    </tr>
                    <tr>
                        <td>Wednesday</td>
                        <td>10:00am</td>
                        <td>11:30pm</td>
                    </tr>
                    <tr>
                        <td>Thursday</td>
                        <td>10:00am</td>
                        <td>11:30pm</td>
                    </tr>
                    <tr>
                        <td>Friday</td>
                        <td>10:00am</td>
                        <td>11:30pm</td>
                    </tr>
                    <tr>
                        <td>Saturday</td>
                        <td>10:00am</td>
                        <td>02:00am</td>
                    </tr>
                </tbody>           
            </table>
        </div>
    )
}

export default OpeningTimesTable;