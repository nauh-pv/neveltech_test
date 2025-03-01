import data from "@/src/assets/dataLayout.json";

const MenuDesktop = () => {
  return (
    <>
      {data.menuFooter.map((item, index) => {
        return (
          <div key={index} className="flex-col gap-5 lg:flex hidden">
            <h4>{item.title}</h4>
            <ul className="flex flex-col gap-5">
              {item.items.map((menu, index) => {
                return (
                  <li key={index}>
                    <a className="text-secondWhite" href={menu.link}>
                      {menu.title}
                    </a>
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

export default MenuDesktop;
