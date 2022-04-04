import { useState } from "react";

export default (Stateless) => (props) => {
  const [selected, setSelected] = useState();

  /**
   * 用户点击右侧第一个 template 按钮
   */
  const onBtn1Click = () => {
    if (selected !== undefined) {
      alert(selected);
    }
  };

  /**
   * 用户点击右侧第二个 template 按钮
   */
  const onBtn2Click = () => {
    if (selected !== undefined) {
      alert(selected);
    }
  };

  /**
   * 用户点击左侧第一个 template 按钮
   */
  const onBtnLeftClick = () => {
    console.log("onBtnLeftClick");
  };

  const callback = {
    onBtn1Click,
    onBtn2Click,
    onBtnLeftClick,
    onSelectNumber: setSelected
  };
  return <Stateless {...props} selected={selected} {...callback} />;
};
