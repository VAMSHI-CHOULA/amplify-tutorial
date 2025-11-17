import React from 'react';
// import { Button } from "@/components/ui/button";

const RazorpayButton = () => {

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://api.vamshichoula.site"
    : "http://localhost:5000";

    const amount =100;
    const currency ="INR";
    const receiptId ="qwsaq1";

  const handlePayment = async (e) => {
    // In a real application, you would typically make an API call to your backend
    // to create an order and get an order_id from Razorpay.
    // For this example, we'll simulate it.
         
      
      const response =await  fetch(`${BASE_URL}/order`,{
        method: "POST",
        body: JSON.stringify({
            amount,
            currency,
            receipt: receiptId,
        }),
        headers:{
            "Content-Type":"application/json",
        },
      });

      const order= await response.json();
      console.log(order);

    const options = {
      key: 'rzp_live_ReOCD15QwCUTbw', // Replace with your actual Key ID  rzp_test_RWpFc7XOgKX833
      amount: '100', // Amount in paisa (e.g., 50000 for ₹500)
      currency: 'INR',
      name: 'My Awesome Product',
      description: 'Test Payment',
      image: 'https://example.com/your_logo.png',
      "order_id": order.id, 
      "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
      handler: async function (response) {
        // alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        // console.log(response);
        // Send this response to backend for verification if needed

        const body ={
            ...response
        };

        const validateRes =await fetch(`${BASE_URL}/order/validate`,
            {
                method:"POST",
                body: JSON.stringify(body),
                headers:{
                    "Content-Type":"application/json"
                },
            }
         );

         const jsonRes = await  validateRes.json();
         console.log(jsonRes);

         
      },
      prefill: {
        name: 'vamshichoula',
        email: 'vamshichoula1@gmail.com',
        contact: '7893175257',
      },
      theme: {
        color: '#3399CC',
      },
    };

    var rzp1 = new window.Razorpay(options);
      rzp1.on('payment.failed', function (response){
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
});


    rzp1.open();
    e.preventDefault();
  };

  return (
    <div className="flex">
      <div className="mt-4 ml-4">
        <button
          onClick={handlePayment}
          variant="default"
          className="w-full"
        >
          Get Certificate (₹1)
        </button>
      </div>
    </div>
  );
};

export default RazorpayButton;
