import data from "@/src/assets/dataMenuFooter.json";

const MenuFooter = () => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <div key={index} className="flex flex-col gap-5">
            <h4>{item.title}</h4>
            <ul className="flex flex-col gap-5">
              {item.items.map((menu, index) => {
                return (
                  <li key={index}>
                    <a href={menu.link}>{menu.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default MenuFooter;
