import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import stringCleaner from '../../helpers/stringCleaner'

const BASEURL = import.meta.env.VITE_BACK_URL || 'http://localhost:3001/api'

export const filteredShoesApi = createApi({
	reducerPath: 'filteredShoesApi',
	baseQuery: fetchBaseQuery({
		baseUrl: BASEURL,
		prepareHeaders: (headers, { getState }) => {
			headers.set('Cache-Control', 'no-cache')
			return headers
		}
	}),
	keepUnusedDataFor: 5,
	endpoints: builder => ({
		getShoes: builder.query({
			query: ({ filters, sort, refresh }) => {
				let endpoint = '/filter'
				let firstFilter = true

				for (const filter in filters) {
					const current = filters[filter]

					if (Array.isArray(current) && current.length > 0) {
						if (firstFilter) {
							endpoint += `?${filter}=`
							firstFilter = false
						} else endpoint += `&${filter}=`

						current.forEach((cur, i) => {
							if (i === current.length - 1) endpoint += `${cur}`
							else endpoint += `${cur}_`
						})
					}

					if (typeof current === 'string' && current.length > 0) {
						const cleanString = stringCleaner(current)

						if (firstFilter) {
							endpoint += `?${filter}=${cleanString}`
							firstFilter = false
						} else endpoint += `&${filter}=${cleanString}`
					}

					if (typeof current === 'number' && current > 0) {
						if (firstFilter) {
							endpoint += `?${filter}=${current}`
							firstFilter = false
						} else endpoint += `&${filter}=${current}`
					}
				}

				if (sort.type) {
					if (firstFilter) {
						endpoint += `?${'sort'}=${sort.type}_${sort.order}`
					} else endpoint += `&${'sort'}=${sort.type}_${sort.order}`
				}

				if (refresh) {
					if (firstFilter) {
						endpoint += `?${'refresh'}=${'true'}`
					} else endpoint += `&${'refresh'}=${refresh}`
				}

				return endpoint
			}
		})
	})
})
export const { useGetShoesQuery } = filteredShoesApi
