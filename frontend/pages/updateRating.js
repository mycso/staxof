import UpdateRating from '../components/UpdateRating';

const Rate = ({ query }) => (
	<div>
		<UpdateRating id={query.id} />
  	</div>
);

export default Rate;