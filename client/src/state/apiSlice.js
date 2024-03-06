// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "api",
  tagTypes: ["Kpis", "Products", "Transactions"],
  endpoints: (build) => ({
    getKpis: build.query({
      query: () => "kpi/kpis/",
      providesTags: ["Kpis"],
    }),
    getProducts: build.query({
      query: () => "product/products/",
      providesTags: ["Products"],
    }),
    getTransactions: build.query({
      query: () => "transaction/transactions/",
      providesTags: ["Transactions"],
    }),
  }),
});

// Export the auto-generated hook for the `getKpis` query endpoint
export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } = apiSlice;