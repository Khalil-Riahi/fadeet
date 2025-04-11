'use client';
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter

export default function AddSubscription() {
  // State for form fields
  const [type, setType] = useState("monthly");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");

  const router = useRouter(); // Initialize useRouter

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the subscription data
    const subscriptionData = {
      type,
      price: parseFloat(price), // Convert price to a number
      description,
      photo,
    };

    try {
      // Send a POST request to the backend
      const response = await fetch("http://127.0.0.1:8000/ELACO/subcription/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(subscriptionData),
      });

      // Parse the JSON response
      const data = await response.json();

      // Check if the request was successful
      if (response.ok) {
        alert("Subscription added successfully!");
        // Reset the form
        setType("monthly");
        setPrice("");
        setDescription("");
        setPhoto("");
        router.push("/list"); // Navigate to the /list page
      } else {
        // Show the error message from the backend
        alert(`Failed to add subscription: ${data.Message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while adding the subscription.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-6 text-left text-black">Add Subscription</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Subscription Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Subscription Type
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              required
            >
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              placeholder="Enter price"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              rows="4"
              placeholder="Enter description"
              required
            />
          </div>

          {/* Photo URL */}
         

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Add Subscription
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}