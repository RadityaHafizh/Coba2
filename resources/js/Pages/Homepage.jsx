import React from 'react';
import { Link, Head } from '@inertiajs/react';
import Navbar from '@/Components/Homepage/Navbar';
import NewsList from '@/Components/Homepage/NewsList';

export default function Homepage(props) {
    return (
        <div className='min-h-screen bg-slate-50'>
        <Head title={props.title}/>
        <Navbar />
            <div>
                <NewsList />
            </div>
        </div>
    )
}
