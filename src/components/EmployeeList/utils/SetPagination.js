const SetPagination = (props) => {
    const { setPageSize, pageSize } = props;

    return (
		<label className="pagination-menu">
			Show
			
			<select
				className="dropdown"
				value={pageSize}
				onChange={(e) => {
					setPageSize(Number(e.target.value))
				}}
			>
				{[10, 25, 50, 100].map((pageSize) => (
					<option key={pageSize} value={pageSize}>
						{pageSize}
					</option>
				))}
			</select>

			entries
		</label>
    );
};
  
export default SetPagination;

