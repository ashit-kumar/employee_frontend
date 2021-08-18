 export const COLUMNS = [
    {
      Header: 'ID',
      Footer: 'ID',
      accessor: 'id',
      disableFilters: true,
      sticky: 'left'
    },
    {
      Header: 'First Name',
      Footer: 'First Name',
      accessor: 'firstname',
      sticky: 'left'
    },
    {
      Header: 'Last Name',
      Footer: 'Last Name',
      accessor: 'lastname',
      sticky: 'left'
    },
    {
        Header: 'Role',
        Footer: 'Role',
        accessor: 'role',
        sticky: 'left'
      },
      {
        Header: 'Salary',
        Footer: 'Salary',
        accessor: 'salary',
        sticky: 'left'
      },
    
    {
      Header: 'Address',
      Footer: 'Address',
      accessor: 'address'
    }    
  ]
  
  export const GROUPED_COLUMNS = [
    {
      Header: 'ID',
      Footer: 'ID',
      accessor: 'id'
    },
    {
      Header: 'Name',
      Footer: 'Name',
      columns: [
        {
          Header: 'First Name',
          Footer: 'First Name',
          accessor: 'firstname'
        },
        {
          Header: 'Last Name',
          Footer: 'Last Name',
          accessor: 'lastname'
        }
      ]
    },
    {
      Header: 'Job Info',
      Footer: 'Job Info',
      columns: [
        {
            Header: 'Role',
            Footer: 'Role',
            accessor: 'role',
            sticky: 'left'
        },
        {
            Header: 'Salary',
            Footer: 'Salary',
            accessor: 'salary',
            sticky: 'left'
        }
      ]
    },
    {
        Header: 'Address',
        Footer: 'Address',
        accessor: 'address'
    }
  ]

  