import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASEURL = 'http://localhost:3001/api'

export const filteredShoesApi = createApi({
	reducerPath: 'filteredShoesApi',
	baseQuery: fetchBaseQuery({ baseUrl: BASEURL }),
	endpoints: builder => ({
		getShoesBySizes: builder.query({
			query: (sizes, sort, order) => {
				if (sort && order)
					return `/filter?sizes=${sizes}&sort=${sort}&order=${order}`
				return `/filter?sizes=${sizes}`
			}
		})
	})
})

export const { useGetShoesBySizesQuery } = filteredShoesApi
