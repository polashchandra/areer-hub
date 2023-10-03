import React from 'react';

const SpecuficJob = ({alljob}) => {
    const {logo}=alljob
    return (
        <div>
            <img src={logo} alt="" />
        </div>
    );
};

export default SpecuficJob;