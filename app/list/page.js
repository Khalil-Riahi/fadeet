// // 'use client';
// // import { useEffect, useState } from "react";

// // export default function History() {
// //     const [subscriptions, setSubscriptions] = useState([]);
// //     const [loading, setLoading] = useState(true);
// //     const [idUser, setIdUser] = useState(null);

// //     useEffect(() => {
// //         async function fetchUserId() {
// //             try {
// //                 // Fetch the user ID from the backend
// //                 const userIdResponse = await fetch('http://127.0.0.1:8000/ELACO/', {
// //                     credentials: 'include', // Include cookies for authentication
// //                 });

// //                 if (!userIdResponse.ok) {
// //                     throw new Error('Failed to fetch user ID');
// //                 }

// //                 const userIdData = await userIdResponse.json();
// //                 setIdUser(userIdData.id_user); // Set the user ID
// //             } catch (error) {
// //                 console.error("Error fetching user ID:", error);
// //             }
// //         }

// //         fetchUserId();
// //     }, []);

// //     useEffect(() => {
// //         if (!idUser) return; // Don't fetch subscriptions until idUser is available

// //         async function fetchSubscriptions() {
// //             try {
// //                 // Fetch subscriptions using the user ID
// //                 const response = await fetch(`http://127.0.0.1:8000/ELACO/userSubscription/getUsersubscriptionByIduser/${idUser}`);
// //                 const data = await response.json();

// //                 setSubscriptions(data.data.userSubscriptions || []);
// //             } catch (error) {
// //                 console.error("Error fetching subscriptions:", error);
// //             } finally {
// //                 setLoading(false);
// //             }
// //         }

// //         fetchSubscriptions();
// //     }, [idUser]); // Re-run when idUser changes

// //     return (
// //         <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
// //             <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6">
// //                 {/* Header */}
// //                 <div className="flex justify-between items-center border-b pb-4">
// //                     <h2 className="text-2xl font-semibold text-[#0C9F9C]">Subscription History</h2>
// //                 </div>

// //                 {/* Loading State */}
// //                 {loading ? (
// //                     <div className="flex justify-center items-center py-6">
// //                         <span className="text-gray-500 text-lg">Loading...</span>
// //                     </div>
// //                 ) : subscriptions.length > 0 ? (
// //                     <div className="overflow-x-auto mt-4">
// //                         <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
// //                             <thead className="bg-[#0C9F9C] text-white">
// //                                 <tr>
// //                                     <th className="py-3 px-4 text-left">ID</th>
// //                                     <th className="py-3 px-4 text-left">Start Date</th>
// //                                     <th className="py-3 px-4 text-left">End Date</th>
// //                                     <th className="py-3 px-4 text-left">Subscription Type</th>
// //                                     <th className="py-3 px-4 text-left">Payment Status</th>
// //                                 </tr>
// //                             </thead>
// //                             <tbody>
// //                                 {subscriptions.map((subscription, index) => (
// //                                     <tr key={subscription._id} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100`}>
// //                                         <td className="py-3 px-4 text-gray-700">{subscription._id}</td>
// //                                         <td className="py-3 px-4 text-gray-700">{subscription.start_date.substring(0, 10)}</td>
// //                                         <td className="py-3 px-4 text-gray-700">{subscription.end_date.substring(0, 10)}</td>
// //                                         <td className="py-3 px-4 text-gray-700 text-gray-700">{subscription.subscription_type}</td>
// //                                         <td className={`py-3 px-4 font-semibold ${subscription.payment_status === "Paid" ? "text-green-600" : "text-red-600"}`}>
// //                                             {subscription.payment_status || "Unknown"}
// //                                         </td>
// //                                     </tr>
// //                                 ))}
// //                             </tbody>
// //                         </table>
// //                     </div>
// //                 ) : (
// //                     <div className="text-center py-6 text-gray-500">No Subscriptions Found</div>
// //                 )}
// //             </div>
// //         </div>
// //     );
// // }
// // 'use client';
// // import { useEffect, useState } from "react";

// // export default function History() {
// //     const [subscriptions, setSubscriptions] = useState([]);
// //     const [loading, setLoading] = useState(true);
// //     const [idUser, setIdUser] = useState(null);

