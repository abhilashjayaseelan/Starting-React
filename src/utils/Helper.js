// function for filtering the data
export function filterData(searchText, restaurantsData) {
  const filterData = restaurantsData?.filter((restaurant) => {
    return restaurant?.data?.name
      ?.toLowerCase()
      .includes(searchText?.toLowerCase());
  });
  return filterData;
}
