import styles from './index.module.less'

export default () => {
  return <div className={styles.logo} >
    <div className={styles.logo__img}></div>
    <span className={styles.logo__title} >fuse</span>
  </div>;
};