// //     useEffect(() => {
// //         async function fetchUserId() {
// //             try {
// //                 const userIdResponse = await fetch('http://127.0.0.1:8000/ELACO/', {
// //                     credentials: 'include', 
// //                 });

// //                 console.log('Response Status:', userIdResponse.status);
// //                 console.log('Response Status Text:', userIdResponse.statusText);

// //                 if (!userIdResponse.ok) {
// //                     throw new Error(`Failed to fetch user ID: ${userIdResponse.statusText}`);
// //                 }

// //                 const userIdData = await userIdResponse.json();
// //                 setIdUser(userIdData.id_user);
// //             } catch (error) {
// //                 console.error("Error fetching user ID:", error);
// //             }
// //         }

// //         fetchUserId();
// //     }, []);

// //     useEffect(() => {
// //         if (!idUser) return; // Don't fetch subscriptions until idUser is available

// //         async function fetchSubscriptions() {
// //             try {
// //                 // Fetch subscriptions using the user ID
// //                 const response = await fetch(`http://127.0.0.1:8000/ELACO/userSubscription/getUsersubscriptionByIduser/${idUser}`);
// //                 const data = await response.json();

// //                 setSubscriptions(data.data.userSubscriptions || []);
// //             } catch (error) {
// //                 console.error("Error fetching subscriptions:", error);
// //             } finally {
// //                 setLoading(false);
// //             }
// //         }

// //         fetchSubscriptions();
// //     }, [idUser]); // Re-run when idUser changes

// //     return (
// //         <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
// //             <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6">
// //                 {/* Header */}
// //                 <div className="flex justify-between items-center border-b pb-4">
// //                     <h2 className="text-2xl font-semibold text-[#0C9F9C]">Subscription History</h2>
// //                 </div>

// //                 {/* Loading State */}
// //                 {loading ? (
// //                     <div className="flex justify-center items-center py-6">
// //                         <span className="text-gray-500 text-lg">Loading...</span>
// //                     </div>
// //                 ) : subscriptions.length > 0 ? (
// //                     <div className="overflow-x-auto mt-4">
// //                         <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
// //                             <thead className="bg-[#0C9F9C] text-white">
// //                                 <tr>
// //                                     <th className="py-3 px-4 text-left">ID</th>
// //                                     <th className="py-3 px-4 text-left">Start Date</th>
// //                                     <th className="py-3 px-4 text-left">End Date</th>
// //                                     <th className="py-3 px-4 text-left">Subscription Type</th>
// //                                     <th className="py-3 px-4 text-left">Payment Status</th>
// //                                 </tr>
// //                             </thead>
// //                             <tbody>
// //                                 {subscriptions.map((subscription, index) => (
// //                                     <tr key={subscription._id} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100`}>
// //                                         <td className="py-3 px-4 text-gray-700">{subscription._id}</td>
// //                                         <td className="py-3 px-4 text-gray-700">{subscription.start_date.substring(0, 10)}</td>
// //                                         <td className="py-3 px-4 text-gray-700">{subscription.end_date.substring(0, 10)}</td>
// //                                         <td className="py-3 px-4 text-gray-700 text-gray-700">{subscription.subscription_type}</td>
// //                                         <td className={`py-3 px-4 font-semibold ${subscription.payment_status === "Paid" ? "text-green-600" : "text-red-600"}`}>
// //                                             {subscription.payment_status || "Unknown"}
// //                                         </td>
// //                                     </tr>
// //                                 ))}
// //                             </tbody>
// //                         </table>
// //                     </div>
// //                 ) : (
// //                     <div className="text-center py-6 text-gray-500">No Subscriptions Found</div>
// //                 )}
// //             </div>
// //         </div>
// //     );
// // }
// // 'use client';
// // import { useEffect, useState } from "react";

// // export default function History() {
// //     const [subscriptions, setSubscriptions] = useState([]);
// //     const [loading, setLoading] = useState(true);
// //     const [idUser, setIdUser] = useState(null);
// //     const [error, setError] = useState(null);

// //     useEffect(() => {
// //         async function fetchUserId() {
// //             try {
// //                 const response = await fetch('http://127.0.0.1:8000/ELACO/', {
// //                     method: 'GET',
// //                     credentials: 'include',
// //                     headers: {
// //                         'Content-Type': 'application/json',
// //                     },
// //                 });

                
// //                 if (!response.ok) {
// //                     throw new Error(`Failed to fetch user ID: ${response.statusText}`);
// //                 }

