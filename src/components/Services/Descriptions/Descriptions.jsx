import React from 'react';
import './Descriptions.css';

export default function Descriptions({ data, selectedProject }) {
    const crop = (string, maxLength) => {
        return string.substring(0, maxLength);
    };

    return (
        <div className="descriptions">
            {data.map((project, i) => {
                const { title, description, no } = project;
                return (
                    <div
                        key={i}
                        className="description"
                        style={{
                            clipPath: selectedProject === i ? 'inset(0 0 0)' : 'inset(50% 0 50%)', // Fix clipPath
                            
                        }}
                    >
                        <div className="p-class">
                            <p>{no}</p>
                            <p>{title}</p>
                        </div>
                        <p className="desc-text">{description}</p>
                    </div>
                );
            })}
        </div>
    );
}
