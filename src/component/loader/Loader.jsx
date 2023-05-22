import { GooeyCircleLoader } from "react-loaders-kit";
import styles from "./index.module.scss";

const Loader = () => {
  const loading = {
    loading: true,
    size: 275,
    duration: 2,
    colors: ["#ff4603", "#7fff00", "#00b3ff"],
  };

  return (
    <div className={styles.Loader}>
      <GooeyCircleLoader {...loading} />
    </div>
  );
};
export default Loader;
