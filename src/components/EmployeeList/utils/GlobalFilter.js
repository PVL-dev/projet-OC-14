import { useState } from 'react';
import { useAsyncDebounce } from 'react-table';

const GlobalFilter = ({ globalFilter, setGlobalFilter }) => {
	const [value, setValue] = useState(globalFilter);
	const onChange = useAsyncDebounce((value) => {
		setGlobalFilter(value || undefined)
	}, 200);

	return (
		<div className="filter-menu">
			Search :{' '}

			<input
				className="search-input"
				value={value || ''}
				onChange={(e) => {
					setValue(e.target.value);
					onChange(e.target.value);
				}}
			/>
		</div>
	);
};

export default GlobalFilter;

