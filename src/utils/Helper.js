// function for filtering the data
export function filterData(searchText, restaurantsData) {
  const filterData = restaurantsData?.filter((restaurant) => {
    return restaurant?.data?.name
      ?.toLowerCase()
      .includes(searchText?.toLowerCase());
  });
  return filterData;
}

// for the istamart page
export const Section = ({ title, description, isVisible, section, setIsVisible }) => {
  return (
    <div className= 'border border-black p-2 m-2'>
      <h3 className="font-bold text-lg">{title}</h3>
      {isVisible ? (
        <>
          <button className="hover:underline" onClick={() => setIsVisible('')}>
            hide
          </button>
          <p>{description}</p>
        </>
      ) : (
        <button
        className="hover:underline"
          onClick={() => {
            setIsVisible(section);
          }}
        >
          show
        </button>
      )}
    </div>
  );
};
