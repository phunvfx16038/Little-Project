import React, { useState } from 'react';
import './select.css';
import { AiFillCaretDown } from "react-icons/ai";

export type Option = {
    label: string;
    value: string | number;
}

interface SelectProps {
    placeholder?: string;
    options: Option[];
    selected?: Option | null;
    onChange: (selection: Option) => void;
};

export const Select: React.FC<SelectProps> = ({ placeholder, selected, options, onChange }) => {
    const [showOptions, setShowOptions] = useState(false);

    return (
        <div className='select-component'>
            <div onClick={() => setShowOptions(!showOptions)} className='select'>
                <AiFillCaretDown/>
            </div>
            {showOptions && (
                <div className='options'>
                    {options.map(option => (
                        <div onClick={() => {
                            onChange(option);
                            setShowOptions(false);
                        }} key={option.value} className='option'>
                            <span>{option.label}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};