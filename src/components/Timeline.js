import React from 'react';
import HorizontalLine from "./HorizontalLine";
import Pin from "./Pin";
import education from "../Data/Education";

export function Timeline({onPinClick}){

    return(
        <div className={"timeline"}>

            {education.map((item, index) => (
                <Pin
                    key={index}
                    position={`${item.position}%`}
                    color={"var(--secondary-color)"}
                    type={item.type}
                    title={item.title}
                    description={item.description}
                    place={item.place}
                    year={item.year}

                    onClick={onPinClick}

                />
            ))}
            <div Style={"width:100%; border-bottom:5px solid var(--secondary-color); position: relative; top:50%; border-radius: 50px"}></div>
        </div>
    )
}