// //                 const userIdData = await response.json();
// //                 if (userIdData?.id_user) {
// //                     setIdUser(userIdData.id_user);
// //                 } else {
// //                     setError("User ID not found");
// //                     setLoading(false);
// //                 }
// //             } catch (error) {
// //                 console.error("Error fetching user ID:", error);
// //                 setError(error.message);
// //                 setLoading(false);
// //             }
// //         }

// //         fetchUserId();
// //     }, []);

// //     useEffect(() => {
// //         if (!idUser) return;

// //         async function fetchSubscriptions() {
// //             try {
// //                 const response = await fetch(`http://127.0.0.1:8000/ELACO/userSubscription/getUsersubscriptionByIduser/${idUser}`);
// //                 if (!response.ok) {
// //                     throw new Error(`Failed to fetch subscriptions: ${response.statusText}`);
// //                 }

// //                 const data = await response.json();
// //                 setSubscriptions(data?.data?.userSubscriptions || []);
// //             } catch (error) {
// //                 console.error("Error fetching subscriptions:", error);
// //                 setError(error.message);
// //             } finally {
// //                 setLoading(false);
// //             }
// //         }

// //         fetchSubscriptions();
// //     }, [idUser]);

// //     return (
// //         <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
// //             <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6">
// //                 <div className="flex justify-between items-center border-b pb-4">
// //                     <h2 className="text-2xl font-semibold text-[#0C9F9C]">Subscription History</h2>
// //                 </div>

// //                 {loading ? (
// //                     <div className="flex justify-center items-center py-6">
// //                         <span className="text-gray-500 text-lg">Loading...</span>
// //                     </div>
// //                 ) : error ? (
// //                     <div className="text-center py-6 text-red-600">{error}</div>
// //                 ) : subscriptions.length > 0 ? (
// //                     <div className="overflow-x-auto mt-4">
// //                         <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
// //                             <thead className="bg-[#0C9F9C] text-white">
// //                                 <tr>
// //                                     <th className="py-3 px-4 text-left">ID</th>
// //                                     <th className="py-3 px-4 text-left">Start Date</th>
// //                                     <th className="py-3 px-4 text-left">End Date</th>
// //                                     <th className="py-3 px-4 text-left">Subscription Type</th>
// //                                     <th className="py-3 px-4 text-left">Payment Status</th>
// //                                 </tr>
// //                             </thead>
// //                             <tbody>
// //                                 {subscriptions.map((subscription, index) => (
// //                                     <tr key={subscription?._id} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100`}>
// //                                         <td className="py-3 px-4 text-gray-700">{subscription?._id || "N/A"}</td>
// //                                         <td className="py-3 px-4 text-gray-700">{subscription?.start_date?.substring(0, 10) || "N/A"}</td>
// //                                         <td className="py-3 px-4 text-gray-700">{subscription?.end_date?.substring(0, 10) || "N/A"}</td>
// //                                         <td className="py-3 px-4 text-gray-700">{subscription?.subscription_type || "N/A"}</td>
// //                                         <td className={`py-3 px-4 font-semibold ${subscription?.payment_status === "Paid" ? "text-green-600" : "text-red-600"}`}>
// //                                             {subscription?.payment_status || "Unknown"}
// //                                         </td>
// //                                     </tr>
// //                                 ))}
// //                             </tbody>
// //                         </table>
// //                     </div>
// //                 ) : (
// //                     <div className="text-center py-6 text-gray-500">No Subscriptions Found</div>
// //                 )}
// //             </div>
// //         </div>
// //     );
// // }
// 'use client';
// import axios from "axios";
// import { useEffect, useState } from "react";

// export default function History() {
//   const [subscriptions, setSubscriptions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [idUser, setIdUser] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function fetchUserId() {
//       try {
//         const response = await fetch("http://localhost:8000/ELACO/getUserId", {
//           method: "GET",
//           credentials: "include",
         
//         });
    
//         if (!response.ok) {
//           throw new Error(`Failed to fetch user ID: ${response.statusText}`);
//         }
    
