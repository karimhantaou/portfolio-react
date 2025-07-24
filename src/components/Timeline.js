// Timeline.js
import React from "react";
import schools from "../Data/Education";

const Timeline = () => {
    return (
        <div className="timeline-container">
            <div className="timeline">
                {schools.map(({ id, schoolName, degree, startYear, endYear }) => (
                    <div key={id} className="timeline-item">
                        <div className="timeline-content">
                            <h3>{schoolName}</h3>
                            <p>{degree}</p>
                            <span className="timeline-date">
                {startYear} - {endYear}
              </span>
                        </div>
                        <div className="timeline-point" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
