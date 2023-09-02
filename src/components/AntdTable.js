import React, { useEffect, useState } from 'react'
import { Table, Button, Modal, Space } from 'antd';
import { Link } from 'react-router-dom';
import Home from './Home';
import './AntdTable.css'
import axios from 'axios';



const AntdTable = () => {


    const Ondelete = (values) => {

        Modal.confirm({
            title: "Are you sure, you want to delete this EMPLOYEE record?",
            okText: "Yes",
            okType: "danger",
            onOk: () => {
                console.log(values, "values")
                axios.delete(`http://localhost:3000/api/employee/delete/${values._id}`).then((res) => {
                    console.log(res)
                    test()
                }).catch((err) => {
                    console.log(err)
                })

            },
        });
    }

    
    const columns = [
        {
            title: 'Employee Name',
            dataIndex: 'emp_name',
            key: 'emp_name',
        },
        {
            title: 'Years Of Experience',
            dataIndex: 'experience',
            key: 'experience',
        },
        {
            title: 'Employee Skills',
            dataIndex: 'skill',
            key: 'skill',
        },
        {
            key: "5",
            title: "Actions",
            render: (values) => {
                return (
                    <>
                        <Space>

                            <Button type="primary" style={{ background: "red" }}
                                className='deletebtn'
                                onClick={() => Ondelete(values)}
                            >delete</Button>

                        </Space>

                    </>
                );
            },
        },

    ];

    const [employe, setEmploye] = useState([])

    useEffect(() => {
        test()
    }, [])

    const test = (() => {
        axios.get('http://localhost:3000/api/employee/getall').then((res) => {
            setEmploye(res.data.data)
        }).catch((err) => {
            console.log(err);
        })
    })
 

    return (
        <>
            <Home />
            <div className='table_div'>
                <Link to={'/form'}> <Button type="primary" className='create_button'>Create +</Button> </Link>
                <br />
                <Table dataSource={employe} columns={columns} pagination={false} />
            </div>
        </>

    )
}

export default AntdTable
