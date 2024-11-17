import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'

const Passwordinput = ({ value, onChange, placeholder }) => {

    const [isShowPassword, setIsShowPassword] = useState(false)
    const toggleIsShowPassword = () => {
        setIsShowPassword(!isShowPassword);
    };

    return (
        <div className='w-full flex items-center bg-transparent px-5 border-[1.5px] text-sm rounded mb-3 outline-none'>
            <input
                value={value}
                type={isShowPassword ? "text" : "password"}
                onChange={onChange}
                placeholder={placeholder || "Password"}
                className='w-full text-sm bg-transparent py-3 mr-3 outline-none rounded'
            />

            {isShowPassword ? (
                <FaRegEye
                    size={22}
                    className="text-primary cursor-pointer"
                    onClick={() => toggleIsShowPassword()}
                />
            ) : (
                <FaRegEyeSlash
                    size={22}
                    className="text-slate-400 cursor-pointer"
                    onClick={() => toggleIsShowPassword()}
                />
            )
            }
        </div>
    )
}

export default Passwordinput