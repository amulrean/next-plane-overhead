'use client';

import React from 'react'
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';

interface Props {
    data?: OpenSkyObj;
}

const SideBarHeader: NextPage<Props> = ({ data }) => {

    const router = useRouter();

    const handleRefresh = (e: any) => {
        e.preventDefault();
        router.refresh();
     }

    return <button onClick={handleRefresh}>Refresh</button>
}

export default React.memo(SideBarHeader)