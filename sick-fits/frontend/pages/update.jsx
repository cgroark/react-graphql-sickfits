import UpdateItem from '../components/UpdateItem';
import Link from 'next/link';

const Sell = props => (
	<div>
		<UpdateItem id={props.query.id}/>
	</div>
)
export default Sell;