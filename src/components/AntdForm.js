import React from 'react'
import Home from './Home';
import { Button, Form, Input, InputNumber, Select, message, } from 'antd';
import './AntdForm.css'
import axios from 'axios';
import { useForm } from 'antd/es/form/Form';


const AntdForm = () => {

    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Success:', values);

        axios.post('http://localhost:3000/api/employee/create', values).then((res) => {
            if (res.data?.success === true) {
                form.resetFields();
            }
        }).catch((err) => {
            console.log(err)
        })
        messageApi.open({
            type: 'success',
            content: 'EMPLOYEE record added successfully!',
        });

    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        messageApi.open({
            type: 'error',
            content: 'EMPLOYEE record was not added',
        });

    };




    return (
        <>
            <Home />

            <div className='form_div'>

                {contextHolder}

                <Form
                    className='form_div_form'
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    form={form}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <h2 className='form_h1'>ADD EMPLOYEE DATAS</h2>
                    <Form.Item
                        label="Employee name"
                        name="emp_name"
                        required rules={[{ required: true, message: "Please Enter Employee Name", asterisk: false }]}
                    >
                        <Input className='form_input1' />
                    </Form.Item>

                    <Form.Item label="Years Of Experience"
                        name="experience"
                        required rules={[{
                            validator(rule, value) {
                                return new Promise((resolve, reject) => {
                                    if (value >= 0) {
                                        resolve();
                                    }
                                    else {
                                        reject("years of experience above 0")
                                    }
                                })
                            }

                        }]}>
                        <InputNumber block />
                    </Form.Item>

                    <Form.Item label="employee skills"
                        name='skill'
                        required rules={[{ required: true, message: "Please choose any one skills" }]}>
                        <Select>
                            <Select.Option value="FullStack">FullStack</Select.Option>
                            <Select.Option value="FrontEnd">FrontEnd</Select.Option>
                            <Select.Option value="BackEnd">BackEnd</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item >
                        <Button type="primary" htmlType="submit" block >
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    )
}

export default AntdForm
