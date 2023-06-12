/**
 * Table组件
 */
import React from 'react'
import { TableStyle, RowStyle, CellStyle } from './styled'

export type TableProps = {}
const Table: React.FC<TableProps> = () => {
  return (
    <TableStyle>
      <RowStyle>
        <CellStyle>Cell 1</CellStyle>
        <CellStyle>Cell 2</CellStyle>
        <CellStyle>Cell 3</CellStyle>
      </RowStyle>
      <RowStyle>
        <CellStyle>Cell 4</CellStyle>
        <CellStyle>Cell 5</CellStyle>
        <CellStyle>Cell 6</CellStyle>
      </RowStyle>
      <RowStyle>
        <CellStyle>Cell 7</CellStyle>
        <CellStyle>Cell 8</CellStyle>
        <CellStyle>Cell 9</CellStyle>
      </RowStyle>
    </TableStyle>
  )
}
export default Table
