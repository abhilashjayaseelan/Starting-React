const Offline = () => {
  return (
    <div className="offline-page">
      <div className="offline-page__header">
        <h1>You're Offline <span role="img" aria-label="Sleeping Emoji">💤</span></h1>
      </div>
      <div className="offline-page__body">
        <p>Please check your internet connection and try again.</p>
      </div>
      <div className="offline-page__animation">
        <div className="offline-page__dot"></div>
        <div className="offline-page__dot"></div>
        <div className="offline-page__dot"></div>
      </div>
    </div>
  );
};

export default Offline;
