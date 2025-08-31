
const Newsletter = () => {
  return (
    <div className="bg-gray-200 p-8 text-center">
      <h2 className="text-2xl font-bold">Subscribe to our Newsletter</h2>
      <p className="mt-2">Get the latest updates and offers.</p>
      <div className="mt-4 flex justify-center">
        <input type="email" placeholder="Enter your email" className="p-2 border rounded-l-md" />
        <button className="bg-blue-500 text-white p-2 rounded-r-md">Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
