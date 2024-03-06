import AnalyticsBox from "../../components/AnalyticsBox";
import { useGetTransactionsQuery } from "../../state/apiSlice";

const Row3 = () => {
  const {data} = useGetTransactionsQuery();
  //console.log(data);
  return (
    <>
      <AnalyticsBox gridArea={"g"}></AnalyticsBox>
      <AnalyticsBox gridArea={"h"}></AnalyticsBox>
      <AnalyticsBox gridArea={"i"}></AnalyticsBox>
      <AnalyticsBox gridArea={"j"}></AnalyticsBox>
    </>
  );
};

export default Row3;
