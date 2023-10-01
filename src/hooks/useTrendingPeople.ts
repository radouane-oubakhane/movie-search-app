import useMediaContent from "./useMediaContent";
import { Person } from "../entities/Person";

const useTrendingPeople = (selectedTimeWindow: "day" | "week") =>
  useMediaContent<Person>(
    "/trending/person",
    selectedTimeWindow,
    "trending-people"
  );

export default useTrendingPeople;
