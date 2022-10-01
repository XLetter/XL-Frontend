import React, { useEffect, useState } from "react";

import CommonTable from '../table/CommonTable';
import CommonTableColumn from '../table/CommonTableColumn';
import CommonTableRow from '../table/CommonTableRow'

import './HistoryList.css'

import historyList from './Data';

const HistoryList = props => {

    const [dataList, setDataList] = useState([]);

    useEffect(() => {
        setDataList(historyList);
    }, [])

    return (
        <div className="history_table">
            <CommonTable headerName={['Date', 'Amount[XLT]', 'Amount[KLAY]']}>
                {
                    dataList ? dataList.map((item, index) => {
                        return (
                            <CommonTableRow key={index}>
                                <CommonTableColumn>{item.date}</CommonTableColumn>
                                <CommonTableColumn>{item.xlt}</CommonTableColumn>
                                <CommonTableColumn>{item.klay}</CommonTableColumn>
                            </CommonTableRow>
                        )
                    }) : ''
                }
            </CommonTable>
        </div>
    )
}

export default HistoryList;