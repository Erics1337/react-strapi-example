import CtaCommandLine from '../../blocks/CtaCommandLine';
import Hero from '../../blocks/Hero'

const getBlockComponent = ({ __component, ...rest }, index) => {
	let Block

	console.log('__component', __component)

	switch (__component) {
		case 'blocks.hero':
			Block = Hero
			break
		case 'blocks.hero2':
			Block = Hero
			break
		case "blocks.cta-command-line":
			Block = CtaCommandLine;
			break;
	}

	return Block ? <Block key={`index-${index}`} {...rest} /> : null
}

const BlockManager = ({ blocks = [] }) => {
	console.log('Made it to blocks', blocks)
	return <div>{blocks.map(getBlockComponent)}</div>
}


export default BlockManager
