import React from 'react';
export const Content = (props) => {
return (
    <div className="props">
    <p>Some Contents for { props.name } { props.surname }</p>
    { props.children }
    </div>
);
};