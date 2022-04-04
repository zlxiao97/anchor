export default (Stateless) => (props) => {
  /**
   * 用户点击标题第一个 Lauch Community 按钮
   */
  const onTitleBtn1Click = () => {
    console.log("onTitleBtn1Click");
  };

  /**
   * 用户点击标题第二个 Stake Fuse 按钮
   */
  const onTitleBtn2Click = () => {
    console.log("onTitleBtn2Click");
  };

  /**
   * 用户点击中间 Lauch Community 按钮
   */
  const onMiddleBtnClick = () => {
    console.log("onMiddleBtnClick");
  };

  const callback = {
    onTitleBtn1Click,
    onTitleBtn2Click,
    onMiddleBtnClick
  };
  return <Stateless {...props} {...callback} />;
};
