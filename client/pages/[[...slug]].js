import delve from 'dlv'
import BlockManager from '../components/shared/BlockManager'
import '../styles/globals.css'

import { getDataDependencies } from './services/api'
import { redirectToHomepage, getData } from '../utils'
import { getLocalizedParams } from '../utils/localize'

const Universals = ({ pageData }) => {
	console.log('pageData', pageData)
	const blocks = delve(pageData.attributes, 'dynamicZone')
	console.log('dynamicZone', blocks)
	return <BlockManager blocks={blocks} />
}

export async function getServerSideProps(context) {
	const { slug, locale } = getLocalizedParams(context.query)

	try {
		const data = getData(slug, locale)
		const res = await fetch(delve(data, 'data'))
		const json = await res.json()
		
		if (!json.data.length) {
			return redirectToHomepage()
		}

		const pageData = await getDataDependencies(delve(json.data, '0'))
		return {
			props: { pageData },
		}
	} catch (error) {
		console.log('error',error)
		return redirectToHomepage()
	}
}

export default Universals
