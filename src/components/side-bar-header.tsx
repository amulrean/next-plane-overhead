'use client';

import React from 'react'
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';

interface Props {
    data?: OSFormattedStates;
}

const SideBarHeader: NextPage<Props> = ({ data }) => {

    const formattedDate = data?.date + ' - ' + data?.time;
    const router = useRouter();


    const handleRefresh = (e: any) => {
        e.preventDefault();
        router.refresh();
     }

    return <button >Refresh {formattedDate}</button>
}

export default React.memo(SideBarHeader)