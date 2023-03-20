import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASEURL = 'http://localhost:3001/api'

export const shoesApi = createApi({
	reducerPath: 'shoesApi',
	baseQuery: fetchBaseQuery({ baseUrl: BASEURL }),
	endpoints: builder => ({
		getShoes: builder.query({
			query: () => '/sneakers'
		}),
		getShoesById: builder.query({
			query: id => `/sneakers/${id}`
		}),
		getShoesByName: builder.query({
			query: name => `/sneakers/${name}`
		})
	})
})

export const {
	useGetShoesQuery,
	useGetShoesByIdQuery,
	useGetShoesByNameQuery
} = shoesApi