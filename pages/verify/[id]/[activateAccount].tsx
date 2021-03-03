import React from 'react';
import MainLayout from '../../../layouts/MainLayout';
import ActivateAccoount from '../../../components/ActivateAccount/ActivateAccountContainer';
import { useRouter } from 'next/router'

const activateAccount = () => {
    const router = useRouter();

    return (
        <MainLayout
        >
            <div className="min-vh-100 mt-5">
                <ActivateAccoount tokenID={router.query.id} pkId={router.query.activateAccount}/>
            </div>
        </MainLayout>
    );
};

export default activateAccount;