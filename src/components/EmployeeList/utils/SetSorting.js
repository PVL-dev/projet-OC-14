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
			<i className="fas fa-sort-up"></i>
			<i className="fas fa-sort-down"></i>
		</span>
	);
};

export default SetSorting;

