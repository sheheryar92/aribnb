import React from 'react'
import "../Covid/Covid.css";

const TableData = ({countryTable}) => {
          return (
                    <div className='tableData'>
                              {countryTable.map( ({countryName, cases}) => (<tr>
                                        <td>{countryName}</td>
                                        <td>{cases}</td>
                              </tr>    )  )}
                              


                    </div>
          )
}

export default TableData
