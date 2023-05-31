'use client';

import React from 'react'
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import { format } from 'date-fns';

interface Props {
    data?: OpenSkyObj;
}

const SideBarHeader: NextPage<Props> = ({ data }) => {

    const formattedDate = data?.time ? format(new Date(data.time*1000), 'MM-dd-yyyy - hh:mm:ss aa x') : "";
    const router = useRouter();


    const handleRefresh = (e: any) => {
        e.preventDefault();
        router.refresh();
     }

    return <button onClick={handleRefresh}>Refresh {formattedDate}</button>
}

export default React.memo(SideBarHeader)