import { Button, Form, Input } from 'antd';
import React from 'react';
const MyFormItemContext = React.createContext([]);
function toArr(str) {
  return Array.isArray(str) ? str : [str];
}
const MyFormItemGroup = ({ prefix, children }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(() => [...prefixPath, ...toArr(prefix)], [prefixPath, prefix]);
  return <MyFormItemContext.Provider value={concatPath}>{children}</MyFormItemContext.Provider>;
};
const MyFormItem = ({ name, ...props }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
  return <Form.Item name={concatName} {...props} />;
};
const ContactForm = () => {
  const onFinish = (value) => {
    console.log(value);
  };
  return (
    <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
      <MyFormItemGroup prefix={['user']}>
        <MyFormItemGroup prefix={['name']}>
          <MyFormItem name="fullName" label="Họ và tên">
            <Input />
          </MyFormItem>
          <MyFormItem name="email" label="Email">
            <Input />
          </MyFormItem>
        </MyFormItemGroup>

        <MyFormItem name="phoneNumbers" label="SĐT">
          <Input />
        </MyFormItem>
      </MyFormItemGroup>
        <div className='contact-submit-button'>
            <Button type="primary" htmlType="submit">
                Gửi liên hệ
            </Button>
        </div>
      
    </Form>
  );
};
export default ContactForm;
