import { Form, Input, FormRule } from "antd";

type FormCompType = "text" | "date"

export default function UserForm() {
    const onFinish = () => {

    }
    const onFinishFailed = () => {

    }
    return <div>
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <ReturnFormComp type={"text" as FormCompType} config={{ label: 'First Name', name: 'firstName', placeholder: '', required: true } as ReturnFormCompConfig} />
        </Form> </div>
}

interface ReturnFormCompConfig {
    placeholder: string,
    label: string,
    name: string,
    rules?: FormRule[],
    required?: boolean
}


const ReturnFormComp = (props: { type: FormCompType, config: ReturnFormCompConfig }) => {
    let component = <div></div>;
    const { type, config } = props
    switch (type) {
        case 'text':
            component = <Form.Item
                label={config.label}
                name={config.name}
                rules={[{ required: true, message: 'Please input your username!' }, ...(config.rules || [])]}
            >
                <Input placeholder={config.placeholder} />
            </Form.Item>
            break;

        default:
            break;
    }
    return component
}