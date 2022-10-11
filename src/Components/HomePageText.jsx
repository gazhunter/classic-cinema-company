import React from "react";
import Loremr1c1 from "./Loremr1c1";
import Loremr1c2 from "./Loremr1c2";
import Loremr2c1 from "./Loremr2c1";
import popcorn from './popcorn.png'
import classic from './classic.png';

const HomePageText = () => {
    return(
        <div width="80%">
            <table width="80%">
                <tr>
                    <td className="r1c1"><Loremr1c1 /></td>                
                    <td rowSpan="2" className="r1c2"><Loremr1c2 /></td>                
                </tr>
                <tr>
                    <td className="r2c1">
                        <img src={popcorn} alt="alt" className="popcornimg" />
                    </td>
                </tr>
                <tr>
                    <td className="r3c1">
                        <Loremr2c1 />
                    </td>
                    <td className="r3c2">
                        <img src={classic} alt="alt" className="popcornimg" />
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default HomePageText;