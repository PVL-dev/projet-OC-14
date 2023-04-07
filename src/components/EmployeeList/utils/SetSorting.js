import { ReactComponent as ArrowDown } from '../../../assets/icon/sort-down-solid.svg';
import { ReactComponent as ArrowUp } from '../../../assets/icon/sort-up-solid.svg';

const SetSorting = (props) => {
	const { direction } = props;

	return (
		<span
			className={
				direction === "ascending"
				? "set-sorting set-sorting--ascending"
				: direction === 'descending'
				? "set-sorting set-sorting--descending"
				: "set-sorting set-sorting--unsorted"
			}
		>
			<ArrowUp/>
			<ArrowDown/>
		</span>
	);
};

export default SetSorting;

