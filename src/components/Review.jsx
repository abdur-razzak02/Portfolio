const Review = () => {
  return (
    <div className="px-5 lg:px-0 lg:w-3/4 mx-auto mb-10 lg:mb-16">
      <div className="text-center pb-5 sm:pb-10">
        <h1 className="text-xl mb-2 font-semibold text-main">Review</h1>
        <p className="text-4xl text-gray-500">Happy Clients Say</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-8">
        <div className="p-8 shadow hover:shadow-2xl rounded-lg bg-pink-50 hover:bg-lightPink transition duration-500 ease-in-out bg-center bg-cover bg-no-repeat text-center space-y-2">
          <img
            src="https://i.ibb.co.com/4PqKFMS/client1.jpg"
            alt="client"
            className="w-20 h-20 rounded-full flex justify-self-center mb-5"
          />
          <h1 className="text-gray-500">
            &quot;I had a great experience working with Abdur Razzak. They
            understood my vision and delivered a website that exceeded my
            expectations. Communication was smooth, and they were quick to
            address any changes. Highly recommended for professional and
            reliable web development!&quot; (Demo)
          </h1>
          <h2 className="font-semibold text-xl text-main">Harlan Ford</h2>
          <p>Client</p>
        </div>

        <div className="p-8 shadow hover:shadow-2xl rounded-lg bg-lightPink hover:bg-pink-50 bg-center bg-cover bg-no-repeat text-center space-y-2 transition duration-500 ease-in-out">
          <img
            src="https://i.ibb.co.com/vH1T1hR/client2.jpg"
            alt="client"
            className="w-20 h-20 rounded-full flex justify-self-center mb-5"
          />
          <h1 className="text-gray-500">
            &quot;Working with Abdur was a seamless experience. They delivered a
            high-quality website on time and were very responsive to my
            feedback. The attention to detail and professionalism was
            impressive. I highly recommend his services for anyone in need of
            top-notch web development!&quot; (Demo)
          </h1>
          <h2 className="font-semibold text-xl text-main">Sarah Wilson</h2>
          <p>Client</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
