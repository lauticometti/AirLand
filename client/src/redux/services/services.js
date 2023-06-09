import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASEURL = import.meta.env.VITE_BACK_URL || 'http://localhost:3001/api'

export const shoesApi = createApi({
	reducerPath: 'shoesApi',
	baseQuery: fetchBaseQuery({
		baseUrl: BASEURL,
		// prepareHeaders: (headers, { getState }) => {
		// 	headers.set('Cache-Control', 'no-cache')
		// 	return headers
		// }
	}),
	keepUnusedDataFor: 10,
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
		}),
		editShoeById: builder.mutation({
			query: ({ id, shoe }) => ({
				url: `/sneakers/${id}`,
				method: 'PATCH',
				body: shoe
			})
		}),
		addShoe: builder.mutation({
			query: shoe => ({
				url: '/sneakers',
				method: 'POST',
				body: shoe
			})
		})
	})
})

export const {
	useGetAllShoesQuery,
	useGetShoesByIdQuery,
	useGetSizesQuery,
	useGetShoesByNameQuery,
	useEditShoeByIdMutation,
	useAddShoeMutation
} = shoesApi
