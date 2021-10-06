import { TopCom, Purple, Red, Belowred } from "./styles/TopComp.styled";

const TopComp = () => {
  return (
    <>
      <Purple>
        <TopCom>
          Top Companies Hiring<Red>Get internships in renowned companies</Red>
          <Belowred>
            Choose HiringBird for your next internship opportunity
          </Belowred>
        </TopCom>
      </Purple>
    </>
  );
};

export default TopComp;
