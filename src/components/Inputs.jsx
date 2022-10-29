import React from 'react';

const Inputs = (props) => {
    return (
        <div className="mb-2">
        <label
          className="block text-white text-sm font-bold mb-2"
          for={props.name}
        >
          {props.name}
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-black"
          id={props.name}
          type={props.type} disabled={props.disabled}  />
      </div>
    );
}

export default Inputs;
