import useMediaQuery from "@/hooks/useMediaQuery";
import useStates from "@/hooks/useStates";
import { useWeb3Context } from "@/vendors/hooks/web3-context";
import { message } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import reducer from "./utils/reducer";

export default (Stateless) => (props) => {
  const [state, disptch] = useStates(reducer, {
    quickLotto: {
      winning: "?",
      quick_Lotto_result: 5000000
    },
    superLotto: {
      winning1: "?",
      winning2: "?",
      winning3: "?",
      winning4: "?",
      winning5: "?",
      super_Lotto_result: 5000000
    }
  });
  const navigate = useNavigate();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  const isNoteBook = useMediaQuery(
    (theme) =>
      `(min-width: ${theme.breakpoints.screenXS}) and (max-width: ${theme.breakpoints.screenXXL})`
  );
  const {
    connect,
    disconnect,
    hasCachedProvider,
    provider,
    connected,
    address,
    chainID,
    web3Modal,
    providerChainID
  } = useWeb3Context();

  const _validate = (text) => {
    const number = +text;
    if (!Number.isNaN(number) && number > 0 && number < 10) {
      return true;
    }
    return false;
  };

  /**
   * 页面初始化
   */
  const init = async () => {
    console.log("init");
  };

  /**
   * QuickLotto 校验数字
   */
  const validateQuickLottoNumber = () => {
    return _validate(state.quickLotto.number);
  };

  /**
   * SuperLotto 校验数字
   */
  const validateSuperLottoNumber = () => {
    const { number1, number2, number3, number4, number5 } = state.superLotto;
    return [number1, number2, number3, number4, number5].every(_validate);
  };

  /**
   * QuickLotto 用户输入数字
   */
  const onQuickLottoNumberChange = (e) => {
    disptch({
      type: "setQuickLotto",
      payload: { ...state.quickLotto, number: e.target.value }
    });
  };

  /**
   * SuperLotto 用户输入数字
   */
  const onSuperLottoNumberChange = (name) => (e) => {
    disptch({
      type: "setSuperLotto",
      payload: { ...state.superLotto, [name]: e.target.value }
    });
  };

  /**
   * QuickLotto 用户点击 check
   */
  const onQuickLottoNumberCheck = () => {
    if (validateQuickLottoNumber()) {
      message.success("Verification passed");
    } else {
      message.error("Verification failed");
    }
  };

  /**
   * SuperLotto 用户点击 check
   */
  const onSuperLottoNumberCheck = () => {
    if (validateSuperLottoNumber()) {
      message.success("Verification passed");
    } else {
      message.error("Verification failed");
    }
  };

  /**
   * QuickLotto 用户点击 左侧 Submit 按钮
   */
  const onQuickLottoSubmitBtnClick = () => {
    if (validateQuickLottoNumber()) {
      console.log(state.quickLotto.number);
    } else {
      message.error("Verification failed");
    }
  };

  /**
   * SuperLotto 用户点击 左侧 Submit 按钮
   */
  const onSuperLottoSubmitBtnClick = () => {
    if (validateSuperLottoNumber()) {
      console.log(state.superLotto);
    } else {
      message.error("Verification failed");
    }
  };

  /**
   * QuickLotto 倒计时结束
   */
  const onQuickLottoCountDown = () => {
    disptch({
      type: "setSuperLotto",
      payload: {
        ...state.superLotto,
        winning: 3 //中奖号码
      }
    });
  };

  /**
   * SuperLotto 倒计时结束
   */
  const onSuperLottoCountDown = () => {
    disptch({
      type: "setQuickLotto",
      payload: {
        ...state.quickLotto,
        winning1: 5,
        winning2: 6,
        winning3: 7,
        winning4: 8,
        winning5: 9
      }
    });
  };

  useEffect(() => {
    init();
  }, []);

  const data = {
    ...state,
    isMobile,
    isNoteBook
  };

  const callback = {
    onQuickLottoNumberChange,
    onSuperLottoNumberChange,
    onQuickLottoNumberCheck,
    onSuperLottoNumberCheck,
    onQuickLottoSubmitBtnClick,
    onSuperLottoSubmitBtnClick,
    onQuickLottoCountDown,
    onSuperLottoCountDown
  };

  return <Stateless {...props} {...data} {...callback} />;
};
