import styles from "./index.module.scss";

const Content = () => {
  const handleClick = () => {
    ("Content");
  };

  return (
    <>
      <div onClick={handleClick} id="content" className={styles.Content}>
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.iconSkills}>
          <div className={styles.skillsLeft}>
            <img
              className={styles.imgSkills}
              src="https://camo.githubusercontent.com/c82fbcc2fcf16cdb2d8522a1ec04d7f7f2237b1325c3cc8a27bab3a871a02da8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f48544d4c2d4533344632363f6c6f676f3d68746d6c35266c6f676f436f6c6f723d7768697465267374796c653d666f722d7468652d6261646765"
            />
            <img
              className={styles.imgSkills}
              src="https://camo.githubusercontent.com/3e884cd542debe9e723dba95f5be9ed2ce600f41bc9f468280e44a332c496b32/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4353532d3135373242363f6c6f676f3d63737333266c6f676f436f6c6f723d7768697465267374796c653d666f722d7468652d6261646765"
            />
            <img
              className={styles.imgSkills}
              src="https://camo.githubusercontent.com/f1ce1218eb39d7e7b6d246fb5ce1f6340158187e17ba462750de73e09cd8864f/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a6176615363726970742d4637444631453f6c6f676f3d6a617661736372697074266c6f676f436f6c6f723d7768697465267374796c653d666f722d7468652d6261646765"
            />
            <img
              className={styles.imgSkills}
              src="https://camo.githubusercontent.com/876426d64480dd18283dc72bcf0f293d6871c746d5358168e28565efc1c0334d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f52656163742d3631444146423f6c6f676f3d7265616374266c6f676f436f6c6f723d7768697465267374796c653d666f722d7468652d6261646765"
            />
            <img
              className={styles.imgSkills}
              src="https://camo.githubusercontent.com/4f9d20f3a284d2f6634282f61f82a62e99ee9906537dc9859decfdc9efbb51ec/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f52656163745f526f757465722d4341343234353f7374796c653d666f722d7468652d6261646765266c6f676f3d72656163742d726f75746572266c6f676f436f6c6f723d7768697465"
            />
          </div>
          <div className={styles.skillsRight}>
            <img
              className={styles.imgSkills}
              src="https://camo.githubusercontent.com/aa2d67d682b7d59cb0955695b192fc1390c9da34e90aa0c63079c411d01a9c66/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f534153532d686f7470696e6b2e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d53415353266c6f676f436f6c6f723d7768697465"
            />
            <img
              className={styles.imgSkills}
              src="https://camo.githubusercontent.com/41326de293d3848e2ab0f29bf1680427128757fe6b586ceddf1097cb4eeb5ff7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7374796c65642d2d636f6d706f6e656e74732d4442373039333f7374796c653d666f722d7468652d6261646765266c6f676f3d7374796c65642d636f6d706f6e656e7473266c6f676f436f6c6f723d7768697465"
            />
            <img
              className={styles.imgSkills}
              src="https://camo.githubusercontent.com/b7395b00d152dc8f19cec61f582369bd580e31b8ed93d34646ec43aa675baa7c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6578742d626c61636b3f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6578742e6a73266c6f676f436f6c6f723d7768697465"
            />
            <img
              className={styles.imgSk}
              src="https://camo.githubusercontent.com/cec92673ea713fa89ba2ae2033daf5851f6f39393ff5b93231aa707d424638d9/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4e6f64656a732d626c61636b3f7374796c653d666c61742d737175617265266c6f676f3d4e6f64652e6a73"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Content;
