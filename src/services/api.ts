import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const url =process.env.REACT_APP_BACKEND_URL

export const Api = createApi({
  tagTypes: [ 'Category','SubCategory'],
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => `/category/all`,
      providesTags:['SubCategory']
    }),
    getSubCategory:builder.query({
      query:(id) => `/category/all/${id}`,
      providesTags:['SubCategory']
   }),
  }),

})


export const { useGetCategoriesQuery,useGetSubCategoryQuery } = Api