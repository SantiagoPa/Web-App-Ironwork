import { getBalance, getInfoChartYear, getTopSellers } from "../helpers/analyticsRequest";
import { types } from "../types/types";

export const sellersStartLoading = () => {
  return async (dispatch) => {
    const resp = await getTopSellers("statistics/topsellers");
    const data = resp.data;
    dispatch(sellersLoaded(data));
  };
};

const sellersLoaded = (event) => ({
  type: types.analyticsTopSellersLoaded,
  payload: event,
});

export const chartYearStartLoading = (year, month) => {
  return async (dispatch) => {
    const resp = await getInfoChartYear("statistics/month/", year, month);
    const data = resp.data;
    dispatch(chartYearLoaded(data));
  };
};

const chartYearLoaded = (event) => ({
  type: types.analyticsChartYear,
  payload: event,
});

export const balanceStartLoading = (range) => {
  return async (dispatch) => {

    if (range === 3) {
      const resp = await getBalance("statistics/balance/", range);
      const data = resp.data;
      dispatch(cardTrimesterLoaded(data));
    } else if (range === 6) {
      const resp = await getBalance("statistics/balance/", range);
      const data = resp.data;
      dispatch(cardSemesterLoaded(data));
    }
  };
};

const cardTrimesterLoaded = (event) => ({
  type: types.analyticsCardTrimester,
  payload: event,
});

const cardSemesterLoaded = (event) => ({
  type: types.analyticsCardSemester,
  payload: event,
});
