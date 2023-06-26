import React, { ComponentType } from 'react'
import { NextPage } from 'next';

interface SVGProps {
    className: string;
}

interface Props {
    value: string;
    label: string;
    Icon: ComponentType<SVGProps>;
}

const Kpi: NextPage<Props> = ({ value, label, Icon }) => {
    return (
        <div className="p-4 bg-white shadow-lg rounded-2xl w-48 dark:bg-gray-800">
            <div className="flex items-center">
                <Icon className="h-6 w-6 text-blue-500" />
                <p className="ml-2 text-gray-700 text-md dark:text-gray-50">
                    {label}
                </p>
            </div>
            <div className="flex flex-col justify-start">
                <p className="my-4 text-4xl font-bold text-left text-gray-800 dark:text-white">
                    {value}
                </p>
            </div>
        </div>
    )
}

export default React.memo(Kpi)