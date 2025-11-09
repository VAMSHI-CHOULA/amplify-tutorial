import React from 'react';
// import { Button } from "@/components/ui/button";

const RazorpayButton = () => {

  const handlePayment = async () => {
    // In a real application, you would typically make an API call to your backend
    // to create an order and get an order_id from Razorpay.
    // For this example, we'll simulate it.

    const options = {
      key: 'rzp_test_RWpFc7XOgKX833', // Replace with your actual Key ID 
      amount: '500', // Amount in paisa (e.g., 50000 for ₹500)
      currency: 'INR',
      name: 'My Awesome Product',
      description: 'Test Payment',
      image: 'https://example.com/your_logo.png',
      handler: function (response) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        console.log(response);
        // Send this response to backend for verification if needed
      },
      prefill: {
        name: '<name>',
        email: '<email>',
        contact: '<phone>',
      },
      theme: {
        color: '#3399CC',
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <div className="flex">
      <div className="mt-4 ml-4">
        <button
          onClick={handlePayment}
          variant="default"
          className="w-full"
        >
          Get Certificate (₹5)
        </button>
      </div>
    </div>
  );
};

export default RazorpayButton;
