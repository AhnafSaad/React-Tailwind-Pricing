import React from "react";

const Navlink = ({route}) => {
    return (
        <div>
            <li className="flex mr-2.5 font-semibold ">
                <a href={route.path}>{route.name}</a>
                </li>
        </div>
    );
};

export default Navlink;