type PropsType = {
  table: unknown;
};

export const DataTableColumnHeader = ({ table }: PropsType) => {
  if (!table) {
    return <div>No table</div>;
  }

  return <div>Data Table Heander</div>;
};
