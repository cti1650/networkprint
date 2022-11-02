const App = () => {
  return (
    <div class="w-full h-[250px] grid grid-cols-2 sm:grid-cols-4 gap-0.5 justify-center">
      {linkList &&
        linkList.map((item) => {
          return (
            <LinkPanel
              key={item.url}
              url={item.url}
              title={item.title}
              description={item.description}
            />
          );
        })}
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
