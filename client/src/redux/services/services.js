import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASEURL = import.meta.env.VITE_BACK_URL || 'http://localhost:3001/api'

export const shoesApi = createApi({
	reducerPath: 'shoesApi',
	baseQuery: fetchBaseQuery({ baseUrl: BASEURL }),
	endpoints: builder => ({
		getAllShoes: builder.query({
			query: () => '/sneakers'
		}),
		getShoesById: builder.query({
			query: id => `/sneakers?id=${id}`
		}),
		getShoesByName: builder.query({
			query: name => `/sneakers/${name}`
		}),
		getSizes: builder.query({
			query: () => '/sneakers/sizes'
		})
	})
})

export const {
	useGetAllShoesQuery,
	useGetShoesByIdQuery,
	useGetSizesQuery,
	useGetShoesByNameQuery
} = shoesApi
