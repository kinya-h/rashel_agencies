import styles from "../style";

const GetStarted = () => (
  <div className={`${styles.flexCenter} mt-[3rem] w-[15rem] h-[3rem] border-transparent rounded p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-[purple] hover:bg-[green] w-[100%] h-[100%] `}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-bold text-[24px] leading-[23.4px]">
          <span className="text-gradient text-capitalize">Try for free</span>
        </p>
      </div>
  
    </div>
  </div>
);

export default GetStarted;
