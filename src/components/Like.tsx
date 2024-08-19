import React, { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const LikeButton: React.FC = () => {
    const [status, setStatus] = useState(false);

    return (
        <button onClick={() => setStatus(!status)} style={{ backgroundColor: 'transparent', border: 'none' }}>
            {status ? <AiFillHeart color="red" size={30} /> : <AiOutlineHeart size={30} />}
        </button>
    );
};

export default LikeButton;