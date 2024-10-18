const MainButton = ({ children }) => {
  return (
    <button className='rounded-full bg-btn-0071e3 hover:opacity-50 px-8 py-4 text-white text-sm font-semibold'>
        {children}
    </button>
  );
};

export default MainButton;