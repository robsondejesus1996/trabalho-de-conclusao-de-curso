import React, { useContext } from 'react';

import { TransactionContext } from '../context/TransactionContext';

import dummyData from '../utils/dummyData';

const Transactions = () =>{

    const { currentAccount } = useContext(TransactionContext);

    return (
        <div className='flex w-full justity-center items-center 2xl:px-20 gradient-bg-transactions'>
            <div className='flex flex-col md:p-12 py-12 py px-4 '>
                { currentAccount ? (
                    <h3 className='text-white text-3xl text-center my-2'>

                    </h3>
                ) : (
                    <h3 className='text-white text-3xl text-center my-2'>
                        Conect sua conta no Metamask para Visualizar suas Transações.
                    </h3> 
                )}
            </div>
        </div>
    );
};

export default Transactions;