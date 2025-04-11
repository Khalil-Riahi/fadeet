'use client';
// import { cookies } from 'next/headers'
import { useEffect, useState } from "react";


export default function History() {
    // console.log('hi')
    // const tok = await getToken()
    // console.log(tok)
    // const [token , setToken] = useState(null)
    const [subscriptions, setSubscriptions] = useState([]);

    

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://127.0.0.1:8000/ELACO/userSubscription/getUsersubscriptionByIduser/67be3887431164e407a791de');
                const data = await response.json();
                setSubscriptions(data.data.userSubscriptions);
            } catch (error) {
                console.error("Error fetching subscriptions:", error);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            <p>hi</p>
            <p className="my-10 mx-24"></p>
            {/* <p>{token[1].jwt}</p> */}
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Loopple/loopple-public-assets@main/riva-dashboard-tailwind/riva-dashboard.css" />
            <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full px-3 mb-2 mx-auto">
                    <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
                        <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
                            {/* Card Header */}
                            <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[50px] pb-0 bg-transparent">
                                <h3  className="flex flex-col items-start justify-center m-1 ml-0 font-medium text-xl/tight text-[#0C9F9C]">
                                    <span style={{ color: '#0C9F9C' }} className="mr-2 font-semibold ">History</span>
                                </h3>
                            </div>
                            {/* End Card Header */}
                            {/* Card Body */}
                            <div className="flex-auto block py-8 pt-6 px-9">
                                <div className="overflow-x-auto">
                                    <table className="w-full my-0 align-middle text-dark border-neutral-200">
                                        <thead className="align-bottom">
                                            <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                                                <th className="pb-3 text-start min-w-[50px]">ID</th>
                                                <th className="pb-3 text-start min-w-[50px]">Start Date</th>
                                                <th className="pb-3 text-start min-w-[50px]">End Date</th>
                                                <th className="pb-3 text-start min-w-[50px]">Subscription Type</th>
                                                <th className="pb-3 text-start min-w-[50px]">Payment Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {subscriptions.length > 0 ? (
                                                subscriptions.map((subscription) => (
                                                    <tr key={subscription._id} className="border-b border-dashed last:border-b-0">
                                                        <td className="p-3 pl-0">
                                                            <span className="font-semibold text-light-inverse text-md/normal">{subscription._id}</span>
                                                        </td>
                                                        <td className="p-3 pl-0">
                                                            <span className="font-semibold text-light-inverse text-md/normal">{subscription.start_date.substring(0, 10)}</span>
                                                        </td>
                                                        <td className="p-3 pl-0">
                                                            <span className="font-semibold text-light-inverse text-md/normal">{subscription.end_date.substring(0, 10)}</span>
                                                        </td>
                                                        <td className="p-3 pl-0">
                                                            <span className="font-semibold text-light-inverse text-md/normal">{subscription.subscription_type}</span>
                                                        </td>
                                                        <td className="p-3 pl-0">
                                                            <span className="font-semibold text-light-inverse text-md/normal">Paid</span> {/* Replace with actual payment status */}
                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan={5} className="text-center py-4">
                                                        No Subscriptions Found
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}