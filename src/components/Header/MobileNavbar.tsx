import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import menuItemInfo from "@/components/Header/menuItemInfo";
import { HEADER_MENU_TYPE } from "@/utils/constant";
import { useDispatch } from "react-redux";
import { openModalAction } from "@/redux/reducer/modal";

export default function MobileNavbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [openMenus, setOpenMenus] = useState([]); // 여러 메뉴가 동시에 열릴 수 있도록 배열로 상태 관리

  const toggleMenu = (index) => {
    if (openMenus.includes(index)) {
      // 이미 열린 메뉴라면 닫기
      setOpenMenus(openMenus.filter((i) => i !== index));
    } else {
      // 열려있지 않은 메뉴라면 열기
      setOpenMenus([...openMenus, index]);
    }
  };
  const openModal = () => {
    dispatch(openModalAction({ payload: { isOpenModal: true } }));
  };
  return (
    <nav className="absolute top-[80px] leading-7 flex font-flamabook text-center flex-col items-center ">
      <div className="py-14">
        {menuItemInfo
          .filter((menu) => menu.mode === HEADER_MENU_TYPE.NORMAL)
          .map((menu, index) => {
            const isSubMenuOpen = openMenus.includes(index);
            // 현재 경로와 메뉴 URL이 일치하는지 확인
            const isActiveMenu = location.pathname === menu.url;
            return (
              <div key={index} className="cursor-pointer py-1">
                {/* 메인 메뉴 클릭 시 서브메뉴가 있는지 여부에 따라 동작 */}
                <h3
                  className={`text-4xl leading-[4rem] ${menu.submenu.length > 0 ? "" : "cursor-pointer"} ${
                    isActiveMenu ? "text-menu-beige" : "" // 현재 경로와 일치하면 다른 색상 적용
                  }`}
                  onClick={() =>
                    menu.submenu.length > 0
                      ? toggleMenu(index)
                      : navigate(menu.url)
                  }
                >
                  {menu.title}
                </h3>

                {/* 서브메뉴가 있는 경우 펼쳐짐 */}
                {isSubMenuOpen &&
                  menu.submenu.length > 0 &&
                  menu.submenu.map(({ title, url }, subIndex) => {
                    const isActiveSubMenu = location.pathname === url; // 서브메뉴 경로와 현재 경로 비교
                    return (
                      <p
                        key={subIndex}
                        className={`pl-4 text-[16px] font-normal  ${
                          isActiveSubMenu ? "text-menu-beige" : "" // 서브메뉴가 활성화된 경우 색상 변경
                        }`}
                        onClick={() => navigate(url)}
                      >
                        {title}
                      </p>
                    );
                  })}
              </div>
            );
          })}
      </div>
      <div className="text-xl py-4 justify-center flex flex-col">
        <span className={"w-12 mb-4 mx-auto bg-menu-beige h-[1px]"}></span>
        <h3 className="cursor-pointer" onClick={openModal}>
          Order sample
        </h3>
      </div>
    </nav>
  );
}
