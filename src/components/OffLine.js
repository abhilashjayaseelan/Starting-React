const Offline = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">
        You're Offline{" "}
        <span role="img" aria-label="Sleeping Emoji" className="animate-bounce">
          💤
        </span>
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Please check your internet connection and try again.
      </p>
      <div className="flex space-x-2">
        <div className="w-4 h-4 rounded-full bg-gray-500 animate-bounce"></div>
        <div className="w-4 h-4 rounded-full bg-gray-500 animate-bounce"></div>
        <div className="w-4 h-4 rounded-full bg-gray-500 animate-bounce"></div>
      </div>
    </div>
  );
};

export default Offline;
