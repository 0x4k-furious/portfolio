const AppContainer = ({ children }) => (
  <div className="max-w-[1630px] mx-auto md:px-36">
    <div className="max-w-[1340px] xl:border-light-gray xl:border-r xl:border-l ">
      <main className="max-w-[1200px] mx-auto relative z-20">{children}</main>
    </div>
  </div>
);

AppContainer.propTypes = {};

export default AppContainer;
