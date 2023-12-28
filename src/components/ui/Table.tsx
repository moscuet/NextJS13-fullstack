'use client'

import { FC } from 'react'
import { ApiRequest } from '@prisma/client'
import { useTheme } from 'next-themes'
import { DataGrid, GridColDef, GridColumnHeaderParams } from '@mui/x-data-grid'
import { createTheme, ThemeProvider } from '@mui/material'
import { KeyIcon } from 'lucide-react'

type ModifiedRequestType<K extends keyof ApiRequest> = Omit<ApiRequest, K> & {
  timestamp: string
}

interface TableProps {
  userRequests: ModifiedRequestType<'timestamp'>[]
}

const renderHeader = (params: GridColumnHeaderParams) => (
  <strong className='font-semibold' style={{ display: 'flex', alignItems: 'center' }}>
    {params.colDef.headerName}
    {params.field === 'col1' && <KeyIcon style={{ marginLeft: '4px' }} />}
  </strong>
);

const columns: GridColDef[] = [
  { field: 'col1', headerName: 'Used API key', width: 400, renderHeader },
  { field: 'col2', headerName: 'Path', width: 250, renderHeader },
  { field: 'col3', headerName: 'Recency', width: 250, renderHeader },
  { field: 'col4', headerName: 'Duration', width: 150, renderHeader },
  { field: 'col5', headerName: 'Status', width: 150, renderHeader },
];


const Table: FC<TableProps> = ({ userRequests }) => {
  const { theme: applicationTheme } = useTheme()

  const darkTheme = createTheme({
    palette: {
      mode: applicationTheme === 'light' ? 'light' : 'dark',
    },
  })

  const rows = userRequests.map((request) => ({
    id: request.id,
    col1: request.usedApiKey,
    col2: request.path,
    col3: `${request.timestamp} ago`,
    col4: `${request.duration} ms`,
    col5: request.status,
  }))
  return (
    <ThemeProvider theme={darkTheme}>
      <DataGrid
        style={{
          backgroundColor: applicationTheme === 'light' ? '#f7fafc' : '#334154',
          fontSize: '1rem',
        }}
        columns={columns}
        rows={rows}
        pageSizeOptions={[5]}
        autoHeight
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },

        }}
        disableRowSelectionOnClick
      />
    </ThemeProvider>
  )
}

export default Table