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
    <div className="mart-section">
      <h3>{title}</h3>
      {isVisible ? (
        <>
          <button className="hide-button" onClick={() => setIsVisible('')}>
            hide
          </button>
          <p>{description}</p>
        </>
      ) : (
        <button
          className="hide-button"
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