//         const userIdData = await response.json();
//         console.log("nourrrrrr"+userIdData.id_user)
//         setIdUser(userIdData.id_user);
//         console.log("id user "+idUser)
//         console.log("nourrrrrrrrrrrrrrrrrrrrrrr")    
//         } catch (error) {
//         console.error("Error fetching user ID:", error);
//         setError(error.message);
//       }
//     }

//     fetchUserId();
//   }, []);

//   useEffect(() => {
//     if (!idUser) return;

//     async function fetchSubscriptions() {
//       try {
//         console.log("amelllllllllllllllllllllllllllllll"+idUser)
//         const response = await fetch(
//           `http://localhost:8000/ELACO/userSubscription/getUsersubscriptionByIduser/${idUser}`,{
//             Method: 'GET',
//             credentials: 'include',
//            }
//             );
//         if (!response.ok) {
//           throw new Error(`Failed to fetch subscriptions: ${response.statusText}`);
//         }

//         const data = await response.json();
//         setSubscriptions(data?.data?.userSubscriptions || []);
//       } catch (error) {
//         console.error("Error fetching subscriptions:", error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchSubscriptions();
//   }, [idUser]);

//   return (
//     <div>
//     <p>hi</p>
//     <p className="my-10 mx-24"></p>
//     {/* <p>{token[1].jwt}</p> */}
//     <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Loopple/loopple-public-assets@main/riva-dashboard-tailwind/riva-dashboard.css" />
//     <div className="flex flex-wrap -mx-3 mb-5">
//         <div className="w-full px-3 mb-2 mx-auto">
//             <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
//                 <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
//                     {/* Card Header */}
//                     <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[50px] pb-0 bg-transparent">
//                         <h3  className="flex flex-col items-start justify-center m-1 ml-0 font-medium text-xl/tight text-[#0C9F9C]">
//                             <span style={{ color: '#0C9F9C' }} className="mr-2 font-semibold ">History</span>
//                         </h3>
//                     </div>
//                     {/* End Card Header */}
//                     {/* Card Body */}
//                     <div className="flex-auto block py-8 pt-6 px-9">
//                         <div className="overflow-x-auto">
//                             <table className="w-full my-0 align-middle text-dark border-neutral-200">
//                                 <thead className="align-bottom">
//                                     <tr className="font-semibold text-[0.95rem] text-secondary-dark">
//                                         <th className="pb-3 text-start min-w-[50px]">ID</th>
//                                         <th className="pb-3 text-start min-w-[50px]">Start Date</th>
//                                         <th className="pb-3 text-start min-w-[50px]">End Date</th>
//                                         <th className="pb-3 text-start min-w-[50px]">Subscription Type</th>
//                                         <th className="pb-3 text-start min-w-[50px]"> Status</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {subscriptions.length > 0 ? (
//                                         subscriptions.map((subscription) => (
//                                             <tr key={subscription._id} className="border-b border-dashed last:border-b-0">
//                                                 <td className="p-3 pl-0">
//                                                     <span className="font-semibold text-light-inverse text-md/normal">{subscription._id}</span>
//                                                 </td>
//                                                 <td className="p-3 pl-0">
//                                                     <span className="font-semibold text-light-inverse text-md/normal">{subscription.start_date.substring(0, 10)}</span>
//                                                 </td>
//                                                 <td className="p-3 pl-0">
//                                                     <span className="font-semibold text-light-inverse text-md/normal">{subscription.end_date.substring(0, 10)}</span>
//                                                 </td>
//                                                 <td className="p-3 pl-0">
//                                                     <span className="font-semibold text-light-inverse text-md/normal">{subscription.subscription_type}</span>
//                                                 </td>
//                                                 <td className="p-3 pl-0">
//                                                     <span className="font-semibold text-light-inverse text-md/normal">{subscription.status}</span> {/* Replace with actual payment status */}
//                                                 </td>
//                                             </tr>
//                                         ))
//                                     ) : (
//                                         <tr>
//                                             <td colSpan={5} className="text-center py-4">
//                                                 No Subscriptions Found
//                                             </td>
//                                         </tr>
//                                     )}
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
//   );
// }
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
                                                <th className="pb-3 text-start min-w-[50px]"> Status</th>
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
                                                            <span className="font-semibold text-light-inverse text-md/normal">{subscription.status}</span> {/* Replace with actual payment status */}
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